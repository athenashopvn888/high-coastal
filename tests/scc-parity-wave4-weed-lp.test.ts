import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import nextConfig from "../next.config.ts";
import { SCC_HUB_LINKS } from "../app/lib/sccHub.ts";
import {
  BRAND_VISIT_FAQS,
  DELIVERY_FAQS,
  NATIVE_CIGARETTE_FAQS,
  NICOTINE_VAPE_FAQS,
  OPEN_NOW_FAQS,
  STORE_IDENTITY,
  VISIT_FAQS,
  WEED_DISPENSARY_FAQS,
  landingPageJsonLd,
  storeJsonLd,
} from "../app/lib/storeIdentity.ts";

const read = (path: string) => readFileSync(path, "utf8");

const MENU_SWIMLANE = [
  "app/lib/items.json",
  "app/lib/flowers.json",
  "scripts/prebuild-stock.js",
] as const;

const OTHER_FAQS = [
  ...VISIT_FAQS,
  ...OPEN_NOW_FAQS,
  ...BRAND_VISIT_FAQS,
  ...DELIVERY_FAQS,
  ...NATIVE_CIGARETTE_FAQS,
  ...NICOTINE_VAPE_FAQS,
];

test("Wave 4 keeps the 5th pillar on /weed-dispensary-mississauga with locked NAP", () => {
  const page = read("app/components/GBPLandingPage.tsx");
  const route = read("app/weed-dispensary-mississauga/page.tsx");
  const sitemap = read("app/sitemap.ts");

  assert.equal(STORE_IDENTITY.landingPath, "/weed-dispensary-mississauga/");
  assert.equal(STORE_IDENTITY.name, "High Coastal Cannabis");
  assert.equal(STORE_IDENTITY.addressDisplay, "1720 Lakeshore Rd W, Mississauga, ON L5J 1J5");
  assert.equal(STORE_IDENTITY.phoneDisplay, "+1 (289) 815-5222");
  assert.equal(STORE_IDENTITY.websiteUrl, "https://www.highcoastalcannabis.com");
  assert.match(page, /High Coastal Cannabis — Lakeshore \/ Clarkson \/ Port Credit Weed Dispensary in Mississauga/);
  assert.match(page, /nap\.addressDisplay/);
  assert.match(page, /nap\.phoneDisplay/);
  assert.match(page, /highcoastalcannabis\.com/);
  assert.match(page, /not a Square One mall pin/);
  assert.match(page, /Clarkson/);
  assert.match(page, /Port Credit/);
  assert.match(page, /WEED_DISPENSARY_FAQS/);
  assert.match(route, /GBPLandingPage/);
  assert.match(sitemap, /weed-dispensary-mississauga\//);
});

test("Wave 4 weed LP has unique FAQ + FAQPage and keeps the business website on the homepage", () => {
  const schema = landingPageJsonLd();
  const types = schema["@graph"].map((node) => node["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("FAQPage"));
  assert.ok(types.includes("BreadcrumbList"));
  assert.ok(!types.includes("Store"));

  const webpage = schema["@graph"].find((node) => node["@type"] === "WebPage") as {
    url: string;
    mainEntity: { "@id": string };
  };
  assert.equal(webpage.url, "https://www.highcoastalcannabis.com/weed-dispensary-mississauga/");
  assert.equal(webpage.mainEntity["@id"], "https://www.highcoastalcannabis.com/#store");
  assert.equal(storeJsonLd().url, "https://www.highcoastalcannabis.com");
  assert.ok(WEED_DISPENSARY_FAQS.length >= 5);
  assert.ok(WEED_DISPENSARY_FAQS.some((faq) => /Clarkson or Port Credit/i.test(faq.question)));
  assert.ok(WEED_DISPENSARY_FAQS.some((faq) => /Square One mall pin/i.test(faq.question)));
  assert.ok(WEED_DISPENSARY_FAQS.some((faq) => /flower tiers/i.test(faq.question)));

  const otherQuestions = new Set(OTHER_FAQS.map((faq) => faq.question));
  for (const faq of WEED_DISPENSARY_FAQS) {
    assert.equal(otherQuestions.has(faq.question), false, `duplicate FAQ: ${faq.question}`);
  }
});

test("Wave 4 hub card and dense links cover visit, brand FAQ, 24h, delivery, cig, nic, and tiers", () => {
  const discovery = read("app/lib/weedDiscovery.ts");
  assert.match(discovery, /export const WEED_DISPENSARY_HUB_CARD/);
  assert.match(discovery, /href: "\/weed-dispensary-mississauga\/"/);
  assert.match(discovery, /Weed dispensary on Lakeshore/);
  assert.match(discovery, /Lakeshore \/ Clarkson \/ Port Credit/);
  assert.ok(SCC_HUB_LINKS.some((link) => link.href === "/weed-dispensary-mississauga/"));

  const landing = read("app/components/GBPLandingPage.tsx");
  const home = read("app/page.tsx");
  const resources = read("app/resources/resourceData.ts");
  const info = read("app/lib/seoPages.ts");

  assert.match(home, /WEED_DISPENSARY_HUB_CARD/);
  assert.match(resources, /Weed dispensary on Lakeshore/);
  assert.match(info, /"href": "\/weed-dispensary-mississauga\/"/);

  for (const href of [
    "/visit",
    "/high-coastal-visit",
    "/24-hour-dispensary-mississauga",
    "/cannabis-delivery-lakeshore",
    "/native-cigarettes-lakeshore",
    "/nicotine-vape-lakeshore",
    "/exotic",
    "/premium",
    "/aaa",
    "/aa",
    "/budget",
  ]) {
    assert.match(landing, new RegExp(href.replaceAll("/", "\\/")), `weed LP missing ${href}`);
  }
});

test("Wave 4 Native wording stays off the weed LP and menu JSON stays untouched", async () => {
  const landing = read("app/components/GBPLandingPage.tsx");
  const faqs = JSON.stringify(WEED_DISPENSARY_FAQS);
  const hub = read("app/lib/sccHub.ts");
  const redirects = await nextConfig.redirects!();

  assert.doesNotMatch(landing + faqs, /Ottawa|Gatineau|ByWard/i);
  assert.doesNotMatch(landing + faqs, /six nations|6ix nations/i);
  assert.doesNotMatch(landing + faqs, /on[- ]reserve|Nation affiliation|healing ceremony|medical (card|claim|advice)/i);
  assert.doesNotMatch(landing, /\bNation\b|reserve|medical/i);
  assert.doesNotMatch(hub, /nicotine-pouches-lakeshore|grabba-lakeshore/);
  assert.ok(!redirects.some((redirect) => redirect.source === "/weed-dispensary-mississauga"));
  assert.ok(!redirects.some((redirect) => redirect.source === "/weed-dispensary-mississauga/"));

  for (const file of MENU_SWIMLANE) {
    assert.match(file, /items\.json|flowers\.json|prebuild-stock\.js/);
  }
  assert.doesNotMatch(landing, /adcInventory|APPS_SCRIPT_URL|flowers\.json|items\.json/);
});
