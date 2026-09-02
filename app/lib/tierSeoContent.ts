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

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower Mississauga | High Coastal Cannabis",
    ...tierContent("Exotic Weed"),
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower Mississauga | High Coastal Cannabis",
    ...tierContent("Premium Weed"),
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower Mississauga | High Coastal Cannabis",
    ...tierContent("AAA+ Weed"),
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower Mississauga | High Coastal Cannabis",
    ...tierContent("AA Weed"),
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower Mississauga | High Coastal Cannabis",
    ...tierContent("Budget Weed"),
  },
};
