/** Canonical LC01 NAP. Import this everywhere identity is rendered or emitted. */
export const STORE_IDENTITY = {
  name: "High Coastal Cannabis",
  domain: "www.highcoastalcannabis.com",
  websiteUrl: "https://www.highcoastalcannabis.com",
  storeId: "https://www.highcoastalcannabis.com/#store",
  landingPath: "/weed-dispensary-mississauga/",
  visitPath: "/visit",
  hoursPath: "/24-hour-dispensary-mississauga",
  hoursAliasPath: "/24-hour-lakeshore-mississauga-dispensary",
  brandVisitPath: "/high-coastal-visit",
  deliveryPath: "/cannabis-delivery-lakeshore",
  deliveryMenuPath: "/delivery",
  nativeCigarettesPath: "/native-cigarettes-lakeshore",
  nicotineVapePath: "/nicotine-vape-lakeshore",
  cigarettesMenuPath: "/items/cigarettes",
  nicotineVapeMenuPath: "/items/vapes",
  streetAddress: "1720 Lakeshore Rd W",
  addressLocality: "Mississauga",
  addressRegion: "ON",
  postalCode: "L5J 1J5",
  addressCountry: "CA",
  addressDisplay: "1720 Lakeshore Rd W, Mississauga, ON L5J 1J5",
  phoneDisplay: "+1 (289) 815-5222",
  phoneIntl: "+12898155222",
  hoursDisplay: "Open 24 Hours",
  neighborhood: "Clarkson / Lakeshore",
  intersection: "Lakeshore Rd W & Clarkson Rd N",
  latitude: 43.5177,
  longitude: -79.622,
  image: "https://www.highcoastalcannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  hasMap: "https://www.google.com/maps/search/?api=1&query=1720+Lakeshore+Rd+W,+Mississauga,+ON+L5J+1J5",
  doorTestAreas: ["Lakeshore Rd W", "Clarkson", "Mississauga", "Port Credit", "Lorne Park"],
} as const;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STORE_IDENTITY.addressDisplay)}`;
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(STORE_IDENTITY.addressDisplay)}&z=16&output=embed`;

export const VISIT_FAQS = [
  {
    question: "Where is the Mississauga dispensary on Lakeshore?",
    answer: `High Coastal Cannabis is the walk-in dispensary at ${STORE_IDENTITY.addressDisplay}, near ${STORE_IDENTITY.intersection}. Call ${STORE_IDENTITY.phoneDisplay}.`,
  },
  {
    question: "Is there a dispensary near me in Port Credit or Clarkson?",
    answer: `Yes, if you are on the Lakeshore West corridor. High Coastal Cannabis is at ${STORE_IDENTITY.streetAddress} in the ${STORE_IDENTITY.neighborhood} neighbourhood, between Port Credit and Clarkson.`,
  },
  {
    question: "Is High Coastal Cannabis a 24 hour dispensary in Mississauga?",
    answer: "Yes. High Coastal Cannabis is open 24 hours a day, seven days a week. The same Lakeshore Rd W door is used after midnight. Adults 19+ need valid government photo ID.",
  },
  {
    question: "What should I bring for a walk-in?",
    answer: "Bring valid government photo ID. You must be 19 or older. Plaza parking is available for customers, and evening street parking is often available on Lakeshore Rd W. No appointment is required.",
  },
  {
    question: "What is the current store name?",
    answer: "The current store name is High Coastal Cannabis. Use the homepage for the official name, address, phone, and hours. The website for this store is the High Coastal Cannabis homepage.",
  },
  {
    question: "How do I confirm a product before I travel?",
    answer: `Call High Coastal Cannabis at ${STORE_IDENTITY.phoneDisplay}. Menu names and stock can change, so calling ahead is the safest check when one item is the reason for the trip.`,
  },
] as const;

