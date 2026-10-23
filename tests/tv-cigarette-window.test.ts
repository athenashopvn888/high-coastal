import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { reconcileSurfaceItems } from "../app/lib/cigDecision.ts";
import { selectTvCigaretteCard } from "../app/tv2/cigaretteCard.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "pouch" };
const zyn = { category: "CIGARETTES", name: "ZYN CITRUS", slug: "zyn" };
const paper = { category: "CIGARETTES", name: "RAW ROLLING PAPERS", slug: "paper" };
const cigarillo = { category: "CIGARETTES", name: "SHOW CIGARILLO", slug: "cigarillo" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAP", slug: "wrap" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };
const shelf = [vape, carton, grabba, backwoods, pouch, zyn, paper, cigarillo, wrap];

test("a true TV flag shows the cigarette card and its items", () => {
  const card = selectTvCigaretteCard(true, shelf);
  assert.equal(card.visible, true);
  assert.equal(card.kind, "cigarettes");
  assert.deepEqual(card.items.map((item) => item.slug), [carton.slug, grabba.slug, backwoods.slug, pouch.slug, zyn.slug, paper.slug, cigarillo.slug, wrap.slug]);
});

test("a false TV flag keeps today's wraps card and hides real cigarettes", () => {
  const card = selectTvCigaretteCard(false, shelf);
  assert.equal(card.kind, "kept");
  if (card.kind !== "kept") return;
  assert.equal(card.title, "BACKWOODS");
  assert.deepEqual(card.items.map((item) => item.slug), [backwoods.slug, paper.slug, cigarillo.slug]);
  assert.equal(selectTvCigaretteCard(false, [carton, grabba, vape]).kind, "hidden");
});

test("turning cigarettes off never drops wraps, papers, or pouches from the TV payload", () => {
  const hidden = reconcileSurfaceItems(shelf, shelf, false);
  for (const slug of [backwoods.slug, pouch.slug, zyn.slug, paper.slug, cigarillo.slug, wrap.slug, vape.slug]) {
    assert.ok(hidden.some((item) => item.slug === slug), slug);
  }
  assert.equal(hidden.some((item) => item.slug === carton.slug), false);
  assert.equal(hidden.some((item) => item.slug === grabba.slug), false);
});

test("TV routes read the live flag and website surfaces keep the static gate", () => {
  const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const tv2 = read("app/tv2/page.tsx");
  const tv = read("app/tv/page.tsx");
  const route = read("app/api/tv-data/route.ts");
  assert.match(tv2, /readCigaretteTvHeader/);
  assert.match(tv2, /selectTvCigaretteCard/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.match(tv, /readCigaretteTvHeader/);
  assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
  assert.match(route, /snapshotHeaders/);
  assert.match(route, /reconcileSurfaceItems/);
  assert.doesNotMatch(route, /SHOW_CIGARETTES/);
  assert.match(read("app/components/Navbar.tsx"), /SHOW_CIGARETTES/);
  assert.match(read("app/sitemap.ts"), /SHOW_CIGARETTES/);
  assert.match(read("app/page.tsx"), /SHOW_CIGARETTES/);
  assert.match(read("app/layout.tsx"), /tv: SHOW_CIGARETTES/);
  assert.match(read("app/tv/layout.tsx"), /getCigaretteSnapshot/);
  assert.match(read("app/tv2/layout.tsx"), /getCigaretteSnapshot/);
  assert.match(read("app/api/content-status/route.ts"), /cig\.web\.show/);
});
