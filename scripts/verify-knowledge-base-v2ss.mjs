import assert from "node:assert/strict";

import { ADC_RESOURCE_PAGES } from "../app/resources/adcResourceData.ts";

const baseUrl = (process.env.KB_VERIFY_BASE_URL || "http://127.0.0.1:4317").replace(/\/$/, "");
const protectedRoutes = [
  "/exotic-weed",
  "/premium-weed",
  "/aaa-weed",
  "/aa-weed",
  "/budget-weed",
  "/weed-dispensary-mississauga",
  "/resources",
];
const blockedPublicText = [
  "---",
  "remove fixed carton-price framing",
  "seo strategy",
  "keyword strategy",
  "content system",
  "implementation packet",
  "pinky",
  "cody",
  "agent x",
];

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function textContent(html) {
  return decodeEntities(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

async function readRoute(path) {
  const response = await fetch(baseUrl + path, { redirect: "follow" });
  assert.equal(response.status, 200, `${path} returned ${response.status}`);
  return response.text();
}

for (const page of ADC_RESOURCE_PAGES) {
  const path = `/resources/${page.slug}`;
  const html = await readRoute(path);
  const expectedCanonical = `https://www.highcoastalcannabis.com${path}`;
  const title = decodeEntities(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] || "";
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => textContent(match[1]));
  const visibleText = textContent(html).toLowerCase();

  assert.equal(title, page.seoTitle, `${path} title mismatch`);
  assert.equal(canonical, expectedCanonical, `${path} canonical mismatch`);
  assert.deepEqual(h1s, [page.title], `${path} H1 mismatch`);
  assert.ok(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html), `${path} is noindex`);
  assert.ok(html.includes('"@type":"Article"'), `${path} missing Article schema`);
  assert.ok(html.includes('"@type":"BreadcrumbList"'), `${path} missing BreadcrumbList schema`);
  assert.ok(!html.includes('"@type":"Product"') && !html.includes('"@type":"Offer"'), `${path} has forbidden product schema`);
  for (const blocked of blockedPublicText) {
    assert.ok(!visibleText.includes(blocked), `${path} exposes blocked text: ${blocked}`);
  }
}

for (const path of protectedRoutes) await readRoute(path);

console.log(`LC01 V2 SS route verification passed: ${ADC_RESOURCE_PAGES.length} authority resources + ${protectedRoutes.length} protected routes.`);