export const OPEN_NOW_FAQS = [
  {
    question: "Is there a 24 hour dispensary in Mississauga?",
    answer: `Yes. High Coastal Cannabis is a 24 hour dispensary in Mississauga at ${STORE_IDENTITY.addressDisplay}. Listed hours are open 24 hours, seven days a week. Call ${STORE_IDENTITY.phoneDisplay}.`,
  },
  {
    question: "Is High Coastal Cannabis a 24/7 dispensary in Mississauga?",
    answer: "Yes. High Coastal Cannabis is open 24 hours a day, every day, including overnight. The same Lakeshore Rd W door is used after midnight. Adults 19+ need valid government photo ID.",
  },
  {
    question: "Are you open now after midnight?",
    answer: `Yes, on the listed schedule. High Coastal Cannabis does not have a last-call close. Overnight walk-ins use ${STORE_IDENTITY.streetAddress}. Call ${STORE_IDENTITY.phoneDisplay} if one item is the reason for the trip.`,
  },
  {
    question: "Is there a 24 hour dispensary near me?",
    answer: `If you are on Lakeshore Rd W, in Clarkson, Port Credit, Lorne Park, or southwest Mississauga, High Coastal Cannabis at ${STORE_IDENTITY.streetAddress} is the 24 hour walk-in. Confirm the pin on the homepage before you leave.`,
  },
  {
    question: "What ID do I need for a late-night walk-in?",
    answer: "Bring valid government photo ID. High Coastal Cannabis is for adults 19+ only. That rule does not change after midnight.",
  },
  {
    question: "How do I find 1720 Lakeshore Rd W late at night?",
    answer: `The intersection is ${STORE_IDENTITY.intersection} in the ${STORE_IDENTITY.neighborhood} neighbourhood. Look for the plaza storefront at ${STORE_IDENTITY.streetAddress}. Use the Lakeshore visit guide for corridor notes, or call ${STORE_IDENTITY.phoneDisplay}.`,
  },
  {
    question: "What is the current store name on Lakeshore?",
    answer: "The current store name is High Coastal Cannabis. Use the homepage for the official name, address, phone, and hours. The website for this store is the High Coastal Cannabis homepage.",
  },
  {
    question: "Is there a 24 hour dispensary in Clarkson?",
    answer: `Yes. High Coastal Cannabis is the 24 hour walk-in at ${STORE_IDENTITY.streetAddress} in the Clarkson / Lakeshore neighbourhood. This is not a Square One mall pin. Call ${STORE_IDENTITY.phoneDisplay}.`,
  },
  {
    question: "Is there a 24 hour dispensary near Port Credit?",
    answer: `Yes, on the Lakeshore West corridor. From Port Credit, stay on Lakeshore Rd W heading west to ${STORE_IDENTITY.streetAddress} near ${STORE_IDENTITY.intersection}. The door is open 24 hours. Adults 19+ need valid government photo ID.`,
  },
  {
    question: "Is the 24-hour Lakeshore walk-in a Square One mall pin?",
    answer: "No. High Coastal Cannabis is the shoreline walk-in at 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5. Do not treat a Square One or other Mississauga mall pin as this store.",
  },
  {
    question: "Can I buy Native cigarettes or nicotine vape after midnight?",
    answer: "The Lakeshore walk-in is open 24 hours for adults 19+. Native cigarettes and nicotine vape are sold at this counter when listed. Posted names and stock still change overnight, so call +1 (289) 815-5222 when one pack is the reason for the trip. Cannabis delivery hours are separate and are not 24/7.",
  },
  {
    question: "Is High Coastal Cannabis delivery open 24 hours?",
    answer: "No. The 24-hour claim is the walk-in door only. Cannabis delivery is a separate Lakeshore / Clarkson / Port Credit service. High Coastal does not publish a 24/7 delivery clock. Use the cannabis delivery on Lakeshore page, then LIVE ORDER on the delivery menu.",
  },
] as const;

