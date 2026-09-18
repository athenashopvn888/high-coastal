export interface TierSeoData {
  h1: string;
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
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
    h1: "Exotic Weed on Lakeshore Rd W — Clarkson / Port Credit",
    seoTitle: "Exotic Weed on Lakeshore Rd W — Clarkson & Port Credit",
    seoIntro:
      "Exotic Weed is the top flower lane at High Coastal Cannabis, 1720 Lakeshore Rd W, Mississauga. Adults 19+ can walk in any hour on the Clarkson / Port Credit Lakeshore corridor and compare current Exotic listings before choosing.",
    sections: [
      {
        heading: "Browse Exotic Weed at the Lakeshore walk-in",
        body: "This collection is only the Exotic Weed menu. Open a listing for producer, cultivar, package details, and the posted price. Stock moves; call +1 (289) 815-5222 if one Exotic pack is the reason for the trip.",
      },
      {
        heading: "How Exotic sits beside the other four lanes",
        body: "Premium, AAA+, AA, and Budget are separate High Coastal collections. Use those short paths when you want a different price lane. Do not treat Exotic as a guaranteed effect or a government grade.",
      },
      {
        heading: "Plan the Clarkson / Port Credit visit",
        body: "Confirm the pin on the homepage or the Lakeshore visit guide. The Mississauga weed hub keeps city-level flower context. Overnight visitors use the same 1720 Lakeshore Rd W door — bring valid government photo ID.",
      },
      ...educationSections["Exotic Weed"],
    ],
    faqs: [
      {
        q: "What is Exotic Weed at the Lakeshore walk-in?",
        a: "Exotic Weed is High Coastal Cannabis’s top flower collection at 1720 Lakeshore Rd W in Clarkson / Port Credit. It is a menu lane, not a regulated national grade and not a promised effect.",
      },
      {
        q: "Is Exotic the same as Premium at High Coastal?",
        a: "No. Exotic and Premium are separate collections. Compare current listings on each page, then ask staff in store if a pack name is unclear.",
      },
      {
        q: "Can I walk in after midnight for Exotic flower?",
        a: "Yes. High Coastal Cannabis is open 24 hours at 1720 Lakeshore Rd W. Adults 19+ still need valid government photo ID. Call +1 (289) 815-5222 if one Exotic item is the reason you are coming late.",
      },
      {
        q: "How do I get to Exotic Weed from Port Credit?",
        a: "Stay on Lakeshore Rd W heading west toward Clarkson Rd N and look for 1720. Use the Lakeshore visit guide for corridor notes, or open the Mississauga weed dispensary hub if you still need the city pin.",
      },
    ],
  },
  PREMIUM: {
    h1: "Premium Weed near Clarkson — Lakeshore Mississauga Walk-In",
    seoTitle: "Premium Weed near Clarkson — Lakeshore Mississauga",
    seoIntro:
      "Premium Weed is the higher-positioned everyday flower lane at High Coastal Cannabis on Lakeshore Rd W. Clarkson and Port Credit shoppers can browse this collection 24 hours without treating Premium as one THC number.",
    sections: [
      {
        heading: "Browse Premium Weed on Lakeshore Rd W",
        body: "Use this page to keep Premium Weed together. Each listing shows the details posted for that pack. Premium does not automatically mean higher THC than AAA+ or Exotic.",
      },
      {
        heading: "Premium versus Exotic, AAA+, AA, and Budget",
        body: "Exotic sits above this lane. AAA+, AA, and Budget sit as their own collections. Jump those short paths when you want a different menu slice, then compare the live product pages.",
      },
      {
        heading: "Walk in from Clarkson or Port Credit",
        body: "The door is 1720 Lakeshore Rd W, Mississauga, near Lakeshore Rd W & Clarkson Rd N. No appointment. The homepage holds name, address, and phone. The 24-hour FAQ covers late arrival and ID.",
      },
      ...educationSections["Premium Weed"],
    ],
    faqs: [
      {
        q: "What does Premium Weed mean at 1720 Lakeshore Rd W?",
        a: "Premium Weed is High Coastal Cannabis’s higher-positioned flower lane at the Clarkson / Lakeshore walk-in. It helps adults scan the menu. It is not a regulated national grade.",
      },
      {
        q: "Is Premium always stronger than AAA+?",
        a: "No. A larger THC number does not automatically decide the category. Read the current Premium listing and compare AAA+ separately if you are choosing between those two lanes.",
      },
      {
        q: "Should Port Credit shoppers call ahead for Premium packs?",
        a: "Yes, if one named pack is the reason for the trip. Call +1 (289) 815-5222. Posted names and stock can change even though the store is open 24 hours.",
      },
      {
        q: "Where do I confirm the Lakeshore pin before a Premium visit?",
        a: "Use the homepage for name, address, and phone, or the Lakeshore visit guide for Port Credit / Clarkson arrival notes. The Mississauga weed hub is the city flower owner page.",
      },
    ],
  },
  "AAA+": {
    h1: "AAA+ Weed at High Coastal — Lakeshore / Port Credit",
    seoTitle: "AAA+ Weed on Lakeshore — Port Credit / Clarkson",
    seoIntro:
      "AAA+ Weed is High Coastal Cannabis’s familiar retail shorthand lane at 1720 Lakeshore Rd W. Port Credit and Clarkson adults 19+ can browse AAA+ any hour, then read each listing instead of assuming one government grade.",
    sections: [
      {
        heading: "Browse AAA+ Weed at the Lakeshore counter",
        body: "AAA+ is its own collection. Quads / AAAA language you may have heard is slang, not a fixed High Coastal rule. Use the current AAA+ listing for producer, cultivar, package details, and price.",
      },
      {
        heading: "AAA+ beside Exotic, Premium, AA, and Budget",
        body: "Exotic and Premium sit as higher-positioned lanes. AA and Budget are value-first lanes. Those short paths stay separate so this page can stay narrow.",
      },
      {
        heading: "Retail Lakeshore walk-in only",
        body: "High Coastal Cannabis is a retail dispensary for adults 19+. This AAA+ page is menu copy for the Lakeshore Rd W door. Confirm hours on the 24-hour FAQ and the pin on the visit guide.",
      },
      ...educationSections["AAA+ Weed"],
    ],
    faqs: [
      {
        q: "What is AAA+ Weed at High Coastal Cannabis?",
        a: "AAA+ Weed is the store’s established mid-to-upper flower category on Lakeshore Rd W in Mississauga. AAA and AAA+ are familiar retail terms. They are not one universal government grading system.",
      },
      {
        q: "Is AAA+ the same as quads or AAAA?",
        a: "Not automatically. Quads is common slang for AAAA and usually signals premium positioning. Do not assume one THC cutoff. Compare the live AAA+ listing, then open Exotic or Premium if you want those lanes instead.",
      },
      {
        q: "Can Clarkson walk-ins browse AAA+ after midnight?",
        a: "Yes. The same 1720 Lakeshore Rd W door is open 24 hours. Bring valid government photo ID. Call +1 (289) 815-5222 if one AAA+ pack is the reason you are coming late.",
      },
      {
        q: "Does AAA+ replace Exotic or Premium?",
        a: "No. Each collection has its own short path so shoppers can move between lanes without mixing the menus.",
      },
    ],
  },
  AA: {
    h1: "AA Weed in Clarkson — Lakeshore Rd W Dispensary",
    seoTitle: "AA Weed in Clarkson — Lakeshore Rd W",
    seoIntro:
      "AA Weed is the daily-driver flower lane at High Coastal Cannabis in Clarkson. Browse AA on this page, then compare Budget if you want the value-first shelf, or AAA+ if you want the next lane up.",
    sections: [
      {
        heading: "Browse AA Weed at 1720 Lakeshore Rd W",
        body: "AA is one of five named High Coastal flower collections. The label makes the menu easier to scan. It does not lock a THC number, aroma, or bud size.",
      },
      {
        heading: "AA versus Budget and the higher lanes",
        body: "Budget is the value-first collection. AAA+, Premium, and Exotic sit above AA. Use those short paths when you want a different lane rather than mixing every flower SKU here.",
      },
      {
        heading: "Clarkson walk-in checklist",
        body: "Adults 19+, valid government photo ID, no appointment. Plaza parking is available for customers. Confirm the official name, address, and phone on the homepage before you leave Port Credit or Lorne Park.",
      },
      ...educationSections["AA Weed"],
    ],
    faqs: [
      {
        q: "What is AA Weed on Lakeshore Rd W?",
        a: "AA Weed is High Coastal Cannabis’s daily-driver flower category at 1720 Lakeshore Rd W in the Clarkson / Lakeshore neighbourhood. It is a menu label, not a guaranteed potency.",
      },
      {
        q: "Is AA cheaper than Premium or Exotic?",
        a: "AA is positioned below Premium and Exotic on the High Coastal menu. Current pack prices still belong on the live listing. Compare Budget if you want the value-first lane.",
      },
      {
        q: "Can I compare AA with Budget before a Port Credit trip?",
        a: "Yes. Open AA and Budget as separate collections, then call +1 (289) 815-5222 if one named pack is the reason you are travelling.",
      },
      {
        q: "Does AA have a guaranteed bud size?",
        a: "No. Bud size, aroma, and THC vary by listing. Read the current AA product page instead of judging the category name alone.",
      },
    ],
  },
  BUDGET: {
    h1: "Budget Weed on Lakeshore Rd W — Mississauga 24-Hour Menu",
    seoTitle: "Budget Weed on Lakeshore Rd W — Mississauga Walk-In",
    seoIntro:
      "Budget Weed is the value-first flower collection at High Coastal Cannabis, 1720 Lakeshore Rd W, Mississauga. Clarkson and Port Credit shoppers can browse Budget any hour. Budget describes menu price positioning — not unsafe, stale, or automatically low THC.",
    sections: [
      {
        heading: "Browse Budget Weed at the Lakeshore counter",
        body: "Start here when you want the value-first shelf. Compare producer, cultivar, package details, and the posted price on each listing. Deals can change; the live collection is the current source.",
      },
      {
        heading: "Budget versus AA and the higher lanes",
        body: "AA is the next daily-driver lane. AAA+, Premium, and Exotic are separate higher-positioned collections. Keep those short paths distinct so this page stays the Budget owner.",
      },
      {
        heading: "Open 24 hours on Lakeshore Rd W",
        body: "The same walk-in at 1720 Lakeshore Rd W is used after midnight. Bring valid government photo ID. Use the 24-hour FAQ for late arrival, the visit guide for Port Credit / Clarkson notes, and the Mississauga weed hub for city flower context.",
      },
      ...educationSections["Budget Weed"],
    ],
    faqs: [
      {
        q: "What is the cheapest flower at High Coastal Cannabis?",
        a: "Budget Weed is the value-first flower collection at 1720 Lakeshore Rd W, Mississauga. Current starting prices belong on this live menu. Call +1 (289) 815-5222 if a posted deal is the reason for the trip.",
      },
      {
        q: "Does Budget Weed mean low quality?",
        a: "No. Budget describes price positioning on the High Coastal menu. It does not automatically mean unsafe, stale, weak, or low THC. Compare the current listing details.",
      },
      {
        q: "Is Budget available 24 hours on Lakeshore Rd W?",
        a: "The store is open 24 hours. Budget listings can still sell through. Overnight shoppers should call ahead when one Budget pack is the reason they are coming.",
      },
      {
        q: "How do I get to the Budget menu from Clarkson?",
        a: "The walk-in is 1720 Lakeshore Rd W near Clarkson Rd N. Open this Budget page for the collection, then use the Lakeshore visit guide if you still need corridor arrival notes.",
      },
    ],
  },
};
