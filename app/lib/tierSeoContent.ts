export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

function tierContent(label: string): Omit<TierSeoData, "seoTitle"> {
  return {
    seoIntro: `${label} at High Coastal Cannabis is organized as its own Cannabis Flower collection. Browse this collection, review the information presented with individual products, and compare it with other High Coastal Cannabis flower collections that interest you.`,
    sections: [
      {
        heading: `Browse ${label}`,
        body: `Use the ${label} collection to keep this part of the High Coastal Cannabis flower menu together. Product pages provide the details displayed for each individual listing.`,
      },
      {
        heading: "Compare Flower Collections",
        body: `If you want to explore another part of the flower menu, move from ${label} to one of the other named Weed collections and compare the information presented there.`,
      },
      {
        heading: "Plan a High Coastal Cannabis Visit",
        body: "Use the High Coastal Cannabis store page for verified location, contact, and hours information. Keep product decisions with the information displayed on the current menu.",
      },
    ],
    faqs: [
      {
        q: `How should shoppers browse ${label}?`,
        a: `Open the ${label} collection and review the information displayed with each product listing.`,
      },
      {
        q: `Can shoppers compare ${label} with another Weed collection?`,
        a: "Yes. Each High Coastal Cannabis Weed collection has its own page so shoppers can move directly between flower categories.",
      },
      {
        q: "Where is High Coastal Cannabis store information shown?",
        a: "Use the High Coastal Cannabis store page for verified location, contact, and hours information.",
      },
    ],
  };
}

const educationSections: Record<string, { heading: string; body: string }[]> = {
  "Exotic Weed": [
    { heading: "What “Exotic Weed” Means at High Coastal Cannabis", body: "Exotic Weed is an established High Coastal Cannabis flower category. The label helps adults narrow the current menu. It is not a universal Canadian government grade and it does not guarantee one THC range." },
    { heading: "Compare the Product", body: "Use the current listing for producer, cultivar, THC/CBD, package details, price and availability. Aroma, trim, trichomes, cure and freshness can differ from one product to another." },
    { heading: "Exotic Is Not One Guaranteed Effect", body: "Exotic can describe premium positioning, distinctive genetics, aroma, rarity or presentation. It does not guarantee one effect." },
  ],
  "Premium Weed": [
    { heading: "What “Premium Weed” Means at High Coastal Cannabis", body: "Premium Weed is an established High Coastal Cannabis flower category. It helps adults browse a higher-positioned menu lane without treating Premium as one regulated national grade." },
    { heading: "Compare More Than the Category Name", body: "Use the current listing for producer, cultivar, THC/CBD, package details and current price. The educational guides explain aroma, trichomes, cure and freshness separately." },
    { heading: "Premium Does Not Automatically Mean Higher THC", body: "A larger THC number does not automatically determine the flower category." },
  ],
  "AAA+ Weed": [
    { heading: "AAA+ Weed: Familiar Retail Shorthand", body: "AAA+ Weed is High Coastal Cannabis's established category name. AAA and AAA+ are familiar cannabis retail terms, but they are not one universal government grading system." },
    { heading: "AAA+ vs Quads / AAAA", body: "Quads is common Canadian slang for AAAA and generally signals premium positioning. Do not assume one fixed THC threshold separates the terms." },
    { heading: "Read the Current Listing", body: "Use the current product page for producer, cultivar, THC/CBD, package details, price and availability." },
  ],
  "AA Weed": [
    { heading: "AA Weed as a Clear Menu Category", body: "AA Weed is one of High Coastal Cannabis's five established flower categories. The label makes the menu easier to scan. It does not define one mandatory THC level, aroma profile or bud size." },
    { heading: "Value and Quality Are Separate Questions", body: "AA Weed can be part of a value-first browse. A lower price does not automatically prove that flower is weak or stale." },
    { heading: "Compare Current Product Information", body: "Use the current listing for changing price, stock, package and product-specific details." },
  ],
  "Budget Weed": [
    { heading: "Budget Weed Means Value-First Browsing", body: "Budget Weed is High Coastal Cannabis's value-first flower category. Budget describes price positioning on the menu. It does not automatically mean unsafe, stale, weak or low THC." },
    { heading: "Do Not Judge the Product From the Category Alone", body: "Adults can still compare producer, cultivar, THC/CBD, package details, aroma information where provided and the actual flower characteristics." },
    { heading: "Current Price Belongs on the Current Page", body: "Prices and deals can change. Use the live category for current pricing, product details and availability." },
  ],
};

function tierContentWithEducation(label: string): Omit<TierSeoData, "seoTitle"> {
  const base = tierContent(label);
  return { ...base, sections: [...base.sections, ...educationSections[label]] };
}

export const TIER_EDUCATION_LINKS: Record<string, { label: string; href: string }[]> = {
  EXOTIC: [
    { label: "Weed & Flower Guide", href: "/resources/weed-flower-guide" },
    { label: "Top Shelf, Mids & Quads", href: "/resources/weed-flower-guide/top-shelf-mids-quads" },
    { label: "Gas, Loud & Terpy", href: "/resources/weed-flower-guide/terpenes-gas-loud-aroma" },
    { label: "THC vs Weed Quality", href: "/resources/weed-flower-guide/thc-vs-weed-quality" },
  ],
  PREMIUM: [
    { label: "Weed & Flower Guide", href: "/resources/weed-flower-guide" },
    { label: "What Does Good Weed Mean?", href: "/resources/weed-flower-guide/what-does-good-weed-mean" },
    { label: "THC vs Weed Quality", href: "/resources/weed-flower-guide/thc-vs-weed-quality" },
    { label: "Drying, Curing & Freshness", href: "/resources/weed-flower-guide/drying-curing-freshness" },
  ],
  "AAA+": [
    { label: "Top Shelf, Mids & Quads", href: "/resources/weed-flower-guide/top-shelf-mids-quads" },
    { label: "Weed & Flower Guide", href: "/resources/weed-flower-guide" },
    { label: "THC vs Weed Quality", href: "/resources/weed-flower-guide/thc-vs-weed-quality" },
    { label: "Weed Slang Glossary", href: "/resources/cannabis-101/weed-slang-glossary" },
  ],
  AA: [
    { label: "Value Guide", href: "/resources/value-guide" },
    { label: "Weed & Flower Guide", href: "/resources/weed-flower-guide" },
    { label: "What Does Good Weed Mean?", href: "/resources/weed-flower-guide/what-does-good-weed-mean" },
    { label: "Smalls vs Big Buds", href: "/resources/weed-flower-guide/smalls-vs-big-buds" },
  ],
  BUDGET: [
    { label: "Value Guide", href: "/resources/value-guide" },
    { label: "Weed & Flower Guide", href: "/resources/weed-flower-guide" },
    { label: "THC vs Weed Quality", href: "/resources/weed-flower-guide/thc-vs-weed-quality" },
    { label: "What Does Good Weed Mean?", href: "/resources/weed-flower-guide/what-does-good-weed-mean" },
  ],
};

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower Mississauga",
    ...tierContentWithEducation("Exotic Weed"),
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower Mississauga",
    ...tierContentWithEducation("Premium Weed"),
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower Mississauga",
    ...tierContentWithEducation("AAA+ Weed"),
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower Mississauga",
    ...tierContentWithEducation("AA Weed"),
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower Mississauga",
    ...tierContentWithEducation("Budget Weed"),
  },
};

