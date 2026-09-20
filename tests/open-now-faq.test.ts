import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import nextConfig from "../next.config.ts";
import {
  OPEN_NOW_FAQS,
  STORE_IDENTITY,
  openNowPageJsonLd,
  storeJsonLd,
} from "../app/lib/storeIdentity.ts";

const read = (path: string) => readFileSync(path, "utf8");

test("B12 open-now FAQ is a dedicated 24h surface beside visit and the Mississauga LP", () => {
  const page = read("app/24-hour-dispensary-mississauga/page.tsx");
  const sitemap = read("app/sitemap.ts");

  assert.equal(STORE_IDENTITY.hoursPath, "/24-hour-dispensary-mississauga");
  assert.match(page, /24-Hour Lakeshore Dispensary — Clarkson \/ Port Credit Open-Now FAQ/);
  assert.match(page, /1720 Lakeshore Rd W/);
  assert.match(page, /href="\/"/);
  assert.match(page, /nap\.landingPath|weed-dispensary-mississauga/);
  assert.match(page, /nap\.visitPath|\/visit/);
  assert.match(page, /Open 24 Hours|open 24 hours/);
  assert.match(page, /24\/7 dispensary in Mississauga/);
  assert.match(sitemap, /\$\{BASE\}\/24-hour-dispensary-mississauga/);
  assert.doesNotMatch(sitemap, /\$\{BASE\}\/24-hour-dispensary-mississauga\//);
});

test("open-now schema describes the page and keeps the business website on the homepage", () => {
  const schema = openNowPageJsonLd();
  const types = schema["@graph"].map((node) => node["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("FAQPage"));
  assert.ok(types.includes("BreadcrumbList"));
  assert.ok(!types.includes("Store"));

  const webpage = schema["@graph"].find((node) => node["@type"] === "WebPage") as {
    url: string;
    mainEntity: { "@id": string };
  };
  assert.equal(webpage.url, "https://www.highcoastalcannabis.com/24-hour-dispensary-mississauga");
  assert.equal(webpage.mainEntity["@id"], "https://www.highcoastalcannabis.com/#store");
  assert.equal(storeJsonLd().url, "https://www.highcoastalcannabis.com");
  assert.ok(OPEN_NOW_FAQS.length >= 10);
  assert.ok(OPEN_NOW_FAQS.some((faq) => /24 hour dispensary in Mississauga/i.test(faq.question)));
  assert.ok(OPEN_NOW_FAQS.some((faq) => /24\/7 dispensary in Mississauga/i.test(faq.question)));
  assert.ok(OPEN_NOW_FAQS.some((faq) => /24 hour dispensary in Clarkson/i.test(faq.question)));
  assert.ok(OPEN_NOW_FAQS.some((faq) => /24 hour dispensary near Port Credit/i.test(faq.question)));
  assert.ok(OPEN_NOW_FAQS.some((faq) => /delivery open 24 hours/i.test(faq.question)));
});

test("open-now FAQ is linked from hub surfaces without a second indexed article URL", async () => {
  const footer = read("app/components/Footer.tsx");
  const nav = read("app/components/Navbar.tsx");
  const landing = read("app/components/GBPLandingPage.tsx");
  const home = read("app/page.tsx");
  const visit = read("app/visit/page.tsx");
  const resources = read("app/resources/resourceData.ts");
  const redirects = await nextConfig.redirects!();

  for (const source of [footer, nav, landing, home, visit, resources]) {
    assert.match(source, /\/24-hour-dispensary-mississauga/, "hub surface must link to the 24h FAQ");
  }

  assert.ok(
    redirects.some(
      (redirect) =>
        redirect.source === "/resources/local-guides/lakeshore-24-hour-open-now-faq" &&
        redirect.destination === "/24-hour-dispensary-mississauga" &&
        redirect.permanent === true,
    ),
    "descriptive local-guide path must permanently redirect to /24-hour-dispensary-mississauga",
  );
  assert.ok(
    redirects.some(
      (redirect) =>
        redirect.source === "/24-hour-lakeshore-mississauga-dispensary" &&
        redirect.destination === "/24-hour-dispensary-mississauga" &&
        redirect.permanent === true,
    ),
    "short Lakeshore 24h alias must permanently redirect to B12 without a second indexed article",
  );
});

test("open-now copy keeps High Coastal as the current name", () => {
  const page = read("app/24-hour-dispensary-mississauga/page.tsx");
  assert.match(page, /High Coastal Cannabis/);
  assert.doesNotMatch(page, /Six Nations Medicine/i);
  assert.doesNotMatch(page, /Lakeshore Cannabis/i);
  assert.doesNotMatch(page, /905-220-7878/);
});
