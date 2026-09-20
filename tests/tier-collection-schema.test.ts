import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  assertCollectionPageItemListContract,
  buildCollectionPageItemListJsonLd,
  collectSchemaKeysAndTypes,
  FLOWER_TIER_COLLECTION_PATHS,
  flowerCanonicalUrl,
  SCHEMA_STORE_ID,
  SCHEMA_WEBSITE_ID,
  SITE_ORIGIN,
  TIER_COLLECTION_SCHEMA_CONTRACT,
} from "../app/lib/collectionPageSchema.ts";
import { STORE_IDENTITY } from "../app/lib/storeIdentity.ts";

const read = (path: string) => readFileSync(path, "utf8");

const pricedFlowers = [
  {
    name: "Sale First",
    slug: "sale-first",
    sku: "X1",
    tier: "EXOTIC",
    type: "hybrid" as const,
    isHot: false,
    isSale: true,
    thc: "36%",
    price3g: { regular: 40, sale: 32 },
    price5g: null,
    price14g: { regular: 140, sale: 95 },
    price28g: null,
    image: "/flowers/sale-first.webp",
  },
  {
    name: "Regular Second",
    slug: "regular-second",
    sku: "X2",
    tier: "EXOTIC",
    type: "indica" as const,
    isHot: false,
    isSale: false,
    thc: "34%",
    price3g: { regular: 40, sale: null },
    price5g: null,
    price14g: null,
    price28g: null,
    image: "/flowers/regular-second.webp",
  },
];

test("tier collection schema preserves visible product order without volatile offer fields", () => {
  const jsonLd = buildCollectionPageItemListJsonLd({
    canonicalPath: "/exotic",
    name: "Exotic Weed on Lakeshore Rd W — Clarkson / Port Credit",
    description: "Exotic flower collection. Posted prices can change.",
    items: pricedFlowers,
    itemUrl: (flower) => flowerCanonicalUrl(flower.slug),
  });

  assertCollectionPageItemListContract(jsonLd, {
    canonicalPath: "/exotic",
    expectedItemUrls: [
      flowerCanonicalUrl("sale-first"),
      flowerCanonicalUrl("regular-second"),
    ],
  });

  const collection = jsonLd["@graph"][0];
  const list = jsonLd["@graph"][1];

  assert.equal(collection["@type"], "CollectionPage");
  assert.deepEqual(collection.about, { "@id": SCHEMA_STORE_ID });
  assert.deepEqual(collection.isPartOf, { "@id": SCHEMA_WEBSITE_ID });
  assert.equal(list["@type"], "ItemList");
  assert.equal(list.numberOfItems, 2);
  assert.deepEqual(list.itemListElement, [
    {
      "@type": "ListItem",
      position: 1,
      name: "Sale First",
      url: "https://www.highcoastalcannabis.com/flower/sale-first",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Regular Second",
      url: "https://www.highcoastalcannabis.com/flower/regular-second",
    },
  ]);

  const { keys, types } = collectSchemaKeysAndTypes(jsonLd);
  for (const forbidden of TIER_COLLECTION_SCHEMA_CONTRACT.forbiddenTypes) {
    assert.equal(types.has(forbidden), false, `leaked type ${forbidden}`);
  }
  for (const forbidden of TIER_COLLECTION_SCHEMA_CONTRACT.forbiddenKeys) {
    assert.equal(keys.has(forbidden), false, `leaked key ${forbidden}`);
  }
  assert.equal(keys.has("price3g"), false);
  assert.equal(keys.has("price14g"), false);
});

test("all five flower tier slugs emit the CollectionPage + ItemList contract", () => {
  const products = read("app/lib/products.ts");
  for (const canonicalPath of FLOWER_TIER_COLLECTION_PATHS) {
    const slug = canonicalPath.slice(1);
    assert.match(products, new RegExp(`shortSlug: "${slug}"`));
  }

  for (const canonicalPath of FLOWER_TIER_COLLECTION_PATHS) {
    const jsonLd = buildCollectionPageItemListJsonLd({
      canonicalPath,
      name: canonicalPath,
      description: "Tier collection.",
      items: pricedFlowers,
      itemUrl: (flower) => flowerCanonicalUrl(flower.slug),
    });
    assertCollectionPageItemListContract(jsonLd, {
      canonicalPath,
      expectedItemUrls: pricedFlowers.map((flower) => flowerCanonicalUrl(flower.slug)),
    });
    assert.match(jsonLd["@graph"][1].itemListElement[0].url, /\/flower\/sale-first$/);
  }
});

test("layout Store/WebSite @ids match the tier collection identity refs", () => {
  const layout = read("app/layout.tsx");
  const identity = read("app/lib/storeIdentity.ts");
  assert.match(layout, /websiteGraphNode\(\)/);
  assert.match(layout, /cannabisStoreGraphNode\(\)/);
  assert.match(identity, /"@id": `\$\{n\.websiteUrl\}\/#website`/);
  assert.match(identity, /"@id": `\$\{n\.websiteUrl\}\/#store`/);
  assert.equal(SITE_ORIGIN, STORE_IDENTITY.websiteUrl);
  assert.equal(SCHEMA_WEBSITE_ID, `${STORE_IDENTITY.websiteUrl}/#website`);
  assert.equal(SCHEMA_STORE_ID, `${STORE_IDENTITY.websiteUrl}/#store`);
});

test("schema contract stays out of the menu swimlane", () => {
  for (const file of [
    "app/lib/collectionPageSchema.ts",
    "app/lib/tierStructuredData.ts",
    "app/[tier]/page.tsx",
  ]) {
    const source = read(file);
    assert.doesNotMatch(source, /flowers\.json|items\.json|delivery-menu\.json|prebuild-stock|adcInventory/);
  }
});

test("tier page wires the contract through a native JSON-LD script", () => {
  const page = read("app/[tier]/page.tsx");
  const builder = read("app/lib/tierStructuredData.ts");
  assert.match(builder, /buildCollectionPageItemListJsonLd/);
  assert.match(builder, /flowerCanonicalUrl/);
  assert.match(page, /buildTierCollectionJsonLd/);
  assert.match(page, /serializeJsonLd\(tierJsonLd\)/);
  assert.match(page, /type="application\/ld\+json"/);
  assert.match(page, /config\.shortSlug/);
  assert.doesNotMatch(page, /permanentRedirect/);
  assert.doesNotMatch(page, /"@type": "Offer"/);
  assert.doesNotMatch(page, /from "next\/script"/);
});
