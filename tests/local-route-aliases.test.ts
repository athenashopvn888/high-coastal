import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import nextConfig from "../next.config.ts";
import { SEO_PAGES } from "../app/lib/seoPages.ts";

const ALIAS_REDIRECTS = [
  ["york-weed-dispensary", "mississauga-weed-dispensary"],
  ["cheap-weed-york", "cheap-weed-mississauga"],
  ["native-cigarettes-york", "native-cigarettes-mississauga"],
  ["weed-store-near-brampton", "weed-store-near-clarkson-lakeshore"],
  ["dispensary-near-me-york", "dispensary-near-me-mississauga"],
] as const;

test("legacy aliases are excluded while canonical local pages remain discoverable", async () => {
  const slugs = new Set(SEO_PAGES.map((page) => page.slug));
  for (const [source, destination] of ALIAS_REDIRECTS) {
    assert.equal(slugs.has(source), false, `${source} must not be generated or included in the sitemap`);
    assert.equal(slugs.has(destination), true, `${destination} must remain generated and discoverable`);
  }

  const sitemapSource = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  assert.match(sitemapSource, /SEO_PAGES\.map\(/, "sitemap must derive local routes from SEO_PAGES");
});

test("legacy aliases permanently redirect to the exact local canonicals", async () => {
  assert.equal(typeof nextConfig.redirects, "function");
  const redirects = await nextConfig.redirects!();

  for (const [source, destination] of ALIAS_REDIRECTS) {
    assert.ok(
      redirects.some((redirect) =>
        redirect.source === `/info/${source}` &&
        redirect.destination === `/info/${destination}` &&
        redirect.permanent === true
      ),
      `${source} must permanently redirect to ${destination}`,
    );
  }
});

