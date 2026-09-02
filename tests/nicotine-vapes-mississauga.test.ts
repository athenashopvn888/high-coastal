import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getSeoPageBySlug } from "../app/lib/seoPages.ts";

const expectedProducts = [
  ["geek-promax-5-30k-puffs", "GEEK PROMAX – 5% | 30K PUFFS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg"],
  ["geek-universe-25k-puffs", "GEEK UNIVERSE 25k PUFFS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp"],
  ["nexa-pix-30k-puffs-many-flavors", "NEXA PIX | 30K PUFFS | MANY FLAVORS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp"],
  ["ovns-10000-5-10k-puffs", "OVNS 10000 – 5% | 10K PUFFS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg"],
  ["ovns-pioneer-5-22k-puffs", "OVNS PIONEER – 5% | 22K PUFFS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp"],
] as const;

test("Mississauga nicotine page renders only the five live-checked products", () => {
  const page = getSeoPageBySlug("nicotine-vapes-mississauga");
  assert.ok(page?.heroPreview);
  assert.deepEqual(
    page.heroPreview.products.map(({ slug, name, image }) => [slug, name, image]),
    expectedProducts,
  );
  assert.equal(page.heroPreview.menuHref, "/items/vapes");
  assert.equal(page.heroPreview.warning, "Adults 19+. Nicotine is addictive.");
  assert.equal(page.showTierGrid, false);
  assert.equal(page.showVisitSection, false);
  assert.equal(page.relatedLink?.href, "/info/native-cigarettes-mississauga");

  const serialized = JSON.stringify(page);
  for (const excluded of [
    "ovns-disposable-5-8ml-many-flavors",
    "level-x-g2-pod",
    "flavour-beast-e-liquid-salt",
    "2g-gas-gang-vol3-hybrid",
    "drizzle-switch-3in1-2g",
    "gas-gang-dispo-vape-1g",
  ]) {
    assert.equal(serialized.includes(excluded), false);
  }
});

test("nicotine and THC vape category labels match their routes", () => {
  const products = readFileSync(new URL("../app/lib/products.ts", import.meta.url), "utf8");
  assert.match(products, /"VAPE PENS": \{[\s\S]*?name: "Nicotine Vape", slug: "vapes"/);
  assert.match(products, /"VAPE DISPOSABLE": \{[\s\S]*?name: "THC Vape", slug: "vape-disposables"/);

  const home = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(home, /name: "THC Vape", slug: "items\/vape-disposables"/);
  const navbar = readFileSync(new URL("../app/components/Navbar.tsx", import.meta.url), "utf8");
  assert.match(navbar, /href: "\/items\/vapes", label: "Nicotine Vape"/);
  assert.match(navbar, /href: "\/items\/vape-disposables", label: "THC Vape"/);
});

test("nicotine renderer and discovery stay scoped", () => {
  const renderer = readFileSync(new URL("../app/info/[seoPage]/page.tsx", import.meta.url), "utf8");
  assert.match(renderer, /data-product-slug=\{product\.slug\}/);
  assert.match(renderer, /<Navbar hideThcVape=\{isNicotineVapePage\}/);

  const footer = readFileSync(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
  assert.match(footer, /href="\/info\/nicotine-vapes-mississauga"/);

  for (const legacySlug of [
    "york-weed-dispensary",
    "cheap-weed-york",
    "native-cigarettes-york",
    "weed-store-near-brampton",
    "dispensary-near-me-york",
  ]) {
    assert.equal(getSeoPageBySlug(legacySlug), undefined, `${legacySlug} must not remain discoverable`);
  }
});