export const BRAND_VISIT_FAQS = [
  {
    question: "Is High Coastal dispensary the same as High Coastal Cannabis?",
    answer: `Yes. High Coastal dispensary and High Coastal Cannabis are the same Lakeshore walk-in: ${STORE_IDENTITY.name} at ${STORE_IDENTITY.addressDisplay}. Call ${STORE_IDENTITY.phoneDisplay}. The official website is the High Coastal Cannabis homepage.`,
  },
  {
    question: "I searched six nations medicine, 6ix nations, or six nations dispensary. Is this that store?",
    answer: "Those are existing people-also-search phrases for this same Lakeshore pin. They are not the current store name. The store at 1720 Lakeshore Rd W, Mississauga is High Coastal Cannabis. This FAQ does not revive an old brand as the primary name.",
  },
  {
    question: "What is the exact Lakeshore address?",
    answer: `High Coastal Cannabis is at ${STORE_IDENTITY.addressDisplay}, near ${STORE_IDENTITY.intersection} in the ${STORE_IDENTITY.neighborhood} neighbourhood.`,
  },
  {
    question: "What are the hours for High Coastal Cannabis?",
    answer: "High Coastal Cannabis is open 24 hours a day, seven days a week. Overnight walk-ins use the same door at 1720 Lakeshore Rd W. Adults 19+ need valid government photo ID.",
  },
  {
    question: "Does High Coastal Cannabis make Nation, reserve, or healing claims?",
    answer: "No. High Coastal Cannabis is a retail cannabis dispensary for adults 19+. This page is visit and brand-clarification copy only. It does not make Indigenous, Nation, reserve, healing, or medical claims, and it does not rename Google Business Profile.",
  },
  {
    question: "What website should I use for this store?",
    answer: "Use the High Coastal Cannabis homepage for the official name, address, phone, and hours. The business website is the homepage, not a city landing URL and not this FAQ.",
  },
] as const;

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

export function jsonLdHtml(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const serializeJsonLd = jsonLdHtml;

export function faqPageGraphNode(faqs: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function websiteGraphNode() {
  const n = STORE_IDENTITY;
  return {
    "@type": "WebSite",
    "@id": `${n.websiteUrl}/#website`,
    url: n.websiteUrl,
    name: n.name,
    publisher: { "@id": `${n.websiteUrl}/#store` },
  };
}

export function cannabisStoreGraphNode() {
  const n = STORE_IDENTITY;
  return {
    "@type": "Store",
    additionalType: "https://schema.org/LocalBusiness",
    "@id": `${n.websiteUrl}/#store`,
    name: n.name,
    description: `Cannabis dispensary at ${n.streetAddress} in ${n.addressLocality}, ON. Browse Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed flower collections plus edibles, prerolls, and vapes. ${n.hoursDisplay}.`,
    url: n.websiteUrl,
    telephone: n.phoneIntl,
    image: n.image,
    priceRange: n.priceRange,
    hasMap: n.hasMap,
    address: {
      "@type": "PostalAddress",
      streetAddress: n.streetAddress,
      addressLocality: n.addressLocality,
      addressRegion: n.addressRegion,
      postalCode: n.postalCode,
      addressCountry: n.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: n.latitude,
      longitude: n.longitude,
    },
    openingHours: "Mo-Su 00:00-23:59",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...DAYS],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Mississauga" },
      { "@type": "Place", name: "Clarkson" },
    ],
  };
}

/** Business website URL is the homepage only — never the local landing path. */
export function storeJsonLd() {
  return {
    "@context": "https://schema.org",
    ...cannabisStoreGraphNode(),
  };
}

export const WEED_DISPENSARY_FAQS = [
  {
    question: "Is there a weed dispensary on Lakeshore in Clarkson or Port Credit?",
    answer: `Yes. High Coastal Cannabis is the neighbourhood weed dispensary at ${STORE_IDENTITY.addressDisplay}, near ${STORE_IDENTITY.intersection} on the Lakeshore / Clarkson / Port Credit corridor. Call ${STORE_IDENTITY.phoneDisplay}.`,
  },
  {
    question: "Is the Mississauga weed dispensary a Square One mall pin?",
    answer: "No. High Coastal Cannabis is the shoreline walk-in at 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5. Do not treat a Square One or other Mississauga mall pin as this store.",
  },
  {
    question: "What flower tiers can I browse at the Lakeshore weed dispensary?",
    answer: "Adults 19+ can browse Budget Weed, AA Weed, AAA+ Weed, Premium Weed, and Exotic Weed, plus pre-rolls, edibles, vapes, concentrates, and accessories. Short flower paths are Exotic, Premium, AAA+, AA, and Budget.",
  },
  {
    question: "Is the Lakeshore weed dispensary open 24 hours?",
    answer: `Yes. The walk-in door at ${STORE_IDENTITY.streetAddress} is open 24 hours. For late arrival and ID, use the 24-hour open-now FAQ. Cannabis delivery on Lakeshore is a separate service.`,
  },
  {
    question: "Can I order from the Lakeshore weed dispensary instead of walking in?",
    answer: "Yes. Use the cannabis delivery on Lakeshore page for Lakeshore / Clarkson / Port Credit drops. Dispatcher hours are not the 24-hour walk-in clock. Start LIVE ORDER on the delivery menu.",
  },
  {
    question: "Does the Lakeshore weed dispensary also list Native cigarettes and nicotine vape?",
    answer: "Yes. Adults 19+ can compare Native cigarettes on Lakeshore and nicotine vape on Lakeshore at the same 1720 Lakeshore Rd W counter. Keep those categories separate from flower.",
  },
  {
    question: "Where should I start if I need the pin or the current store name?",
    answer: "Use the Lakeshore visit guide for the Port Credit / Clarkson corridor pin. Use the High Coastal brand visit FAQ for the current name. The homepage remains the official website URL.",
  },
  {
    question: "Do I need to be 19+ at the Lakeshore weed dispensary?",
    answer: "Yes. High Coastal Cannabis is for adults 19+ only. Bring valid government photo ID for every visit.",
  },
  {
    question: "What is the difference between weed and cannabis at the Lakeshore store?",
    answer: "Weed is everyday language for cannabis. Cannabis is the broader term and can describe flower as well as pre-rolls, edibles, vapes, and concentrates. Both point to the same High Coastal Cannabis walk-in on Lakeshore Rd W.",
  },
] as const;

