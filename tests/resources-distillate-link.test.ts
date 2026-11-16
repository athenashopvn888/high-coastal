import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { ADC_RESOURCE_PAGES } from "../app/resources/adcResourceData.ts";

const read = (path: string) => readFileSync(path, "utf8");

const DISTILLATE_HREF = "/resources/what-is-cannabis-distillate";
const DISTILLATE_TITLE = "What Is Distillate? The Clear Cannabis Oil Behind So Many Vapes and Edibles";
const DISTILLATE_DESCRIPTION = "Distillate is one of the most common ingredients in the legal cannabis world, and one of the least understood.";

test("resources hub keeps the existing resource links and adds Latest articles", () => {
  const resources = read("app/resources/resourceData.ts");
  const staticHrefs = [
    "/resources/menu-guide",
    "/resources/weed-flower-guide",
    "/resources/value-guide",
    "/resources/pre-roll-guide",
    "/resources/lakeshore-clarkson-first-visit-guide",
    "/resources/cannabis-dispensary-vs-weed-dispensary",
    "/resources/cannabis-101",
  ];
  const flowerChildren = ADC_RESOURCE_PAGES.filter((page) => page.slug.startsWith("weed-flower-guide/")).map((page) => `/resources/${page.slug}`);
  const genetics = ADC_RESOURCE_PAGES.filter((page) => page.slug.startsWith("cannabis-101/")).map((page) => `/resources/${page.slug}`);
  const existingHubItems = [...staticHrefs, ...flowerChildren, ...genetics];
  assert.equal(existingHubItems.length, 21);
  assert.equal(new Set(existingHubItems).size, 21);

  for (const href of staticHrefs) {
    assert.ok(resources.includes(`"${href}"`), `missing existing hub href ${href}`);
  }
  assert.match(resources, /page\.slug === "weed-flower-guide" \|\| page\.slug\.startsWith\("weed-flower-guide\/"\)/);
  assert.match(resources, /page\.slug\.startsWith\("cannabis-101\/"\)/);
  for (const heading of [
    "Plan a Lakeshore Visit",
    "Start With Cannabis Basics",
    "Weed & Flower Education",
    "Genetics & Cannabis Terms",
    "Native Smokes Education",
  ]) {
    assert.ok(resources.includes(`heading: "${heading}"`), `missing hub group ${heading}`);
  }

  assert.match(resources, /heading: "Latest articles"/);
  assert.ok(resources.includes(DISTILLATE_TITLE));
  assert.ok(resources.includes(DISTILLATE_DESCRIPTION));
  assert.ok(resources.includes(`href: "${DISTILLATE_HREF}"`));
  assert.ok(resources.includes('href: "/resources/solventless-vs-solvent-concentrates"'));
  assert.ok(resources.includes('href: "/resources/what-is-rosin"'));
  assert.equal(resources.split(DISTILLATE_HREF).length - 1, 2);
});

test("cannabis 101 gains one distillate link and the article itself stays indexable", () => {
  const resources = read("app/resources/resourceData.ts");
  const cannabisKey = resources.indexOf('"cannabis-101": {');
  const nextKey = resources.indexOf('"resource-centre-launch":', cannabisKey);
  const cannabisBlock = resources.slice(cannabisKey, nextKey);
  assert.ok(cannabisKey > 0 && nextKey > cannabisKey);
  assert.equal(cannabisBlock.split(DISTILLATE_HREF).length - 1, 1);
  assert.ok(cannabisBlock.includes(DISTILLATE_TITLE));
  assert.ok(cannabisBlock.includes(DISTILLATE_DESCRIPTION));
  assert.doesNotMatch(resources, /"weed-flower-guide": \{[^}]*what-is-cannabis-distillate/);

  const article = read("app/resources/what-is-cannabis-distillate/page.tsx");
  assert.match(article, /const TITLE = "What Is Distillate\? The Clear Cannabis Oil Behind So Many Vapes and Edibles"/);
  assert.match(article, /const CANONICAL = "https:\/\/www\.highcoastalcannabis\.com\/resources\/what-is-cannabis-distillate"/);
  assert.match(article, /robots: "index,follow"/);
  assert.doesNotMatch(article, /noindex/);
  assert.match(article, /<h1>\{TITLE\}<\/h1>/);

  assert.doesNotMatch(read("app/components/Footer.tsx"), /what-is-cannabis-distillate/);
  assert.doesNotMatch(read("app/resources/adcResourceData.ts"), /what-is-cannabis-distillate/);
});
