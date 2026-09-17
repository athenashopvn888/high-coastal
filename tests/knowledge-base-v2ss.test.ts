import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { ADC_RESOURCE_PAGES } from "../app/resources/adcResourceData.ts";

const read = (path: string) => readFileSync(path, "utf8");

const protectedTiers = [
  ["Exotic Weed", "exotic-weed"],
  ["Premium Weed", "premium-weed"],
  ["AAA+ Weed", "aaa-weed"],
  ["AA Weed", "aa-weed"],
  ["Budget Weed", "budget-weed"],
] as const;

test("LC01 ADC V2 SS installs the approved 19-page resource set", () => {
  assert.equal(ADC_RESOURCE_PAGES.length, 19);
  assert.equal(ADC_RESOURCE_PAGES.filter((page) => page.datePublished === "2026-09-07").length, 17);
  assert.equal(ADC_RESOURCE_PAGES.filter((page) => !page.datePublished).length, 2);
  assert.equal(new Set(ADC_RESOURCE_PAGES.map((page) => page.slug)).size, 19);

  for (const page of ADC_RESOURCE_PAGES) {
    assert.ok(page.title);
    assert.ok(page.seoTitle);
    assert.ok(page.description);
    assert.ok(Array.isArray(page.intro) && page.intro.length > 0, `Missing intro: ${page.slug}`);
    assert.ok(page.sections.length > 0, `Missing sections: ${page.slug}`);
    assert.equal(page.faqs?.length, 5, `FAQ count mismatch: ${page.slug}`);
  }
});

test("generated public copy contains no Markdown or internal workflow leakage", () => {
  const publicCopy = JSON.stringify(ADC_RESOURCE_PAGES);
  for (const blocked of [
    "---",
    "**",
    "##",
    "Remove fixed carton-price framing",
    "SEO strategy",
    "keyword strategy",
    "content system",
    "implementation packet",
    "PINKY",
    "CODY",
    "Agent X",
  ]) {
    assert.ok(!publicCopy.toLowerCase().includes(blocked.toLowerCase()), `Blocked public phrase: ${blocked}`);
  }
});

test("expanded resources preserve original publication-date behavior", () => {
  for (const slug of ["weed-flower-guide", "native-smokes/native-cigarettes-guide"]) {
    const page = ADC_RESOURCE_PAGES.find((candidate) => candidate.slug === slug);
    assert.ok(page, `Missing expanded resource: ${slug}`);
    assert.equal(page.datePublished, undefined);
    assert.equal(page.dateModified, undefined);
  }
});

test("protected Weed owners and local owner remain linked and unchanged", () => {
  const tierData = read("app/lib/tierSeoContent.ts");
  const products = read("app/lib/products.ts");
  const localPage = read("app/components/GBPLandingPage.tsx");
  const identity = read("app/lib/storeIdentity.ts");
  const resources = JSON.stringify(ADC_RESOURCE_PAGES);

  for (const [label, slug] of protectedTiers) {
    assert.ok(tierData.includes(label), `Missing protected label: ${label}`);
    assert.ok(products.includes(`slug: "${slug}"`), `Missing protected route: /${slug}`);
  }

  assert.match(identity, /landingPath: "\/weed-dispensary-mississauga\/"/);
  assert.match(identity, /websiteUrl: "https:\/\/www\.highcoastalcannabis\.com"/);
  assert.match(localPage, /storeIdentity/);
  assert.match(localPage, /High Coastal Cannabis/);
  assert.ok(resources.includes("/weed-dispensary-mississauga"));
});

test("resource route emits indexable self-canonicals and valid schema types", () => {
  const route = read("app/resources/[...slug]/page.tsx");
  assert.match(route, /alternates: \{ canonical: "https:\/\/www\.highcoastalcannabis\.com\/resources\/" \+ page\.slug \}/);
  assert.match(route, /index: true/);
  assert.match(route, /follow: true/);
  assert.match(route, /Article/);
  assert.match(route, /BreadcrumbList/);
  assert.match(route, /FAQPage/);
  assert.doesNotMatch(route, /Product|Offer/);
});

test("banner-backed category pages receive one semantic H1 without duplicating vape H1s", () => {
  const route = read("app/items/[category]/page.tsx");
  assert.match(route, /const SeoHeading = config\.banner && !isVapeCategory \? "h1" : "h2"/);
  assert.match(route, /<SeoHeading className=\{styles\.seoTitle\}>/);
});
