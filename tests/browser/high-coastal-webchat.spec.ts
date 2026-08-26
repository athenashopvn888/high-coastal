import { expect, type Page, test } from "@playwright/test";

const API_BASE = "https://milestone-1-demo.vercel.app";
const SESSION_KEY = "sod-web-chat:LC01";
const TOKEN = "mock-active-token";
const EXPIRED_MESSAGE = "This chat expired after 7 days. Your unsent message is still saved here. Start a new chat to continue.";

type MockMessage = { id: string; direction: "inbound" | "outbound"; body: string; at: number };
type MockState = {
  getExpired: boolean;
  postExpired: boolean;
  messages: MockMessage[];
};

function conversation(state: MockState) {
  return {
    id: "mock-conversation",
    messages: [...state.messages],
    customerIntent: "RETURNING_CUSTOMER",
    customerNumberMasked: "905-***-3323",
    phoneVersion: 1,
    intakeCycleId: null,
    idReviews: [],
  };
}

async function installBrowserState(page: Page, state: MockState) {
  await page.addInitScript(({ sessionKey, token }) => {
    localStorage.setItem(sessionKey, token);

    const geometry = { height: 700, width: 410, offsetTop: 10, offsetLeft: 10 };
    const viewport = new EventTarget();
    Object.defineProperties(viewport, {
      height: { configurable: true, get: () => geometry.height },
      width: { configurable: true, get: () => geometry.width },
      offsetTop: { configurable: true, get: () => geometry.offsetTop },
      offsetLeft: { configurable: true, get: () => geometry.offsetLeft },
    });
    Object.defineProperty(window, "visualViewport", { configurable: true, value: viewport });
    Object.defineProperty(window, "__setMockVisualViewport", {
      configurable: true,
      value: (next: Partial<typeof geometry>) => {
        Object.assign(geometry, next);
        viewport.dispatchEvent(new Event("resize"));
        viewport.dispatchEvent(new Event("scroll"));
      },
    });
  }, { sessionKey: SESSION_KEY, token: TOKEN });

  await page.route(`${API_BASE}/api/web-chat/**`, async (route) => {
    const request = route.request();
    const path = new URL(request.url()).pathname;
    const method = request.method();

    if (path.endsWith("/messages") && method === "GET") {
      await route.fulfill({
        status: state.getExpired ? 401 : 200,
        contentType: "application/json",
        body: JSON.stringify(state.getExpired ? { message: "Expired" } : { conversation: conversation(state) }),
      });
      return;
    }

    if (path.endsWith("/messages") && method === "POST") {
      if (state.postExpired) {
        await route.fulfill({ status: 401, contentType: "application/json", body: JSON.stringify({ message: "Expired" }) });
        return;
      }
      const body = request.postDataJSON() as { message: string };
      state.messages.push({ id: `customer-${state.messages.length}`, direction: "inbound", body: body.message, at: Date.now() });
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ conversation: conversation(state) }) });
      return;
    }

    if (path.endsWith("/status")) {
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ availability: { state: "AVAILABLE", message: null, resumeAt: null } }) });
      return;
    }

    if (path.endsWith("/id-review") && method === "GET") {
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ upload: { available: false } }) });
      return;
    }

    await route.fulfill({ status: 404, contentType: "application/json", body: JSON.stringify({ message: "Unexpected mocked route" }) });
  });
}

async function openActiveChat(page: Page) {
  await page.goto("/delivery");
  const launcher = page.getByRole("button", { name: "LIVE ORDER" });
  await launcher.evaluate((button) => (button as HTMLButtonElement).click());
  const dialog = page.getByRole("dialog", { name: "High Coastal Cannabis Web Chat" });
  await expect(dialog).toBeVisible();
  await expect(page.getByText("Existing order message")).toBeVisible();
  await expect(page.getByRole("button", { name: "Minimize chat" })).toBeFocused();
  return { dialog, launcher };
}

