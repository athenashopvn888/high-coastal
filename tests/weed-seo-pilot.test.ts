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

test("LC01 static discovery uses only approved destinations", () => {
  const sources = [read("app/lib/weedDiscovery.ts"), read("app/components/WeedDiscoveryModule.tsx")].join("\n");
  for (const href of ["/budget", "/aa", "/aaa", "/premium", "/exotic", "/items/prerolls", "/items/edibles", "/items/vapes", "/items/concentrates", "/items/add-ons", "/weed-dispensary-mississauga/", "/resources/flower-guide"]) {
    assert.ok(sources.includes(href), `Missing approved link: ${href}`);
  }
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
