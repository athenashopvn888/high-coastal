/** Canonical LC01 NAP. Import this everywhere identity is rendered or emitted. */
export const STORE_IDENTITY = {
  name: "High Coastal Cannabis",
  domain: "www.highcoastalcannabis.com",
  websiteUrl: "https://www.highcoastalcannabis.com",
  storeId: "https://www.highcoastalcannabis.com",
  landingPath: "/weed-dispensary-mississauga/",
  visitPath: "/visit",
  hoursPath: "/24-hour-dispensary-mississauga",
  brandVisitPath: "/high-coastal-visit",
  deliveryPath: "/cannabis-delivery-lakeshore",
  deliveryMenuPath: "/delivery",
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

/** Business website URL is the homepage only — never the local landing path. */
export function storeJsonLd() {
  const n = STORE_IDENTITY;
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    additionalType: "https://schema.org/LocalBusiness",
    "@id": n.storeId,
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

export function landingPageJsonLd(faqs: readonly { question: string; answer: string }[]) {
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
        description: `${n.name} is a 24-hour weed dispensary at ${n.addressDisplay} in the ${n.neighborhood} neighbourhood.`,
        isPartOf: { "@id": n.websiteUrl },
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
        name: "24-Hour Mississauga Dispensary on Lakeshore — Open-Now FAQ",
        description: `${n.name} is a 24 hour dispensary in Mississauga at ${n.addressDisplay}. This FAQ covers open-now hours, late arrival on Lakeshore Rd W, and ID.`,
        isPartOf: { "@id": n.websiteUrl },
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
        isPartOf: { "@id": n.websiteUrl },
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
        isPartOf: { "@id": n.websiteUrl },
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
        isPartOf: { "@id": n.websiteUrl },
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
