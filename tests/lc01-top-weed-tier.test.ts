import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { BOGO_BUY_2_GET_1, BOGO_BUY_3_GET_3, formatAsLowAsAfterPromos, formatBoardDealLine, formatPayEquals, formatPerGram, formatSitewideBogoStrip } from "../app/lib/flowerDeals.ts";
const read = (relativePath: string) => fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");

test("Dual-Frame math matches LC01 board totals and floors", () => {
  for (const [price, grams, expected] of [[20,3,"Pay $20 = 3g"],[30,6,"Pay $30 = 6g"],[30,3,"Pay $30 = 3g"],[45,6,"Pay $45 = 6g"],[40,3,"Pay $40 = 3g"],[60,6,"Pay $60 = 6g"]] as const) assert.equal(formatPayEquals(price, grams), expected);
  assert.equal(formatAsLowAsAfterPromos(30, 6), "As low as $5/g after promos");
  assert.equal(formatAsLowAsAfterPromos(45, 6), "As low as $7.50/g after promos");
  assert.equal(formatAsLowAsAfterPromos(60, 6), "As low as $10/g after promos");
  assert.equal(formatPerGram(20, 3), "~$6.67/g");
  assert.equal(formatBoardDealLine({ label: BOGO_BUY_2_GET_1, total: "3G", price: 20, grams: 3, equals: "2g=3g" }), "Buy 2g Get 1g FREE · Pay $20 = 3g");
  assert.equal(BOGO_BUY_3_GET_3, "Buy 3g Get 3g FREE");
});

test("top tiers use BOGO and AA remains excluded", () => {
  const products = read("app/lib/products.ts");
  for (const fragment of ["price: 40, grams: 3", "price: 60, grams: 6", "price: 30, grams: 3", "price: 45, grams: 6", "price: 20, grams: 3", "price: 30, grams: 6"]) assert.match(products, new RegExp(fragment));
  const aaBlock = products.match(/AA: \{[\s\S]*?\n  \},/u)?.[0] ?? "";
  assert.match(aaBlock, /deal3g: null/); assert.match(aaBlock, /deal6g: null/);
  assert.doesNotMatch(products, /3g bundle|6g bundle|bundle pricing/);
});

test("exact strip and approved homepage stack are present", () => {
  assert.equal(formatSitewideBogoStrip(), "TOP WEED TIER SPECIAL · Buy 2g Get 1g FREE  Buy 3g Get 3g FREE *");
  const banner = read("app/components/FleetAnnouncementBanner.tsx");
  const sequence = ["<FlowerBogoStrip hero", "data-exotic-tier-banner", "data-cigarette-deal", "data-bb-light-deal", "data-cig-mix-banner", "data-bb-premium-banner"].map((needle) => banner.indexOf(needle));
  assert.ok(sequence.every((position, index) => position > -1 && (index === 0 || position > sequence[index - 1])));
  for (const file of ["public/banners/top-weed-tier-lc01.webp", "public/banners/2pack5cig.webp", "public/banners/BB_Belmont_Premium_Grade.webp"]) assert.ok(fs.statSync(file).size > 1000, file);
});

test("mobile strip wraps in one red bar and TV is untouched", () => {
  const css = read("app/globals.css");
  assert.match(css, /\[data-flower-bogo-strip\][\s\S]*background: #c5161d/);
  assert.match(css, /@media \(max-width: 720px\)[\s\S]*\[data-bogo-strip-copy\][\s\S]*flex-direction: column/);
  assert.match(css, /\[data-flower-bogo-strip="hero"\][\s\S]*letter-spacing: 0\.018em/);
  assert.match(css, /\[data-flower-bogo-strip="nav"\][\s\S]*letter-spacing: 0\.015em/);
  assert.match(read("app/components/Navbar.tsx"), /pathname !== "\/" \? <FlowerBogoStrip \/>/);
  assert.doesNotMatch(read("app/tv/page.tsx"), /FlowerBogoStrip|top-weed-tier-lc01/);
});

test("web flower surfaces use paid totals and promo floors", () => {
  const joined = [read("app/components/FlowerCard.tsx"), read("app/[tier]/page.tsx"), read("app/flower/[slug]/page.tsx")].join("\n");
  assert.doesNotMatch(joined, /3g bundle|6g bundle|bundle pricing/);
  assert.match(joined, /formatPayEquals|Pay <strong>/);
  assert.match(joined, /formatAsLowAsAfterPromos/);
});
