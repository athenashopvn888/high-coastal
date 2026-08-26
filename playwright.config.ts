import { defineConfig } from "@playwright/test";

const useExternalServer = process.env.PLAYWRIGHT_EXTERNAL_SERVER === "1";

export default defineConfig({
  testDir: "./tests/browser",
  timeout: 75_000,
  expect: { timeout: 5_000 },
  fullyParallel: false,
  workers: 1,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:3107",
    channel: "msedge",
    headless: true,
    viewport: { width: 430, height: 800 },
  },
  webServer: useExternalServer ? undefined : {
    command: "npm run dev -- --hostname 127.0.0.1 --port 3107",
    url: "http://127.0.0.1:3107/delivery",
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
