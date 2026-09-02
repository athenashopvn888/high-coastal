export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    "slug": "",
    "title": "High Coastal Cannabis Resources",
    "seoTitle": "High Coastal Cannabis Resources | Menu and Shopping Guides",
    "description": "Resource guides for shopping the High Coastal Cannabis menu in Mississauga, including flower, value, pre-rolls, and Native smokes where listed.",
    "eyebrow": "Resource Centre",
    "intro": "High Coastal's guides are a planning dock for a Clarkson and Lakeshore visit. Pick the guide that matches the stop, narrow the decision there, and use the current category as the final source for item details.",
    "cards": [
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Pick the category first, then compare the details that matter."
      },
      {
        "title": "Weed & Flower Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Compare Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed collections."
      },
      {
        "title": "Value Guide",
        "href": "/resources/value-guide",
        "text": "A cleaner way to think about cheap weed, budget weed, and affordable weed."
      },
      {
        "title": "Pre-Roll Guide",
        "href": "/resources/pre-roll-guide",
        "text": "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates."
      },
      {
        "title": "Native Smokes",
        "href": "/resources/native-smokes",
        "text": "Brand names and carton notes for the cigarette menu where listed."
      }
    ],
    "sections": [
      {
        "heading": "Plan The Shoreline Stop In Layers",
        "body": "Use the High Coastal store page for the visit, a Resource guide for category context, and the live menu for current listings. Keeping those jobs separate makes the Mississauga site easier to scan.",
        "bullets": [
          "Confirm Clarkson visit information on the store page.",
          "Choose a single menu lane before comparing items.",
          "Return to the current listing for changeable details."
        ]
      },
      {
        "heading": "Local Notes For Clarkson / Lakeshore",
        "body": "For shoppers searching around Clarkson, Lakeshore Road West, or southwest Mississauga, the useful order is simple: establish the trip, choose the right shelf or format, and finish on today's public menu page."
      }
    ]
  },
  {
    "slug": "menu-guide",
    "title": "How To Shop The High Coastal Cannabis Menu",
    "seoTitle": "High Coastal Cannabis Menu Guide | Mississauga Weed Dispensary Tips",
    "description": "How to shop the High Coastal Cannabis menu by category, with natural tips for flower, pre-rolls, edibles, THC vapes, concentrates, and value shopping.",
    "eyebrow": "Menu Guide",
    "intro": "The High Coastal menu is easier to navigate when the first question is what kind of stop this is. Flower, pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes each open a different comparison route.",
    "cards": [
      {
        "title": "Weed & Flower Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Compare Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed collections."
      },
      {
        "title": "Value Guide",
        "href": "/resources/value-guide",
        "text": "A cleaner way to think about cheap weed, budget weed, and affordable weed."
      },
      {
        "title": "Pre-Roll Guide",
        "href": "/resources/pre-roll-guide",
        "text": "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates."
      },
      {
        "title": "Native Smokes",
        "href": "/resources/native-smokes",
        "text": "Brand names and carton notes for the cigarette menu where listed."
      }
    ],
    "sections": [
      {
        "heading": "Set A Course Before Reading Listings",
        "body": "A flower shopper can begin with a tier, while a format-driven shopper should head directly to that product section. One clear starting route avoids mixing unrelated listings into the Clarkson visit plan.",
        "bullets": [
          "Flower uses five shelf links as the first filter.",
          "Pre-rolls use the displayed package format.",
          "Other categories keep their own public item fields."
        ]
      },
      {
        "heading": "Dock At The Live Menu For The Final Check",
        "body": "This guide explains the route through High Coastal's pages. The current menu is where a shopper should confirm the displayed name, size, format, notes, and price before relying on a specific entry."
      }
    ]
  },
  {
    "slug": "weed-flower-guide",
    "title": "High Coastal Cannabis Weed & Flower Guide",
    "seoTitle": "Weed & Cannabis Flower Guide Mississauga",
    "description": "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed collections from High Coastal Cannabis in Mississauga.",
    "eyebrow": "Weed & Flower Guide",
    "intro": "High Coastal Cannabis brings five Weed flower collections together for shoppers comparing different parts of the Cannabis Flower menu: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed.",
    "cards": [
      {
        "title": "Exotic Weed",
        "href": "/exotic-weed",
        "text": "Explore the Exotic Weed flower collection."
      },
      {
        "title": "Premium Weed",
        "href": "/premium-weed",
        "text": "Explore the Premium Weed flower collection."
      },
      {
        "title": "AAA+ Weed",
        "href": "/aaa-weed",
        "text": "Explore the AAA+ Weed flower collection."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "Explore the AA Weed flower collection."
      },
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "Explore the Budget Weed flower collection."
      },
      {
        "title": "Explore High Coastal Cannabis Weed in Mississauga",
        "href": "/weed-dispensary-mississauga/",
        "text": "Find verified store information on the broad High Coastal Cannabis Weed page."
      }
    ],
    "sections": [
      {
        "heading": "Compare One Weed Collection At A Time",
        "body": "After opening a Weed collection, review the information displayed with its individual product listings before moving to another flower collection."
      },
      {
        "heading": "Explore High Coastal Cannabis Weed In Mississauga",
        "body": "Use the broad High Coastal Cannabis Weed page for verified store information, then return to the named Weed collection that interests you."
      }
    ]
  },
  {
    "slug": "value-guide",
    "title": "High Coastal Cannabis Value Guide",
    "seoTitle": "High Coastal Cannabis Value Guide | Cheap Weed and Budget Weed",
    "description": "A practical value guide for shoppers comparing cheap weed, budget weed, affordable weed, and menu categories at High Coastal Cannabis.",
    "eyebrow": "Value Guide",
    "intro": "For a value-led High Coastal flower stop, Budget Weed and AA Weed form the first two collections to inspect. Another product type should stay in its own menu section rather than borrowing a flower comparison.",
    "cards": [
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "The first stop for cheap weed and affordable weed comparisons."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "A simple value lane for flower shoppers."
      },
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Use this when you are comparing more than flower."
      }
    ],
    "sections": [
      {
        "heading": "Begin With Budget Weed",
        "body": "Review the current Budget Weed entries, then AA Weed if the first collection does not suit the Clarkson stop. Expanding in that order keeps a price-focused comparison within the named flower collections."
      },
      {
        "heading": "Read More Than The Price",
        "body": "A fair comparison includes the displayed name, size, format, notes, and posted price. Ask the store when a decision depends on information the current listing does not show clearly."
      }
    ]
  },
  {
    "slug": "pre-roll-guide",
    "title": "High Coastal Cannabis Pre-Roll Guide",
    "seoTitle": "High Coastal Cannabis Pre-Roll Guide | Mississauga Cannabis Menu Tips",
    "description": "How to compare pre-rolls at High Coastal Cannabis without mixing them up with flower, edibles, THC vapes, and concentrates.",
    "eyebrow": "Pre-Roll Guide",
    "intro": "High Coastal pre-rolls should be read by format before product name. A current single, multipack, infused option, or other listing represents a different kind of stop, so establish that detail first.",
    "cards": [
      {
        "title": "Pre-Rolls",
        "href": "/items/prerolls",
        "text": "Open the current pre-roll category."
      },
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Use this if you are still choosing between categories."
      }
    ],
    "sections": [
      {
        "heading": "Group Like Packages Together",
        "body": "Identify current entries that share a displayed format, then compare their count, page notes, and price. This keeps the pre-roll section useful without treating it like loose flower."
      },
      {
        "heading": "Return To Port When The Plan Changes",
        "body": "If the Lakeshore visit turns toward flower, edibles, vapes, or concentrates, leave the pre-roll page and start again in the matching High Coastal category."
      }
    ]
  },
  {
    "slug": "resource-centre-launch",
    "title": "High Coastal Cannabis Resource Centre Launch",
    "seoTitle": "High Coastal Cannabis Resource Centre Launch",
    "description": "The High Coastal Cannabis resource centre gives shoppers cleaner menu guides for flower, value, pre-rolls, and store visits.",
    "eyebrow": "Resource Update",
    "intro": "The High Coastal Resource Centre connects Clarkson visit planning with a direct route into flower shelves, value browsing, pre-roll formats, and cigarette categories.",
    "cards": [
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Pick the category first, then compare the details that matter."
      },
      {
        "title": "Weed & Flower Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Compare Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed collections."
      },
      {
        "title": "Value Guide",
        "href": "/resources/value-guide",
        "text": "A cleaner way to think about cheap weed, budget weed, and affordable weed."
      },
      {
        "title": "Pre-Roll Guide",
        "href": "/resources/pre-roll-guide",
        "text": "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates."
      },
      {
        "title": "Native Smokes",
        "href": "/resources/native-smokes",
        "text": "Brand names and carton notes for the cigarette menu where listed."
      }
    ],
    "sections": [
      {
        "heading": "One Harbour For Shopping Guides",
        "body": "The hub gives each shopping question a stable starting page while current items remain in their live categories. It is a map of the site, not a duplicate inventory list."
      },
      {
        "heading": "Chart, Narrow, Confirm",
        "body": "Chart the visit with a guide, narrow it to one shelf or format, and confirm the result on High Coastal's current menu. Use the store page separately for Clarkson trip details."
      }
    ]
  },
  {
    "slug": "native-smokes",
    "title": "High Coastal Cannabis Native Smokes Resource",
    "seoTitle": "High Coastal Cannabis Native Smokes | $25 Carton Notes",
    "description": "High Coastal Cannabis Native smokes resource with cigarette brand names shown on the menu and $25 carton notes where listed.",
    "eyebrow": "Native Smokes",
    "intro": "High Coastal presents Native smokes through its cigarette category. This page supplies a way to read brand families, variant wording, and carton-style notes before checking the current public entries.",
    "cards": [
      {
        "title": "Cigarette Menu",
        "href": "/items/cigarettes",
        "text": "Open the current cigarette category before making the trip."
      },
      {
        "title": "Native Cigarettes Guide",
        "href": "/resources/native-smokes/native-cigarettes-guide",
        "text": "Brand notes and a cleaner shopping checklist."
      },
      {
        "title": "Store Page",
        "href": "/weed-dispensary-mississauga",
        "text": "Use the store page for directions, contact options, and listed hours."
      }
    ],
    "sections": [
      {
        "heading": "Read The Entire Cigarette Label",
        "body": "High Coastal has shown Canadian, Putters, Canadian Goose, Canadian Classics, Rolled Gold, Nexus, and Time family names. The following full, light, silver, or menthol wording identifies the variant and belongs in the comparison.",
        "bullets": [
          "Canadian Lights",
          "Canadian Full",
          "Putters",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Menthol",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "* Rolled Gold Lights",
          "Nexus Full",
          "Nexus Lights",
          "Time Full"
        ]
      },
      {
        "heading": "Tie A Carton Note To One Listing",
        "body": "Some public cigarette entries have included a $25 carton-style note. Confirm which current brand and variant carries it rather than applying that figure to the whole category."
      },
      {
        "heading": "Keep The Cigarette Route Separate",
        "body": "Complete the Native smokes check inside the cigarette category. If cannabis is also part of the Clarkson stop, go back to High Coastal's main menu and choose that section independently."
      }
    ]
  },
  {
    "slug": "native-smokes/native-cigarettes-guide",
    "title": "High Coastal Cannabis Native Cigarettes Guide",
    "seoTitle": "High Coastal Cannabis Native Cigarettes Guide | Brands and Carton Notes",
    "description": "A shopper-friendly Native cigarettes guide for High Coastal Cannabis, including brand names shown on the menu and $25 carton notes where listed.",
    "eyebrow": "Native Cigarettes Guide",
    "intro": "The quickest reading order for High Coastal cigarettes is family name, variant, carton detail, and posted price. That sequence helps separate similarly named entries on the current page.",
    "cards": [
      {
        "title": "Cigarette Menu",
        "href": "/items/cigarettes",
        "text": "Open the current cigarette category before making the trip."
      },
      {
        "title": "Native Cigarettes Guide",
        "href": "/resources/native-smokes/native-cigarettes-guide",
        "text": "Brand notes and a cleaner shopping checklist."
      },
      {
        "title": "Store Page",
        "href": "/weed-dispensary-mississauga",
        "text": "Use the store page for directions, contact options, and listed hours."
      }
    ],
    "sections": [
      {
        "heading": "Family Name Is Only The Beginning",
        "body": "Canadian, Putters, Canadian Goose, Canadian Classics, Rolled Gold, Nexus, and Time labels have appeared in the category. Read the complete variant wording before comparing current item notes or price.",
        "bullets": [
          "Canadian Lights",
          "Canadian Full",
          "Putters",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Menthol",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "* Rolled Gold Lights",
          "Nexus Full",
          "Nexus Lights",
          "Time Full"
        ]
      },
      {
        "heading": "Confirm An Exact Variant",
        "body": "When the Lakeshore stop depends on one precise full, light, silver, or menthol label, use the current listing and contact High Coastal if an essential detail needs clarification."
      },
      {
        "heading": "End On The Current Cigarette Page",
        "body": "This guide is the navigation chart; High Coastal's live cigarette category is the public source for the entries currently displayed."
      }
    ]
  }
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}

