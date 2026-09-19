import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import nextConfig from "../next.config.ts";
import { SCC_HUB_LINKS } from "../app/lib/sccHub.ts";
import {
  NATIVE_CIGARETTE_FAQS,
  NICOTINE_VAPE_FAQS,
  OPEN_NOW_FAQS,
  STORE_IDENTITY,
  nativeCigarettesPageJsonLd,
  nicotineVapePageJsonLd,
  storeJsonLd,
} from "../app/lib/storeIdentity.ts";

const read = (path: string) => readFileSync(path, "utf8");

const HUB_SURFACES = [
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/high-coastal-visit/page.tsx",
  "app/24-hour-dispensary-mississauga/page.tsx",
  "app/cannabis-delivery-lakeshore/page.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/components/Footer.tsx",
] as const;

const MENU_SWIMLANE = [
  "app/lib/items.json",
  "app/lib/flowers.json",
  "scripts/prebuild-stock.js",
] as const;

test("Wave 3 ships sold Native cigarette and nicotine vape Lakeshore LPs", () => {
  const cig = read("app/native-cigarettes-lakeshore/page.tsx");
  const vape = read("app/nicotine-vape-lakeshore/page.tsx");
  const sitemap = read("app/sitemap.ts");

  assert.equal(STORE_IDENTITY.nativeCigarettesPath, "/native-cigarettes-lakeshore");
  assert.equal(STORE_IDENTITY.nicotineVapePath, "/nicotine-vape-lakeshore");
  assert.match(cig, /Native Cigarettes on Lakeshore — Clarkson \/ Port Credit/);
  assert.match(vape, /Nicotine Vape on Lakeshore — Clarkson \/ Port Credit/);
  assert.match(cig, /1720 Lakeshore Rd W, Mississauga, ON L5J 1J5/);
  assert.match(vape, /1720 Lakeshore Rd W, Mississauga, ON L5J 1J5/);
  assert.match(cig, /\+1 \(289\) 815-5222/);
  assert.match(vape, /\+1 \(289\) 815-5222/);
  assert.match(cig, /highcoastalcannabis\.com/);
  assert.match(vape, /highcoastalcannabis\.com/);
  assert.match(cig, /Adults 19\+/);
  assert.match(vape, /Adults 19\+/);
  assert.match(vape, /Nicotine is addictive/);
  assert.match(cig, /not a Square One/);
  assert.match(vape, /not a Square One/);
  assert.match(cig, /Clarkson/);
  assert.match(vape, /Port Credit/);
  assert.match(sitemap, /\$\{BASE\}\/native-cigarettes-lakeshore/);
  assert.match(sitemap, /\$\{BASE\}\/nicotine-vape-lakeshore/);
  assert.doesNotMatch(sitemap, /\$\{BASE\}\/native-cigarettes-lakeshore\//);
  assert.doesNotMatch(sitemap, /\$\{BASE\}\/nicotine-vape-lakeshore\//);
  assert.doesNotMatch(sitemap, /nicotine-pouches-lakeshore|grabba-lakeshore/);
});

test("Wave 3 keeps B12 as the 24h owner and deepens Lakeshore open-now", () => {
  const hours = read("app/24-hour-dispensary-mississauga/page.tsx");
  const sitemap = read("app/sitemap.ts");

  assert.equal(STORE_IDENTITY.hoursPath, "/24-hour-dispensary-mississauga");
  assert.equal(STORE_IDENTITY.hoursAliasPath, "/24-hour-lakeshore-mississauga-dispensary");
  assert.match(hours, /24-Hour Lakeshore Dispensary — Clarkson \/ Port Credit Open-Now FAQ/);
  assert.match(hours, /not a Square One mall pin/);
  assert.match(hours, /walk-in door only/);
  assert.match(hours, /not a 24\/7 delivery clock/);
  assert.match(hours, /native-cigarettes-lakeshore|nativeCigarettesPath/);
  assert.match(hours, /nicotine-vape-lakeshore|nicotineVapePath/);
  assert.match(hours, /cannabis-delivery-lakeshore/);
  assert.match(sitemap, /\$\{BASE\}\/24-hour-dispensary-mississauga/);
  assert.doesNotMatch(sitemap, /24-hour-lakeshore-mississauga-dispensary/);
  assert.ok(OPEN_NOW_FAQS.some((faq) => /24 hour dispensary in Clarkson/i.test(faq.question)));
  assert.ok(OPEN_NOW_FAQS.some((faq) => /delivery open 24 hours/i.test(faq.question)));
  assert.ok(OPEN_NOW_FAQS.some((faq) => /does not publish a 24\/7 delivery clock/i.test(faq.answer)));
});

test("Wave 3 vertical schema keeps the business website on the homepage", () => {
  for (const schema of [nativeCigarettesPageJsonLd(), nicotineVapePageJsonLd()]) {
    const types = schema["@graph"].map((node) => node["@type"]);
    assert.ok(types.includes("WebPage"));
    assert.ok(types.includes("FAQPage"));
    assert.ok(types.includes("BreadcrumbList"));
    assert.ok(!types.includes("Store"));
    const webpage = schema["@graph"].find((node) => node["@type"] === "WebPage") as {
      url: string;
      mainEntity: { "@id": string };
    };
    assert.equal(webpage.mainEntity["@id"], "https://www.highcoastalcannabis.com");
  }
  assert.equal(nativeCigarettesPageJsonLd()["@graph"].find((node) => node["@type"] === "WebPage")?.url, "https://www.highcoastalcannabis.com/native-cigarettes-lakeshore");
  assert.equal(nicotineVapePageJsonLd()["@graph"].find((node) => node["@type"] === "WebPage")?.url, "https://www.highcoastalcannabis.com/nicotine-vape-lakeshore");
  assert.equal(storeJsonLd().url, "https://www.highcoastalcannabis.com");
  assert.ok(NATIVE_CIGARETTE_FAQS.length >= 5);
  assert.ok(NICOTINE_VAPE_FAQS.length >= 5);
});

test("Wave 3 hub graph links cig, nic-vape, 24h, and delivery equally from MUST KEEP surfaces", () => {
  assert.ok(SCC_HUB_LINKS.some((link) => link.href === "/native-cigarettes-lakeshore"));
  assert.ok(SCC_HUB_LINKS.some((link) => link.href === "/nicotine-vape-lakeshore"));
  assert.ok(SCC_HUB_LINKS.some((link) => link.href === "/24-hour-dispensary-mississauga"));
  assert.ok(SCC_HUB_LINKS.some((link) => link.href === "/cannabis-delivery-lakeshore"));

  for (const file of HUB_SURFACES) {
    const source = read(file);
    assert.match(source, /native-cigarettes-lakeshore|SccHubNav/, `${file} must reach Native cigarettes LP`);
    assert.match(source, /nicotine-vape-lakeshore|SccHubNav/, `${file} must reach nicotine vape LP`);
    assert.match(source, /24-hour-dispensary-mississauga|SccHubNav/, `${file} must keep B12`);
    assert.match(source, /cannabis-delivery-lakeshore|SccHubNav/, `${file} must keep delivery LP`);
  }

  const cig = read("app/native-cigarettes-lakeshore/page.tsx");
  const vape = read("app/nicotine-vape-lakeshore/page.tsx");
  for (const slug of ["exotic", "premium", "aaa", "aa", "budget"]) {
    assert.match(cig, new RegExp(`href="/${slug}"`), `cig LP missing /${slug}`);
    assert.match(vape, new RegExp(`href="/${slug}"`), `vape LP missing /${slug}`);
  }
});

test("Wave 3 Native wording care stays off product LPs and does not invent 24h delivery", async () => {
  const cig = read("app/native-cigarettes-lakeshore/page.tsx");
  const vape = read("app/nicotine-vape-lakeshore/page.tsx");
  const hours = read("app/24-hour-dispensary-mississauga/page.tsx");
  const faqs = JSON.stringify(NATIVE_CIGARETTE_FAQS) + JSON.stringify(NICOTINE_VAPE_FAQS) + JSON.stringify(OPEN_NOW_FAQS);
  const bundle = cig + vape + hours + faqs;
  const redirects = await nextConfig.redirects!();

  assert.doesNotMatch(bundle, /Ottawa|Gatineau|ByWard/i);
  assert.doesNotMatch(cig + vape, /six nations|6ix nations/i);
  assert.doesNotMatch(bundle, /on[- ]reserve|we are Six Nations|healing ceremony|medical card/i);
  assert.doesNotMatch(cig + vape, /#1|best dispensary|fake review/i);
  assert.doesNotMatch(bundle, /delivery is open 24 hours/i);
  assert.doesNotMatch(bundle, /delivery runs 24/i);
  assert.match(cig, /does not claim Indigenous Nation affiliation/);
  assert.match(vape, /not THC vape/);
  assert.ok(!redirects.some((redirect) => redirect.source === "/native-cigarettes-lakeshore"));
  assert.ok(!redirects.some((redirect) => redirect.source === "/nicotine-vape-lakeshore"));
  assert.ok(!redirects.some((redirect) => redirect.source === "/24-hour-dispensary-mississauga"));
});

test("Wave 3 does not touch the menu swimlane or invent pouches/grabba LPs", () => {
  const hub = read("app/lib/sccHub.ts");
  const redirects = read("next.config.ts");
  assert.doesNotMatch(hub, /nicotine-pouches-lakeshore|grabba-lakeshore/);
  assert.doesNotMatch(redirects, /nicotine-pouches-lakeshore|grabba-lakeshore/);

  for (const file of MENU_SWIMLANE) {
    assert.match(file, /items\.json|flowers\.json|prebuild-stock\.js/);
  }
  assert.doesNotMatch(read("app/native-cigarettes-lakeshore/page.tsx"), /adcInventory|APPS_SCRIPT_URL|flowers\.json/);
  assert.doesNotMatch(read("app/nicotine-vape-lakeshore/page.tsx"), /adcInventory|APPS_SCRIPT_URL|flowers\.json/);
});
