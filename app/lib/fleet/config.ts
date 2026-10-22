import type { Nap, ResolvedBanner, ResolvedPage } from "./types.ts";
import { mapsEmbedUrl } from "../storeIdentity.ts";

/**
 * The only store-specific fleet file. Other stores replace this module
 * and leave the rest of app/lib/fleet and app/components/fleet as-is.
 */
export const FLEET_STORE_CODE = "LC01";
export const FLEET_STORE_NAME = "High Coastal Cannabis";
export const FLEET_AREA = "Mississauga";
export const FLEET_DOMAIN = "www.highcoastalcannabis.com";
export const FLEET_DOMAINS = ["www.highcoastalcannabis.com", "highcoastalcannabis.com"] as const;
export const FLEET_ORIGIN = "https://www.highcoastalcannabis.com";

/** Public blob origin. Objects live at /{storeCode}/manifest.json and /{storeCode}/articles/. */
export const FLEET_BLOB_ORIGIN = "https://dhaah0upvlpukv56.public.blob.vercel-storage.com";

export const FLEET_COLORS = {
  banner: "#111827",
  bannerText: "#ffffff",
} as const;

/** Digits or formatted numbers. An article containing any of these is dropped. */
export const FLEET_BLOCKED_PHONES: readonly string[] = [];

export const FLEET_ARTICLES_PATH = "/articles";

/** Page and spot names for the six TV2 category cards. Spot is the card name. */
export const TV2_PAGE = "TV2";
export const TV2_CARDS = [
  "PREROLLS_ADDONS",
  "VAPES",
  "EDIBLES",
  "CONCENTRATES",
  "CIGARETTES",
  "MAGIC",
] as const;

export const TV_PAGE = "TV";
export const TV_FULLSCREEN_SPOTS = [
  "Fullscreen promo 1",
  "Fullscreen promo 2",
  "Fullscreen promo 3",
] as const;

/** Fort York Cannabis takeover defaults: 5s on screen, once a minute, 5s first preview, 650ms slide. */
export const TV_PROMO_SHOW_SECONDS = 5;
export const TV_PROMO_EVERY_MINUTES = 1;
export const TV_PROMO_INITIAL_DELAY_MS = 5_000;
export const TV_PROMO_SLIDE_MS = 650;

export function defaultManifestUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/manifest.json`;
}

export function articlesIndexUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/index.json`;
}

export function articleBodyUrl(slug: string, storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/${encodeURIComponent(slug)}.json`;
}

export const CODED_NAP: Nap = {
  name: "High Coastal Cannabis",
  street: "1720 Lakeshore Rd W",
  city: "Mississauga",
  province: "ON",
  postalCode: "L5J 1J5",
  cityLine: "Mississauga, ON L5J 1J5",
  area: "Mississauga",
  intersection: "Lakeshore Rd W & Clarkson Rd N",
  areaLine: "Lakeshore Rd W & Clarkson Rd N, Mississauga",
  phoneDisplay: "+1 (289) 815-5222",
  phoneTel: "+12898155222",
  hours: "Open 24 Hours",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=1720+Lakeshore+Rd+W,+Mississauga,+ON+L5J+1J5",
  mapsEmbedUrl,
  lat: "43.5177",
  lng: "-79.622",
  schemaName: "High Coastal Cannabis Dispensary Weed Delivery",
  website: "https://www.highcoastalcannabis.com",
};

export const CODED_BANNERS: ResolvedBanner[] = [
  {
    id: "weed",
    page: "Home",
    spot: "Top banner",
    href: "/exotic-weed",
    categoryName: "Exotic Weed",
    hidden: false,
    render: "image",
    image: "/banners/core-top-weed.webp",
    codedImage: "/banners/core-top-weed.webp",
    imageWidth: 1672,
    imageHeight: 941,
    alt: `${FLEET_STORE_NAME} Exotic, Premium and AAA+ flower tiers`,
    title: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
    textBar: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
    caption: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
  },
  {
    id: "vapes",
    page: "Home",
    spot: "Promo banner 2",
    href: "/items/vapes",
    categoryName: "Nicotine Vapes",
    hidden: false,
    render: "image",
    image: "/banners/core-vapes-nicotine-thc.webp",
    codedImage: "/banners/core-vapes-nicotine-thc.webp",
    imageWidth: 1672,
    imageHeight: 941,
    alt: `${FLEET_STORE_NAME} nicotine and THC vape categories`,
    title: "Nicotine + THC vapes",
    textBar: "Nicotine + THC vapes",
    caption: "Nicotine + THC vapes",
  },
  {
    id: "cigarettes",
    page: "Home",
    spot: "Promo banner 3",
    href: "/items/cigarettes",
    categoryName: "Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-cigarette-mix-match.webp",
    codedImage: "/banners/core-cigarette-mix-match.webp",
    imageWidth: 2048,
    imageHeight: 768,
    alt: `${FLEET_STORE_NAME} 2 packs for $5 mix and match and $25 carton cigarette offer`,
    title: "2 PACKS $5 / $25 CARTON",
    textBar: "2 PACKS $5 / $25 CARTON",
    caption: "2 PACKS $5 / $25 CARTON",
  },
  {
    id: "premium-cigarettes",
    page: "Home",
    spot: "Promo banner 4",
    href: "/items/cigarettes",
    categoryName: "Premium Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-premium-cigarettes.webp",
    codedImage: "/banners/core-premium-cigarettes.webp",
    imageWidth: 1672,
    imageHeight: 941,
    alt: `${FLEET_STORE_NAME} BB Full Flavor and Lights, Marlboro and Belmont cigarettes`,
    title: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
    textBar: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
    caption: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
  },
];

export const CODED_PAGES: Record<string, ResolvedPage> = {
  Home: {
    description: "High Coastal Cannabis is a 24-hour cannabis dispensary at 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5 in the Clarkson / Lakeshore neighbourhood. Adults 19+ can browse flower, pre-rolls, vapes, edibles, concentrates, and accessories. Call +1 (289) 815-5222.",
    metaTitle: "",
    metaDescription: "High Coastal Cannabis is a 24-hour cannabis dispensary at 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5 in the Clarkson / Lakeshore neighbourhood. Adults 19+ can browse flower, pre-rolls, vapes, edibles, concentrates, and accessories. Call +1 (289) 815-5222.",
  },
  Contact: {
    description: "Visit High Coastal Cannabis at 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5. Open 24 Hours, 7 days a week. Walk-ins welcome. Call +1 (289) 815-5222.",
    metaTitle: "Contact Us — High Coastal Cannabis | 1720 Lakeshore Rd W, Mississauga",
    metaDescription: "Visit High Coastal Cannabis at 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5. Open 24 Hours, 7 days a week. Walk-ins welcome. Call +1 (289) 815-5222.",
  },
};