test("active chat stays modal and visible through viewport, reply, restore, and GET expiry", async ({ page }) => {
  const state: MockState = {
    getExpired: false,
    postExpired: false,
    messages: [{ id: "existing", direction: "outbound", body: "Existing order message", at: Date.now() }],
  };
  await installBrowserState(page, state);
  const { dialog, launcher } = await openActiveChat(page);
  const composer = page.getByRole("textbox", { name: "Web Chat message" });

  expect(await page.locator("[inert]").count()).toBeGreaterThan(0);
  await page.evaluate(() => {
    const target = window as typeof window & { __setMockVisualViewport: (next: { height: number; width: number; offsetTop: number; offsetLeft: number }) => void };
    target.__setMockVisualViewport({ height: 460, width: 360, offsetTop: 35, offsetLeft: 25 });
  });

  const rootBox = await page.locator(".sod-web-chat.open").boundingBox();
  const composerBox = await page.locator(".sod-chat-composer").boundingBox();
  expect(rootBox).not.toBeNull();
  expect(composerBox).not.toBeNull();
  expect(rootBox!.x).toBeCloseTo(25, 0);
  expect(rootBox!.y).toBeCloseTo(35, 0);
  expect(rootBox!.width).toBeCloseTo(360, 0);
  expect(rootBox!.height).toBeCloseTo(460, 0);
  expect(composerBox!.x).toBeGreaterThanOrEqual(25);
  expect(composerBox!.y).toBeGreaterThanOrEqual(35);
  expect(composerBox!.x + composerBox!.width).toBeLessThanOrEqual(385);
  expect(composerBox!.y + composerBox!.height).toBeLessThanOrEqual(495);

  await page.keyboard.press("Shift+Tab");
  await expect(composer).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Minimize chat" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(launcher).toBeFocused();
  await expect.poll(() => page.locator("[inert]").count()).toBe(0);

  await launcher.evaluate((button) => (button as HTMLButtonElement).click());
  await composer.fill("Keep this unsent draft");
  await page.getByRole("button", { name: "Minimize chat" }).click();
  await launcher.evaluate((button) => (button as HTMLButtonElement).click());
  await expect(composer).toHaveValue("Keep this unsent draft");

  state.messages.push({ id: "dispatcher-reply", direction: "outbound", body: "Dispatcher reply arrived", at: Date.now() });
  await expect(page.getByText("Dispatcher reply arrived")).toBeVisible({ timeout: 17_000 });
  await expect(composer).toHaveValue("Keep this unsent draft");

  await page.reload();
  await page.getByRole("button", { name: "LIVE ORDER" }).evaluate((button) => (button as HTMLButtonElement).click());
  await expect(page.getByText("Dispatcher reply arrived")).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Web Chat message" })).toHaveValue("Keep this unsent draft");

  state.getExpired = true;
  await expect(page.locator(".sod-chat-expired")).toContainText(EXPIRED_MESSAGE, { timeout: 17_000 });
  await expect(page.getByText("Dispatcher reply arrived")).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Web Chat message" })).toHaveValue("Keep this unsent draft");
  await page.getByRole("button", { name: "Start a new chat" }).click();
  await expect(page.getByText("Tell us about your account")).toBeVisible();
  await page.getByRole("radio", { name: /I'm returning/ }).check();
  await expect(page.getByPlaceholder("What would you like to order today?")).toHaveValue("Keep this unsent draft");
});

test("POST 401 preserves the active composer, context, and recovery draft", async ({ page }) => {
  const state: MockState = {
    getExpired: false,
    postExpired: true,
    messages: [{ id: "existing", direction: "outbound", body: "Existing order message", at: Date.now() }],
  };
  await installBrowserState(page, state);
  await openActiveChat(page);

  const composer = page.getByRole("textbox", { name: "Web Chat message" });
  await composer.fill("Draft rejected by expired POST");
  await page.getByRole("button", { name: "Send" }).click();
  await expect(page.locator(".sod-chat-expired")).toContainText(EXPIRED_MESSAGE);
  await expect(page.getByText("Existing order message")).toBeVisible();
  await expect(composer).toHaveValue("Draft rejected by expired POST");
  await page.getByRole("button", { name: "Start a new chat" }).click();
  await page.getByRole("radio", { name: /I'm returning/ }).check();
  await expect(page.getByPlaceholder("What would you like to order today?")).toHaveValue("Draft rejected by expired POST");
});
