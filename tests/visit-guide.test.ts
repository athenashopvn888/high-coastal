import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import nextConfig from "../next.config.ts";
import {
  STORE_IDENTITY,
  VISIT_FAQS,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  storeJsonLd,
  visitPageJsonLd,
} from "../app/lib/storeIdentity.ts";

const read = (path: string) => readFileSync(path, "utf8");

test("B06 visit guide is a second door-test surface beside the Mississauga LP", () => {
  const page = read("app/visit/page.tsx");
  const sitemap = read("app/sitemap.ts");

  assert.equal(STORE_IDENTITY.visitPath, "/visit");
  assert.match(page, /Lakeshore Mississauga Dispensary Visit Guide/);
  assert.match(page, /Port Credit \/ Clarkson/);
  assert.match(page, /1720 Lakeshore Rd W/);
  assert.match(page, /href="\/"/);
  assert.match(page, /nap\.landingPath|weed-dispensary-mississauga/);
  assert.match(page, /exotic-weed/);
  assert.match(page, /Open 24 Hours|open 24 hours/);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
  assert.doesNotMatch(sitemap, /\$\{BASE\}\/visit\//);
});

test("visit schema describes the page and keeps the business website on the homepage", () => {
  const schema = visitPageJsonLd();
  const types = schema["@graph"].map((node) => node["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("FAQPage"));
  assert.ok(types.includes("BreadcrumbList"));
  assert.ok(!types.includes("Store"));

  const webpage = schema["@graph"].find((node) => node["@type"] === "WebPage") as {
    url: string;
    mainEntity: { "@id": string };
  };
  assert.equal(webpage.url, "https://www.highcoastalcannabis.com/visit");
  assert.equal(webpage.mainEntity["@id"], "https://www.highcoastalcannabis.com");
  assert.equal(storeJsonLd().url, "https://www.highcoastalcannabis.com");
  assert.ok(VISIT_FAQS.length >= 5);
  assert.match(mapsDirectionsUrl, /1720/);
  assert.match(mapsEmbedUrl, /output=embed/);
});

test("visit guide is linked from hub surfaces without a second indexed article URL", async () => {
  const footer = read("app/components/Footer.tsx");
  const nav = read("app/components/Navbar.tsx");
  const landing = read("app/components/GBPLandingPage.tsx");
  const home = read("app/page.tsx");
  const resources = read("app/resources/resourceData.ts");
  const redirects = await nextConfig.redirects!();

  for (const source of [footer, nav, landing, home, resources]) {
    assert.match(source, /\/visit/, "hub surface must link to /visit");
  }

  assert.ok(
    redirects.some(
      (redirect) =>
        redirect.source === "/resources/local-guides/lakeshore-mississauga-visit-guide" &&
        redirect.destination === "/visit" &&
        redirect.permanent === true,
    ),
    "descriptive local-guide path must permanently redirect to /visit",
  );
});
