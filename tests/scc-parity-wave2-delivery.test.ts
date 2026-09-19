import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import nextConfig from "../next.config.ts";
import { SCC_HUB_LINKS } from "../app/lib/sccHub.ts";
import {
  DELIVERY_FAQS,
  STORE_IDENTITY,
  deliveryPageJsonLd,
  storeJsonLd,
} from "../app/lib/storeIdentity.ts";

const read = (path: string) => readFileSync(path, "utf8");

const HUB_SURFACES = [
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/high-coastal-visit/page.tsx",
  "app/24-hour-dispensary-mississauga/page.tsx",
  "app/cannabis-delivery-lakeshore/page.tsx",
  "app/native-cigarettes-lakeshore/page.tsx",
  "app/nicotine-vape-lakeshore/page.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/components/Footer.tsx",
  "app/[tier]/page.tsx",
] as const;

test("Wave 2 Lakeshore delivery LP is a dedicated neighbourhood surface", () => {
  const page = read("app/cannabis-delivery-lakeshore/page.tsx");
  const sitemap = read("app/sitemap.ts");

  assert.equal(STORE_IDENTITY.deliveryPath, "/cannabis-delivery-lakeshore");
  assert.equal(STORE_IDENTITY.deliveryMenuPath, "/delivery");
  assert.match(page, /Cannabis Delivery on Lakeshore — Clarkson \/ Port Credit/);
  assert.match(page, /1720 Lakeshore Rd W/);
  assert.match(page, /1720 Lakeshore Rd W, Mississauga, ON L5J 1J5/);
  assert.match(page, /\+1 \(289\) 815-5222/);
  assert.match(page, /highcoastalcannabis\.com/);
  assert.match(page, /\$60/);
  assert.match(page, /LIVE ORDER/);
  assert.match(page, /Clarkson/);
  assert.match(page, /Port Credit/);
  assert.match(page, /not a Square One/);
  assert.match(page, /separate service/);
  assert.match(page, /does not publish a 24\/7 delivery clock/);
  assert.match(page, /href="\/"/);
  assert.match(page, /nap\.landingPath|weed-dispensary-mississauga/);
  assert.match(page, /nap\.visitPath|\/visit/);
  assert.match(page, /nap\.hoursPath|24-hour-dispensary-mississauga/);
  assert.match(page, /nap\.brandVisitPath|high-coastal-visit/);
  assert.match(page, /nap\.deliveryMenuPath|\/delivery/);
  assert.match(page, /href="\/exotic"/);
  assert.match(sitemap, /\$\{BASE\}\/cannabis-delivery-lakeshore/);
  assert.doesNotMatch(sitemap, /\$\{BASE\}\/cannabis-delivery-lakeshore\//);
});

test("delivery schema describes the page and keeps the business website on the homepage", () => {
  const schema = deliveryPageJsonLd();
  const types = schema["@graph"].map((node) => node["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("FAQPage"));
  assert.ok(types.includes("BreadcrumbList"));
  assert.ok(!types.includes("Store"));

  const webpage = schema["@graph"].find((node) => node["@type"] === "WebPage") as {
    url: string;
    mainEntity: { "@id": string };
  };
  assert.equal(webpage.url, "https://www.highcoastalcannabis.com/cannabis-delivery-lakeshore");
  assert.equal(webpage.mainEntity["@id"], "https://www.highcoastalcannabis.com");
  assert.equal(storeJsonLd().url, "https://www.highcoastalcannabis.com");
  assert.ok(DELIVERY_FAQS.length >= 5);
  assert.ok(DELIVERY_FAQS.some((faq) => /24 hours/i.test(faq.question)));
  assert.ok(DELIVERY_FAQS.some((faq) => /Lakeshore, Clarkson, or Port Credit/i.test(faq.question)));
});

test("delivery hours stay separate from 24h walk-in claims", () => {
  const page = read("app/cannabis-delivery-lakeshore/page.tsx");
  const faqs = JSON.stringify(DELIVERY_FAQS);
  const hours = read("app/24-hour-dispensary-mississauga/page.tsx");
  const menu = read("app/delivery/DeliveryContent.tsx");

  assert.match(page, /Delivery hours are not 24-hour walk-in hours/);
  assert.match(faqs, /does not publish a 24\/7 delivery clock/i);
  assert.match(hours, /walk-in door only/);
  assert.match(menu, /Walk-in is <strong>open 24 hours<\/strong>/);
  assert.match(menu, /Cannabis delivery is a separate/);
  assert.match(page, /does not publish a 24\/7 delivery clock/);
  assert.doesNotMatch(page, /delivery is open 24 hours/i);
  assert.doesNotMatch(page, /delivery runs 24/i);
});

test("Wave 2 linking graph covers homepage, visit, brand FAQ, B12, weed hub, delivery LP, menu, and tiers", () => {
  assert.ok(SCC_HUB_LINKS.some((link) => link.href === "/cannabis-delivery-lakeshore"));

  for (const file of HUB_SURFACES) {
    const source = read(file);
    assert.match(source, /cannabis-delivery-lakeshore|SccHubNav/, `${file} must reach the delivery LP`);
  }

  const home = read("app/page.tsx");
  const visit = read("app/visit/page.tsx");
  const brand = read("app/high-coastal-visit/page.tsx");
  const hours = read("app/24-hour-dispensary-mississauga/page.tsx");
  const weed = read("app/components/GBPLandingPage.tsx");
  const footer = read("app/components/Footer.tsx");
  const resources = read("app/resources/resourceData.ts");
  const deliveryLp = read("app/cannabis-delivery-lakeshore/page.tsx");

  for (const source of [home, visit, brand, hours, weed, footer, resources]) {
    assert.match(source, /\/cannabis-delivery-lakeshore/, "hub surface missing delivery LP");
  }
  for (const slug of ["exotic", "premium", "aaa", "aa", "budget"]) {
    assert.match(deliveryLp, new RegExp(`href="/${slug}"`), `delivery LP missing /${slug}`);
  }
});

test("delivery LP stays Lakeshore-true with Native-wording care and no smoke SEO", async () => {
  const page = read("app/cannabis-delivery-lakeshore/page.tsx");
  const faqs = JSON.stringify(DELIVERY_FAQS);
  const hub = read("app/lib/sccHub.ts");
  const redirects = read("next.config.ts");
  const redirectList = await nextConfig.redirects!();

  assert.doesNotMatch(page + faqs, /Ottawa|Gatineau|ByWard/i);
  assert.match(page, /not a Square One mall pin/);
  assert.doesNotMatch(page + faqs, /six nations|on[- ]reserve|Nation affiliation|healing ceremony|medical (card|claim)/i);
  assert.doesNotMatch(hub, /nicotine-pouches-lakeshore|grabba-lakeshore/);
  assert.doesNotMatch(redirects, /native-cigarettes-lakeshore|nicotine-pouches-lakeshore|grabba-lakeshore/);
  assert.ok(!redirectList.some((redirect) => redirect.source === "/cannabis-delivery-lakeshore"));
});
