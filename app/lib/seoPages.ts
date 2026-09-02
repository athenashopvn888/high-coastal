const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";

const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

const NICOTINE_VAPES_MISSISSAUGA_PRODUCTS = [
  {
    slug: "geek-promax-5-30k-puffs",
    name: "GEEK PROMAX – 5% | 30K PUFFS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg",
  },
  {
    slug: "geek-universe-25k-puffs",
    name: "GEEK UNIVERSE 25k PUFFS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp",
  },
  {
    slug: "nexa-pix-30k-puffs-many-flavors",
    name: "NEXA PIX | 30K PUFFS | MANY FLAVORS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp",
  },
  {
    slug: "ovns-10000-5-10k-puffs",
    name: "OVNS 10000 – 5% | 10K PUFFS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg",
  },
  {
    slug: "ovns-pioneer-5-22k-puffs",
    name: "OVNS PIONEER – 5% | 22K PUFFS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp",
  },
] as const;

interface HeroPreviewProduct {
  name: string;
  image: string;
  slug?: string;
}

export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: readonly HeroPreviewProduct[];
    disclosure: string;
    menuHref?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    stageLabel?: string;
    warning?: string;
  };
  showTierGrid?: boolean;
  showVisitSection?: boolean;
  relatedLink?: { href: string; label: string; body: string };
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "nicotine-vapes-mississauga",
    title: "Nicotine Vapes Mississauga | High Coastal Cannabis",
    metaDescription: "Adults 19+: review five live-checked nicotine vape product pages from High Coastal Cannabis in Mississauga. Nicotine is addictive.",
    h1: "Nicotine Vapes in Mississauga",
    icon: "VP",
    heroTagline: "Five live-checked nicotine vape pages",
    heroPreview: {
      eyebrow: "HIGH COASTAL CANNABIS • MISSISSAUGA • CLARKSON / LAKESHORE • ADULTS 19+",
      intro: "This High Coastal Cannabis guide highlights five live-checked nicotine vape product pages for adults in Mississauga, Clarkson and the Lakeshore area. Use the nicotine vape category for product information. The cards are a limited evidence set. Nicotine is addictive.",
      products: NICOTINE_VAPES_MISSISSAUGA_PRODUCTS,
      disclosure: "Five live-checked product pages only. These cards do not describe the complete selection, current stock, price or availability.",
      menuHref: "/items/vapes",
      primaryLabel: "Browse Nicotine Vapes",
      secondaryLabel: "Review the Five Vape Cards",
      stageLabel: "Five live-checked nicotine vape product pages",
      warning: "Adults 19+. Nicotine is addictive.",
    },
    showTierGrid: false,
    showVisitSection: false,
    relatedLink: {
      href: "/info/native-cigarettes-mississauga",
      label: "Read the Native Cigarettes Mississauga guide",
      body: "Looking for the separate cigarette resource? Use the verified High Coastal Cannabis guide for Mississauga.",
    },
    sections: [
      {
        heading: "Five Live-Checked Nicotine Vape Pages",
        body: "This focused set covers verified Geek, NEXA and OVNS product pages. Each card keeps its exact supported name and image attached to the correct page. It is a five-page reference set, not a claim about the complete nicotine vape selection.",
      },
      {
        heading: "Keep Product Details Attached to Each Page",
        body: "Names on these live-checked pages include product-specific nicotine strength and puff-count details. Use those details only to identify the corresponding listing; they are not guarantees of duration, performance or superiority.",
      },
      {
        heading: "Mississauga, Clarkson and Lakeshore Context",
        body: "This High Coastal Cannabis resource is written for adults looking for nicotine vape information around Mississauga, Clarkson and Lakeshore. Product facts remain tied to the five verified pages rather than broad local assumptions.",
      },
      {
        heading: "Keep Nicotine and THC Vapes Separate",
        body: "This page is limited to live-checked products from the VAPE PENS category. THC and cannabis vape products are excluded from this nicotine guide.",
      },
    ],
    faqs: [
      {
        q: "How many nicotine vape product pages are featured here?",
        a: "Five live-checked product pages are featured. The cards are a focused evidence set and do not claim to show a complete or currently available selection.",
      },
      {
        q: "Where should adults review nicotine vape category information?",
        a: "Use /items/vapes. Product details can change, so keep each detail attached to its own current product page.",
      },
      {
        q: "Does this High Coastal Cannabis page include THC vapes?",
        a: "No. This guide covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products are excluded.",
      },
    ],
  },
  {
    "slug": "mississauga-weed-dispensary",
    "title": "High Coastal Cannabis Weed Dispensary in Mississauga",
    "metaDescription": "High Coastal Cannabis is a weed dispensary in Mississauga with flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and shopper resources.",
    "h1": "High Coastal Cannabis Weed Dispensary in Mississauga",
    "icon": "*",
    "heroTagline": "Menu shopping around Clarkson / Lakeshore",
    "sections": [
      {
        "heading": "Shop High Coastal Cannabis With A Plan",
        "body": "High Coastal Cannabis helps adults compare the menu without overcomplicating the visit. Start with the store page, then choose the category that matches the visit: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes where listed."
      },
      {
        "heading": "Local Menu Notes For Clarkson / Lakeshore",
        "body": "If you searched for a weed dispensary in Clarkson / Lakeshore or a cannabis dispensary in Mississauga, use this page to get oriented. Clarkson / Lakeshore, Lakeshore Rd W, Clarkson, Mississauga are useful local cues, but the current menu and staff are the right place for details that change."
      },
      {
        "heading": "What To Check Before Visiting",
        "body": "Confirm the store page, directions, contact options, listed hours, and menu category first. For current products, prices, or menu details, use the menu or ask staff before leaving."
      }
    ],
    "faqs": [
      {
        "q": "Is High Coastal Cannabis a cannabis dispensary in Mississauga?",
        "a": "Yes. High Coastal Cannabis serves shoppers looking for a cannabis dispensary in Mississauga. Use the store page for directions, contact options, and listed hours."
      },
      {
        "q": "What should I check before visiting High Coastal Cannabis?",
        "a": "Start with the store page, then use the current menu to compare product names, formats, prices, and item details."
      },
      {
        "q": "Does High Coastal Cannabis carry flower and pre-rolls?",
        "a": "The site has menu categories for flower tiers and pre-rolls. Check the current menu or ask staff for current details."
      }
    ]
  },
  {
    "slug": "cheap-weed-mississauga",
    "title": "High Coastal Cannabis Cheap Weed and Budget Weed Guide",
    "metaDescription": "A value-minded High Coastal Cannabis guide for cheap weed, budget weed, affordable weed, and flower tier shopping in Mississauga.",
    "h1": "High Coastal Cannabis Cheap Weed and Budget Weed Guide",
    "icon": "$",
    "heroTagline": "Value shopping with clearer category choices",
    "sections": [
      {
        "heading": "Start With Budget Weed And AA Weed",
        "body": "If cheap weed or affordable weed is the mission, start with the Budget Weed and AA Weed flower collections before exploring the rest of the menu."
      },
      {
        "heading": "Compare The Current Menu",
        "body": "Look at product name, format, weight, posted price, and item details. Menus change, so use this page for the shopping method and the current menu or staff for current details."
      },
      {
        "heading": "Know When To Move Up",
        "body": "If Budget Weed or AA Weed does not fit the visit, compare AAA+ Weed, Premium Weed, or Exotic Weed next. Begin with the named collection, then review the current product details."
      }
    ],
    "faqs": [
      {
        "q": "Where should value shoppers start at High Coastal Cannabis?",
        "a": "Start with Budget Weed and AA Weed, then compare current menu details before choosing."
      },
      {
        "q": "Does affordable weed mean guessing?",
        "a": "No. Compare the category, product name, format, size, posted price, and item details. Ask staff if anything is unclear."
      },
      {
        "q": "Where can shoppers confirm current prices?",
        "a": "Use the current menu or ask staff. A guide should not pretend prices and menu details never move."
      }
    ]
  },
  {
    "slug": "native-cigarettes-mississauga",
    "title": "High Coastal Cannabis Native Cigarettes Resource",
    "metaDescription": "High Coastal Cannabis Native cigarettes resource with brand names shown on the menu and $25 carton notes where listed.",
    "h1": "High Coastal Cannabis Native Cigarettes Resource",
    "icon": "#",
    "heroTagline": "$25 carton notes and brand names where listed",
    "heroPreview": {
      "eyebrow": "High Coastal Cannabis · 1720 Lakeshore Rd W, Mississauga",
      "intro": "Cigarette category and visit information for Lakeshore Road West",
      "products": NATIVE_HERO_PRODUCTS,
      "disclosure": NATIVE_HERO_DISCLOSURE
    },
    "sections": [
      {
        "heading": "Start With The Cigarette Category",
        "body": "The cigarette menu may show carton-style Native smoke options around $25, with brand names such as Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, and Canadian Classics Silver. Check the current menu or ask staff before making the trip."
      },
      {
        "heading": "Keep Cannabis And Smokes Separate",
        "body": "If you are also shopping flower, pre-rolls, edibles, THC vapes, or concentrates, compare those categories separately. It keeps the visit cleaner."
      },
      {
        "heading": "Confirm What Matters Today",
        "body": "Specific brands, carton options, and prices can change. Use this resource for the shopping path, then confirm current details with the menu or staff."
      }
    ],
    "faqs": [
      {
        "q": "Does High Coastal Cannabis list Native cigarette options?",
        "a": "The menu may show Native smoke brands such as Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, and Canadian Menthol. Confirm current options before visiting."
      },
      {
        "q": "Where can I confirm carton details?",
        "a": "No. This page points shoppers toward menu listings where $25 carton-style options are shown. Confirm current price and menu details before choosing."
      },
      {
        "q": "Where should shoppers start?",
        "a": "Open the cigarette category, then use the store page for directions, contact options, and listed hours."
      }
    ]
  },
  {
    "slug": "weed-store-near-clarkson-lakeshore",
    "title": "Weed Store Near Clarkson / Lakeshore | High Coastal Cannabis",
    "metaDescription": "Looking for a weed store near Clarkson / Lakeshore? Use High Coastal Cannabis for store-page checks, menu categories, and local visit planning in Mississauga.",
    "h1": "Weed Store Near Clarkson / Lakeshore",
    "icon": ">",
    "heroTagline": "Local visit notes for Clarkson / Lakeshore, Lakeshore Rd W, Clarkson, Mississauga",
    "sections": [
      {
        "heading": "Confirm The Right Store Page",
        "body": "When you search for a weed store near Clarkson / Lakeshore, open the High Coastal Cannabis store page first. Confirm directions, contact options, listed hours, and the category you want before visiting."
      },
      {
        "heading": "Choose The Product Category",
        "body": "Flower, pre-rolls, edibles, THC vapes, concentrates, and accessories all shop differently. Pick the category first, then compare current product details."
      },
      {
        "heading": "Use Staff For The Close Call",
        "body": "If one detail decides the visit, ask staff. That is the cleanest way to handle current product questions."
      }
    ],
    "faqs": [
      {
        "q": "What is the first step for a Clarkson / Lakeshore visit?",
        "a": "Open the High Coastal Cannabis store page, then use the current menu category that matches the visit."
      },
      {
        "q": "Should shoppers rely on old blog prices?",
        "a": "No. Use the current menu or staff for details that change."
      },
      {
        "q": "What categories can shoppers compare?",
        "a": "Use the menu categories for flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes where listed."
      }
    ]
  },
  {
    "slug": "dispensary-near-me-mississauga",
    "title": "Cannabis Dispensary Near Me in Mississauga | High Coastal Cannabis",
    "metaDescription": "Use High Coastal Cannabis when searching for a cannabis dispensary near me in Mississauga; compare menu categories and confirm current details before visiting.",
    "h1": "Cannabis Dispensary Near Me in Mississauga",
    "icon": "o",
    "heroTagline": "Store page first, menu category second",
    "sections": [
      {
        "heading": "Make The Search Useful",
        "body": "Use the store page, menu categories, and resources to plan a High Coastal Cannabis visit and choose the next useful page."
      },
      {
        "heading": "Compare Categories Naturally",
        "body": "Use normal shopping language: cannabis dispensary in Mississauga, weed dispensary in Clarkson / Lakeshore, cheap weed, budget weed, premium flower, pre-rolls, edibles, THC vapes, and concentrates. The point is to help the shopper, not stuff a sentence."
      },
      {
        "heading": "Check Current Details",
        "body": "For product names, prices, and menu details, use the current menu or ask staff. This page is for orientation and visit planning."
      }
    ],
    "faqs": [
      {
        "q": "Is High Coastal Cannabis useful for a near-me cannabis search?",
        "a": "Yes. Use the store page to confirm High Coastal Cannabis, then open the menu category that matches your visit."
      },
      {
        "q": "Can shoppers browse before visiting?",
        "a": "Yes. Use the current menu and resources section before heading over."
      },
      {
        "q": "What should shoppers avoid?",
        "a": "Avoid guessing from old examples. Confirm current details with the menu or staff."
      }
    ]
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

