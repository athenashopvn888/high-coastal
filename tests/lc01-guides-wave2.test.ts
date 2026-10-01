import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const read = (path: string) => fs.readFileSync(path, "utf8");

test("LC01 guide registry is CSV-locked and correctly labelled", () => {
  const registry = read("app/lib/guideRegistry.ts");
  const seeds = registry.match(/\{ slug: /g) ?? [];
  assert.equal(seeds.length, 31);
  for (const slug of ["og-kush", "bb-cigarettes", "ovns-vape", "gas-gang-thc-vape"]) {
    assert.match(registry, new RegExp(`slug: "${slug}"`));
  }
  assert.doesNotMatch(registry, /ovi-vape/i);
  assert.match(registry, /Native Cigarettes/);
  assert.match(registry, /Nicotine Vape/);
  assert.match(registry, /THC Vape/);
});

test("guide route uses safe schema and self-canonical metadata", () => {
  const page = read("app/guides/[slug]/page.tsx");
  assert.match(page, /dynamicParams = false/);
  assert.match(page, /generateStaticParams/);
  assert.match(page, /robots: \{ index: true, follow: true \}/);
  assert.match(page, /BreadcrumbList/);
  assert.match(page, /FAQPage/);
  assert.doesNotMatch(page, /"@type": "(?:Product|Offer)"/);
  assert.doesNotMatch(page, /\$\d/);
});

test("sitemap and category routes expose additive guide links", () => {
  const sitemap = read("app/sitemap.ts");
  assert.match(sitemap, /GUIDE_REGISTRY/);
  assert.match(sitemap, /\/guides\/\$\{guide\.slug\}/);
  assert.match(read("app/[tier]/page.tsx"), /Popular strain guides/);
  const items = read("app/items/[category]/page.tsx");
  assert.match(items, /getCategoryGuideGroups/);
  assert.match(items, /guideGroups/);
});
