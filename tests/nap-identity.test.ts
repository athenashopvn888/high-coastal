import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

import { landingPageJsonLd, STORE_IDENTITY, storeJsonLd } from "../app/lib/storeIdentity.ts";

const read = (path: string) => readFileSync(path, "utf8");

function walkFiles(dir: string, acc: string[] = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".git" || entry === ".next") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkFiles(full, acc);
    else if (/\.(tsx|ts|js|jsx|json|md|css)$/.test(entry)) acc.push(full);
  }
  return acc;
}

test("canonical High Coastal NAP is locked", () => {
  assert.equal(STORE_IDENTITY.name, "High Coastal Cannabis");
  assert.equal(STORE_IDENTITY.streetAddress, "1720 Lakeshore Rd W");
  assert.equal(STORE_IDENTITY.addressDisplay, "1720 Lakeshore Rd W, Mississauga, ON L5J 1J5");
  assert.equal(STORE_IDENTITY.phoneDisplay, "+1 (289) 815-5222");
  assert.equal(STORE_IDENTITY.phoneIntl, "+12898155222");
  assert.equal(STORE_IDENTITY.hoursDisplay, "Open 24 Hours");
  assert.equal(STORE_IDENTITY.websiteUrl, "https://www.highcoastalcannabis.com");
  assert.equal(STORE_IDENTITY.landingPath, "/weed-dispensary-mississauga/");
  assert.equal(STORE_IDENTITY.visitPath, "/visit");
  assert.equal(STORE_IDENTITY.hoursPath, "/24-hour-dispensary-mississauga");
  assert.equal(STORE_IDENTITY.brandVisitPath, "/high-coastal-visit");
  assert.equal(STORE_IDENTITY.deliveryPath, "/cannabis-delivery-lakeshore");
  assert.equal(STORE_IDENTITY.deliveryMenuPath, "/delivery");
});

test("Store schema website URL is the homepage only", () => {
  const schema = storeJsonLd();
  assert.equal(schema["@type"], "Store");
  assert.equal(schema.name, "High Coastal Cannabis");
  assert.equal(schema.url, "https://www.highcoastalcannabis.com");
  assert.equal(schema["@id"], "https://www.highcoastalcannabis.com");
  assert.equal(schema.telephone, "+12898155222");
  assert.equal(schema.address.streetAddress, "1720 Lakeshore Rd W");
  assert.equal(schema.address.addressLocality, "Mississauga");
  assert.equal(schema.address.postalCode, "L5J 1J5");
  assert.ok(!String(schema.url).includes("weed-dispensary-mississauga"));
});

test("landing schema describes the page without hijacking the business website URL", () => {
  const landing = landingPageJsonLd([{ question: "Where is High Coastal Cannabis?", answer: "1720 Lakeshore Rd W, Mississauga, ON L5J 1J5" }]);
  const types = landing["@graph"].map((node) => node["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("FAQPage"));
  assert.ok(!types.includes("Store"));
  const webpage = landing["@graph"].find((node) => node["@type"] === "WebPage") as { url: string; mainEntity: { "@id": string } };
  assert.equal(webpage.url, "https://www.highcoastalcannabis.com/weed-dispensary-mississauga/");
  assert.equal(webpage.mainEntity["@id"], "https://www.highcoastalcannabis.com");
  assert.doesNotMatch(read("app/components/GBPLandingPage.tsx"), /"@type": "Store"/);
});

test("required NAP surfaces import the locked identity", () => {
  for (const path of [
    "app/layout.tsx",
    "app/components/Footer.tsx",
    "app/contact/page.tsx",
    "app/components/GBPLandingPage.tsx",
    "app/page.tsx",
    "app/visit/page.tsx",
    "app/24-hour-dispensary-mississauga/page.tsx",
    "app/high-coastal-visit/page.tsx",
    "app/cannabis-delivery-lakeshore/page.tsx",
  ]) {
    assert.match(read(path), /storeIdentity/, `${path} must import storeIdentity`);
  }
  assert.match(read("app/contact/page.tsx"), /phoneDisplay|Call /);
});

test("live copy does not present old brand names as current identity", () => {
  const files = walkFiles("app");
  const blockedEverywhere = [/Lakeshore Cannabis/i, /905-220-7878/, /220-7878/];
  const clarifierFiles = new Set([
    join("app", "lib", "storeIdentity.ts"),
    join("app", "high-coastal-visit", "page.tsx"),
  ]);
  for (const file of files) {
    const source = read(file);
    for (const pattern of blockedEverywhere) {
      assert.doesNotMatch(source, pattern, `${file} must not surface ${pattern}`);
    }
    if (clarifierFiles.has(file)) {
      assert.match(source, /High Coastal Cannabis/, `${file} must keep High Coastal as the current name`);
      assert.match(source, /people also search|people-also-search|existing demand/i, `${file} may mention legacy brand terms only as search clarifiers`);
      assert.doesNotMatch(source, /current store name is Six Nations/i, `${file} must not present Six Nations as the current name`);
      continue;
    }
    assert.doesNotMatch(source, /Six Nations Medicine/i, `${file} must not surface Six Nations Medicine`);
  }
});