export function landingPageJsonLd(faqs: readonly { question: string; answer: string }[] = WEED_DISPENSARY_FAQS) {
  const n = STORE_IDENTITY;
  const landingUrl = `${n.websiteUrl}${n.landingPath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": landingUrl,
        url: landingUrl,
        name: "Weed Dispensary in Mississauga | High Coastal Cannabis",
        description: `${n.name} is a 24-hour weed dispensary at ${n.addressDisplay} on the Lakeshore / Clarkson / Port Credit corridor.`,
        isPartOf: { "@id": `${n.websiteUrl}/#website` },
        about: { "@id": n.storeId },
        mainEntity: { "@id": n.storeId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: n.websiteUrl },
          { "@type": "ListItem", position: 2, name: "Weed Dispensary in Mississauga", item: landingUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export function openNowPageJsonLd() {
  const n = STORE_IDENTITY;
  const hoursUrl = `${n.websiteUrl}${n.hoursPath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": hoursUrl,
        url: hoursUrl,
        name: "24-Hour Lakeshore Dispensary — Clarkson / Port Credit Open-Now FAQ",
        description: `${n.name} is a 24 hour dispensary at ${n.addressDisplay} on the Lakeshore / Clarkson / Port Credit corridor. This FAQ covers open-now hours, late arrival, and ID. Delivery hours are separate.`,
        isPartOf: { "@id": `${n.websiteUrl}/#website` },
        about: { "@id": n.storeId },
        mainEntity: { "@id": n.storeId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: n.websiteUrl },
          { "@type": "ListItem", position: 2, name: "24-Hour Open-Now FAQ", item: hoursUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: OPEN_NOW_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export function brandVisitPageJsonLd() {
  const n = STORE_IDENTITY;
  const brandVisitUrl = `${n.websiteUrl}${n.brandVisitPath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": brandVisitUrl,
        url: brandVisitUrl,
        name: "High Coastal Brand Visit FAQ — Lakeshore Pin + Existing Brand Queries",
        description: `${n.name} is the High Coastal dispensary at ${n.addressDisplay}. This FAQ clarifies the Lakeshore pin and existing brand-search phrases without reviving an old name.`,
        isPartOf: { "@id": `${n.websiteUrl}/#website` },
        about: { "@id": n.storeId },
        mainEntity: { "@id": n.storeId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: n.websiteUrl },
          { "@type": "ListItem", position: 2, name: "High Coastal Brand Visit FAQ", item: brandVisitUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: BRAND_VISIT_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export const DELIVERY_FAQS = [
  {
    question: "Does High Coastal Cannabis deliver to Lakeshore, Clarkson, or Port Credit?",
    answer: `Yes. High Coastal Cannabis packs cannabis delivery from ${STORE_IDENTITY.addressDisplay}. The neighbourhood focus is Lakeshore Rd W, Clarkson, Port Credit, and nearby southwest Mississauga addresses the dispatcher accepts. This is not a Square One mall pin.`,
  },
  {
    question: "Is High Coastal Cannabis delivery open 24 hours?",
    answer: "No. The Lakeshore walk-in is open 24 hours. Cannabis delivery is a separate service. High Coastal does not publish a 24/7 delivery clock. LIVE ORDER on the delivery menu shows whether a dispatcher can take a new order, and the dispatcher confirms the window before an order is accepted.",
  },
  {
    question: "How do I order cannabis delivery from High Coastal?",
    answer: "Browse the High Coastal delivery menu, note the product names and weights, then select LIVE ORDER to open Web Chat. New customers complete a private selfie-with-ID step. The dispatcher confirms availability, your address, the $60 product minimum, and next steps.",
  },
  {
    question: "What is the cannabis delivery minimum?",
    answer: "The High Coastal Cannabis delivery menu lists a $60 product minimum. The dispatcher confirms the current minimum, fees if any, and whether your address is in range before an order is accepted.",
  },
  {
    question: "Where does a Lakeshore delivery order come from?",
    answer: `Orders come from High Coastal Cannabis at ${STORE_IDENTITY.addressDisplay}, near ${STORE_IDENTITY.intersection}. Confirm the homepage pin if a map shows a different Lakeshore number.`,
  },
  {
    question: "Can I walk in instead of ordering delivery?",
    answer: `Yes. The same store is a 24 hour walk-in at ${STORE_IDENTITY.streetAddress}. Use the Lakeshore visit guide for the pin, or the 24-hour open-now FAQ for late arrival and ID. Adults 19+ need valid government photo ID.`,
  },
  {
    question: "What ID do I need for cannabis delivery?",
    answer: "Adults 19+ only. New delivery customers complete a private selfie-with-ID check in Web Chat. Returning customers follow the dispatcher verification steps. That rule does not change after midnight, and delivery hours are still not the same as 24-hour walk-in hours.",
  },
] as const;

export function deliveryPageJsonLd() {
  const n = STORE_IDENTITY;
  const deliveryUrl = `${n.websiteUrl}${n.deliveryPath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": deliveryUrl,
        url: deliveryUrl,
        name: "Cannabis Delivery on Lakeshore — Clarkson / Port Credit",
        description: `${n.name} offers cannabis delivery from ${n.addressDisplay} for the Lakeshore / Clarkson / Port Credit corridor. Delivery hours are confirmed by the dispatcher and are not 24/7 walk-in hours.`,
        isPartOf: { "@id": `${n.websiteUrl}/#website` },
        about: { "@id": n.storeId },
        mainEntity: { "@id": n.storeId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: n.websiteUrl },
          { "@type": "ListItem", position: 2, name: "Cannabis Delivery on Lakeshore", item: deliveryUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: DELIVERY_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export const NATIVE_CIGARETTE_FAQS = [
  {
    question: "Does High Coastal Cannabis sell Native cigarettes on Lakeshore?",
    answer: `Yes. High Coastal Cannabis lists Native cigarettes at the 24 hour walk-in at ${STORE_IDENTITY.addressDisplay}. Open the cigarette category for current brand names. Adults 19+ only. Call ${STORE_IDENTITY.phoneDisplay} when one carton is the reason for the trip.`,
  },
  {
    question: "Which Native cigarette brands may be on the Lakeshore menu?",
    answer: "The cigarette menu may show carton-style listings around $25, with brand names such as Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, and Canadian Classics Silver. Names and stock change. Confirm in the cigarette category or by phone.",
  },
  {
    question: "Are Native cigarettes on Lakeshore a Nation, reserve, or medical product?",
    answer: "No. This page is retail walk-in copy for adults 19+. High Coastal Cannabis does not make Indigenous Nation, reserve, healing, or medical claims. Staff sell the posted cigarette menu. They do not give medical advice.",
  },
  {
    question: "Can I buy Native cigarettes after midnight in Clarkson or Port Credit?",
    answer: `The walk-in at ${STORE_IDENTITY.streetAddress} is open 24 hours. That clock is the door, not a promise that every carton stays in stock overnight. Call ${STORE_IDENTITY.phoneDisplay} first. Cannabis delivery hours are a separate service.`,
  },
  {
    question: "Where is the Lakeshore Native cigarettes counter?",
    answer: `High Coastal Cannabis is at ${STORE_IDENTITY.addressDisplay}, near ${STORE_IDENTITY.intersection} in the Clarkson / Lakeshore neighbourhood. This is not a Square One mall pin. Use the homepage to confirm the address before you leave.`,
  },
  {
    question: "Are nicotine vapes the same as Native cigarettes?",
    answer: "No. Native cigarettes are tobacco cartons on the cigarette menu. Nicotine vape is a separate category. Keep both separate from THC vape and flower.",
  },
] as const;

export const NICOTINE_VAPE_FAQS = [
  {
    question: "Does High Coastal Cannabis sell nicotine vape on Lakeshore?",
    answer: `Yes. High Coastal Cannabis lists nicotine vape products at ${STORE_IDENTITY.addressDisplay}. Use the nicotine vape category for current names. Adults 19+ only. Nicotine is addictive. Call ${STORE_IDENTITY.phoneDisplay} when one device is the reason for the trip.`,
  },
  {
    question: "Are nicotine vapes the same as THC vapes?",
    answer: "No. Nicotine vape stays in its own category. THC vape is a cannabis category. Do not treat nicotine product names, strengths, or puff counts as cannabis facts.",
  },
  {
    question: "Can I buy a nicotine vape after midnight in Clarkson or Port Credit?",
    answer: "The Lakeshore walk-in is open 24 hours for adults 19+. Overnight stock still changes. Call +1 (289) 815-5222 before a late trip. Cannabis delivery is a separate service and is not a 24/7 clock.",
  },
  {
    question: "Where should I compare nicotine vape listings?",
    answer: "Start on the nicotine vape category. The Lakeshore nicotine vape page is neighbourhood context. Product names, nicotine strength, and puff-count notes belong on the current listing, not as performance promises.",
  },
  {
    question: "Is the nicotine vape counter a Square One pin?",
    answer: `No. High Coastal Cannabis is the shoreline walk-in at ${STORE_IDENTITY.addressDisplay}, near Clarkson and Port Credit on Lakeshore Rd W.`,
  },
  {
    question: "Does this page sell nicotine pouches?",
    answer: "This page is the nicotine vape walk-in guide. Nicotine pouch tins, when listed, stay on the cigarette menu. Confirm current names in store or by phone.",
  },
] as const;

export function nativeCigarettesPageJsonLd() {
  const n = STORE_IDENTITY;
  const pageUrl = `${n.websiteUrl}${n.nativeCigarettesPath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: "Native Cigarettes on Lakeshore — Clarkson / Port Credit",
        description: `${n.name} lists Native cigarettes at the 24 hour walk-in at ${n.addressDisplay}. Adults 19+. Retail counter only — no Nation, reserve, or medical claims.`,
        isPartOf: { "@id": `${n.websiteUrl}/#website` },
        about: { "@id": n.storeId },
        mainEntity: { "@id": n.storeId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: n.websiteUrl },
          { "@type": "ListItem", position: 2, name: "Native Cigarettes on Lakeshore", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: NATIVE_CIGARETTE_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export function nicotineVapePageJsonLd() {
  const n = STORE_IDENTITY;
  const pageUrl = `${n.websiteUrl}${n.nicotineVapePath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: "Nicotine Vape on Lakeshore — Clarkson / Port Credit",
        description: `${n.name} lists nicotine vape at the 24 hour walk-in at ${n.addressDisplay}. Adults 19+. Nicotine is addictive. Kept separate from THC vape.`,
        isPartOf: { "@id": `${n.websiteUrl}/#website` },
        about: { "@id": n.storeId },
        mainEntity: { "@id": n.storeId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: n.websiteUrl },
          { "@type": "ListItem", position: 2, name: "Nicotine Vape on Lakeshore", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: NICOTINE_VAPE_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export function visitPageJsonLd() {
  const n = STORE_IDENTITY;
  const visitUrl = `${n.websiteUrl}${n.visitPath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": visitUrl,
        url: visitUrl,
        name: "Lakeshore Mississauga Dispensary Visit Guide — Port Credit / Clarkson Corridor",
        description: `${n.name} is the 24-hour Mississauga dispensary at ${n.addressDisplay}. This visit guide covers arrival from Port Credit, Clarkson, and Lakeshore West.`,
        isPartOf: { "@id": `${n.websiteUrl}/#website` },
        about: { "@id": n.storeId },
        mainEntity: { "@id": n.storeId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: n.websiteUrl },
          { "@type": "ListItem", position: 2, name: "Lakeshore Visit Guide", item: visitUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: VISIT_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}
