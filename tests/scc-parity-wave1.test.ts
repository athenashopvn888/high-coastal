import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import nextConfig from "../next.config.ts";
import { SCC_HUB_LINKS, SCC_SHORT_TIER_LINKS } from "../app/lib/sccHub.ts";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";
import { STORE_IDENTITY } from "../app/lib/storeIdentity.ts";

const read = (path: string) => readFileSync(path, "utf8");

const SHORT = ["exotic", "premium", "aaa", "aa", "budget"] as const;
const HUB_SURFACES = [
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/high-coastal-visit/page.tsx",
  "app/24-hour-dispensary-mississauga/page.tsx",
  "app/cannabis-delivery-lakeshore/page.tsx",
  "app/native-cigarettes-lakeshore/page.tsx",
  "app/nicotine-vape-lakeshore/page.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/[tier]/page.tsx",
] as const;

test("Wave 1 keeps locked LC01 NAP", () => {
  assert.equal(STORE_IDENTITY.name, "High Coastal Cannabis");
  assert.equal(STORE_IDENTITY.addressDisplay, "1720 Lakeshore Rd W, Mississauga, ON L5J 1J5");
  assert.equal(STORE_IDENTITY.phoneDisplay, "+1 (289) 815-5222");
  assert.equal(STORE_IDENTITY.phoneIntl, "+12898155222");
  assert.equal(STORE_IDENTITY.websiteUrl, "https://www.highcoastalcannabis.com");
  assert.equal(STORE_IDENTITY.landingPath, "/weed-dispensary-mississauga/");
});

test("short SCC tier paths resolve beside live *-weed aliases", () => {
  const products = read("app/lib/products.ts");
  const tierPage = read("app/[tier]/page.tsx");

  for (const slug of SHORT) {
    assert.match(products, new RegExp(`shortSlug: "${slug}",`));
    assert.match(products, new RegExp(`slug: "${slug}-weed"`));
  }
  assert.match(products, /v\.slug === slug \|\| v\.shortSlug === slug/);
  assert.match(tierPage, /t\.shortSlug/);
  assert.match(tierPage, /t\.slug/);
  assert.match(tierPage, /config\.shortSlug/);
});

test("short tier paths are not redirected away", async () => {
  const redirects = await nextConfig.redirects!();
  for (const slug of SHORT) {
    assert.ok(
      !redirects.some((redirect) => redirect.source === `/${slug}`),
      `/${slug} must 200 as a tier page, not redirect`,
    );
  }
});

test("each flower tier has a unique H1, title, and FAQ set", () => {
  const h1s = new Set<string>();
  const titles = new Set<string>();
  const questions = new Set<string>();

  for (const [key, seo] of Object.entries(TIER_SEO)) {
    assert.ok(seo.h1.length > 10, `${key} missing unique H1`);
    assert.ok(seo.seoTitle.length > 10, `${key} missing unique title`);
    assert.ok(seo.faqs.length >= 3, `${key} needs unique FAQs`);
    assert.equal(h1s.has(seo.h1), false, `duplicate H1: ${seo.h1}`);
    assert.equal(titles.has(seo.seoTitle), false, `duplicate title: ${seo.seoTitle}`);
    h1s.add(seo.h1);
    titles.add(seo.seoTitle);
    for (const faq of seo.faqs) {
      assert.equal(questions.has(faq.q), false, `duplicate FAQ: ${faq.q}`);
      questions.add(faq.q);
    }
    assert.match(seo.h1 + seo.seoIntro, /Lakeshore|Clarkson|Port Credit/);
    assert.doesNotMatch(seo.h1 + seo.seoIntro + seo.faqs.map((f) => f.q + f.a).join(" "), /Ottawa|Gatineau|ByWard/i);
    assert.doesNotMatch(seo.h1 + seo.seoIntro, /Square One/i);
    assert.doesNotMatch(JSON.stringify(seo), /on[- ]reserve|Nation affiliation|healing ceremony/i);
  }
});

test("dense linking graph covers homepage, visit, brand FAQ, B12, weed hub, and five short tiers", () => {
  assert.deepEqual(
    SCC_HUB_LINKS.map((link) => link.href),
    ["/", "/visit", "/high-coastal-visit", "/24-hour-dispensary-mississauga", "/weed-dispensary-mississauga/", "/cannabis-delivery-lakeshore", "/native-cigarettes-lakeshore", "/nicotine-vape-lakeshore"],
  );
  assert.deepEqual(
    SCC_SHORT_TIER_LINKS.map((link) => link.href),
    ["/exotic", "/premium", "/aaa", "/aa", "/budget"],
  );

  for (const file of HUB_SURFACES) {
    const source = read(file);
    assert.match(source, /SccHubNav/, `${file} must render the SCC hub`);
  }

  const home = read("app/page.tsx");
  const visit = read("app/visit/page.tsx");
  const brand = read("app/high-coastal-visit/page.tsx");
  const hours = read("app/24-hour-dispensary-mississauga/page.tsx");
  const weed = read("app/components/GBPLandingPage.tsx");
  for (const source of [home, visit, brand, hours, weed]) {
    for (const slug of SHORT) {
      assert.match(source, new RegExp(`href="/${slug}"`), `hub surface missing /${slug}`);
    }
  }
});

test("weed LP H1 leans Lakeshore / Clarkson / Port Credit without a Square One pin", () => {
  const landing = read("app/components/GBPLandingPage.tsx");
  const location = read("app/lib/gbp-location.ts");
  assert.match(landing, /High Coastal Cannabis — Lakeshore \/ Clarkson \/ Port Credit Weed Dispensary in Mississauga/);
  assert.match(location, /slug: "weed-dispensary-mississauga"/);
  assert.match(landing, /nap\.landingPath/);
  assert.match(landing, /not a Square One mall pin/);
  assert.doesNotMatch(landing, /Ottawa|Gatineau|ByWard/);

  const sitemap = read("app/sitemap.ts");
  assert.match(sitemap, /weed-dispensary-mississauga\//);
  assert.match(sitemap, /t\.shortSlug/);
});

test("Native wording stays inside B18 brand-visit clarifiers", () => {
  const brand = read("app/high-coastal-visit/page.tsx");
  const identity = read("app/lib/storeIdentity.ts");
  const hub = read("app/lib/sccHub.ts");
  const tiers = read("app/lib/tierSeoContent.ts");
  const landing = read("app/components/GBPLandingPage.tsx");

  assert.match(brand, /people also search/i);
  assert.match(identity, /six nations medicine/i);
  assert.doesNotMatch(hub, /six nations|reserve|medical/i);
  assert.doesNotMatch(tiers, /six nations|on[- ]reserve|Nation affiliation/i);
  assert.doesNotMatch(landing, /six nations|on[- ]reserve/i);
  assert.doesNotMatch(read("app/cannabis-delivery-lakeshore/page.tsx"), /six nations|on[- ]reserve|Nation affiliation|healing/i);
  assert.doesNotMatch(brand, /we are Six Nations/i);
  assert.doesNotMatch(brand, /on[- ]reserve/);
});

test("Wave 1 lock still forbids unsold grabba and pouches LPs", () => {
  const hub = read("app/lib/sccHub.ts");
  const redirects = read("next.config.ts");
  assert.doesNotMatch(hub, /nicotine-pouches-lakeshore|grabba-lakeshore/);
  assert.doesNotMatch(redirects, /native-cigarettes-lakeshore|nicotine-pouches-lakeshore|grabba-lakeshore/);
});
