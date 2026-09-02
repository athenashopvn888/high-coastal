import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path: string) => readFileSync(path, "utf8");

test("LC01 keeps the protected owner and exact metadata", () => {
  const page = read("app/weed-dispensary-mississauga/page.tsx");
  const location = read("app/lib/gbp-location.ts");
  const sitemap = read("app/sitemap.ts");
  assert.match(location, /Weed Dispensary in Mississauga \| High Coastal Cannabis/);
  assert.match(location, /High Coastal Cannabis is open 24 hours at 1720 Lakeshore Rd W/);
  assert.match(sitemap, /weed-dispensary-mississauga\//);
  assert.match(page, /title: \{ absolute: gbpLocation\.seoTitle \}/);
  assert.match(page, /canonical:.*gbpLocation\.slug/s);
});

test("refreshed metadata relies on the root template for one brand suffix", () => {
  const sources = [read("app/lib/tierSeoContent.ts"), read("app/lib/products.ts"), read("app/resources/resourceData.ts")].join("\n");
  for (const title of [
    "Exotic Weed & Cannabis Flower Mississauga",
    "Premium Weed & Cannabis Flower Mississauga",
    "AAA+ Weed & Cannabis Flower Mississauga",
    "AA Weed & Cannabis Flower Mississauga",
    "Budget Weed & Cannabis Flower Mississauga",
    "Nicotine Vapes Mississauga",
    "THC Vapes Mississauga",
    "Weed & Cannabis Flower Guide Mississauga",
  ]) {
    assert.ok(sources.includes(title));
    assert.ok(!sources.includes(`${title} | High Coastal Cannabis`));
  }
});

test("LC01 static discovery uses only approved destinations", () => {
  const sources = [read("app/lib/weedDiscovery.ts"), read("app/components/WeedDiscoveryModule.tsx")].join("\n");
  for (const href of ["/budget-weed", "/aa-weed", "/aaa-weed", "/premium-weed", "/exotic-weed", "/items/prerolls", "/items/edibles", "/items/vapes", "/items/concentrates", "/items/add-ons", "/weed-dispensary-mississauga/", "/resources/weed-flower-guide"]) {
    assert.ok(sources.includes(href), `Missing approved link: ${href}`);
  }
});

test("LC01 V2.1 owners use tier-first Weed labels and direct canonicals", () => {
  const products = read("app/lib/products.ts");
  const tierCopy = read("app/lib/tierSeoContent.ts");
  const nav = read("app/components/Navbar.tsx");
  const footer = read("app/components/Footer.tsx");
  const home = read("app/page.tsx");
  const resources = read("app/resources/resourceData.ts");
  const redirects = read("next.config.ts");

  for (const [label, slug, legacy] of [
    ["Exotic Weed", "exotic-weed", "exotic"],
    ["Premium Weed", "premium-weed", "premium"],
    ["AAA+ Weed", "aaa-weed", "aaa"],
    ["AA Weed", "aa-weed", "aa"],
    ["Budget Weed", "budget-weed", "budget"],
  ]) {
    for (const source of [products, tierCopy, nav, footer, home, resources]) {
      assert.ok(source.includes(label), `Missing V2.1 label: ${label}`);
    }
    assert.ok(products.includes(`slug: "${slug}"`), `Missing canonical tier slug: ${slug}`);
    assert.ok(redirects.includes(`source: "/${legacy}", destination: "/${slug}"`), `Missing direct tier redirect: ${legacy}`);
  }

  assert.ok(resources.includes('"slug": "weed-flower-guide"'));
  assert.ok(redirects.includes('source: "/resources/flower-guide", destination: "/resources/weed-flower-guide"'));
  assert.ok(resources.includes('"href": "/weed-dispensary-mississauga/"'));
});

test("LC01 leaves delivery outside the Weed migration", () => {
  const nav = read("app/components/Navbar.tsx");
  const footer = read("app/components/Footer.tsx");
  const sitemap = read("app/sitemap.ts");
  const redirects = read("next.config.ts");
  assert.match(nav, /href: "\/delivery", label: "Delivery"/);
  assert.match(footer, /href="\/delivery">Delivery Menu/);
  assert.match(sitemap, /\$\{BASE\}\/delivery/);
  assert.doesNotMatch(redirects, /weed-delivery/);
});

test("LC01 exact FMD identity is consistent", () => {
  const sources = [read("app/lib/weedDiscovery.ts"), read("app/lib/gbp-location.ts"), read("app/components/GBPLandingPage.tsx")].join("\n");
  assert.match(sources, /1720 Lakeshore Rd W/);
  assert.match(sources, /\+12898155222/);
  assert.match(sources, /\+1 \(289\) 815-5222/);
});

test("LC01 shopper copy avoids workflow and unsupported local language", () => {
  const sources = [read("app/components/GBPLandingPage.tsx"), read("app/components/WeedDiscoveryModule.tsx")].join("\n").toLowerCase();
  for (const blocked of ["this page", "site structure", "navigation shortcut", "search path", "clarkson go", "six nations", "parking", "delivery", "best seller", "bestseller", "trending"]) {
    assert.ok(!sources.includes(blocked), `Blocked shopper-copy phrase: ${blocked}`);
  }
});

