import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import nextConfig from "../next.config.ts";
import {
  BRAND_VISIT_FAQS,
  STORE_IDENTITY,
  brandVisitPageJsonLd,
  storeJsonLd,
} from "../app/lib/storeIdentity.ts";

const read = (path: string) => readFileSync(path, "utf8");

test("B18 brand visit FAQ is a dedicated High Coastal surface beside visit and the Mississauga LP", () => {
  const page = read("app/high-coastal-visit/page.tsx");
  const sitemap = read("app/sitemap.ts");

  assert.equal(STORE_IDENTITY.brandVisitPath, "/high-coastal-visit");
  assert.equal(STORE_IDENTITY.name, "High Coastal Cannabis");
  assert.match(page, /High Coastal Brand Visit FAQ — Lakeshore Pin \+ Existing Brand Queries/);
  assert.match(page, /Brand names people search/);
  assert.match(page, /Exact Lakeshore address/);
  assert.match(page, /Retail-only disclaimer/);
  assert.match(page, /1720 Lakeshore Rd W/);
  assert.match(page, /high coastal dispensary/i);
  assert.match(page, /href="\/"/);
  assert.match(page, /nap\.landingPath|weed-dispensary-mississauga/);
  assert.match(page, /Open 24 Hours|open 24 hours/);
  assert.match(sitemap, /\$\{BASE\}\/high-coastal-visit/);
  assert.doesNotMatch(sitemap, /\$\{BASE\}\/high-coastal-visit\//);
});

test("brand visit schema describes the page and keeps the business website on the homepage", () => {
  const schema = brandVisitPageJsonLd();
  const types = schema["@graph"].map((node) => node["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("FAQPage"));
  assert.ok(types.includes("BreadcrumbList"));
  assert.ok(!types.includes("Store"));

  const webpage = schema["@graph"].find((node) => node["@type"] === "WebPage") as {
    url: string;
    mainEntity: { "@id": string };
  };
  assert.equal(webpage.url, "https://www.highcoastalcannabis.com/high-coastal-visit");
  assert.equal(webpage.mainEntity["@id"], "https://www.highcoastalcannabis.com");
  assert.equal(storeJsonLd().url, "https://www.highcoastalcannabis.com");
  assert.equal(storeJsonLd().name, "High Coastal Cannabis");
  assert.ok(BRAND_VISIT_FAQS.length >= 5);
  assert.ok(BRAND_VISIT_FAQS.some((faq) => /high coastal dispensary/i.test(faq.question)));
  assert.ok(BRAND_VISIT_FAQS.some((faq) => /six nations medicine/i.test(faq.question)));
});

test("brand visit FAQ is linked from hub surfaces without a second indexed article URL", async () => {
  const footer = read("app/components/Footer.tsx");
  const nav = read("app/components/Navbar.tsx");
  const landing = read("app/components/GBPLandingPage.tsx");
  const home = read("app/page.tsx");
  const visit = read("app/visit/page.tsx");
  const resources = read("app/resources/resourceData.ts");
  const redirects = await nextConfig.redirects!();

  for (const source of [footer, nav, landing, home, visit, resources]) {
    assert.match(source, /\/high-coastal-visit/, "hub surface must link to the brand visit FAQ");
  }

  assert.ok(
    redirects.some(
      (redirect) =>
        redirect.source === "/brand-visit-faq" &&
        redirect.destination === "/high-coastal-visit" &&
        redirect.permanent === true,
    ),
    "/brand-visit-faq must permanently redirect to /high-coastal-visit",
  );
  assert.ok(
    redirects.some(
      (redirect) =>
        redirect.source === "/resources/local-guides/high-coastal-brand-visit-faq" &&
        redirect.destination === "/high-coastal-visit" &&
        redirect.permanent === true,
    ),
    "descriptive local-guide path must permanently redirect to /high-coastal-visit",
  );
});

test("legacy brand terms appear only as people-also-search clarifiers", () => {
  const page = read("app/high-coastal-visit/page.tsx");
  const faqs = JSON.stringify(BRAND_VISIT_FAQS);

  assert.match(page, /High Coastal Cannabis/);
  assert.match(page, /people also search/i);
  assert.match(page, /six nations medicine/i);
  assert.match(page, /6ix nations/i);
  assert.match(page, /six nations dispensary/i);
  assert.match(faqs, /people-also-search|people also search/i);
  assert.doesNotMatch(page, /current store name is Six Nations/i);
  assert.doesNotMatch(page, /we are Six Nations/i);
  assert.doesNotMatch(page, /Lakeshore Cannabis/i);
  assert.doesNotMatch(page, /905-220-7878/);
  assert.doesNotMatch(page, /healing (ceremony|medicine|practice)/i);
  assert.doesNotMatch(page, /on[- ]reserve/i);
});
