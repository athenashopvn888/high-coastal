/** Canonical LC01 NAP. Import this everywhere identity is rendered or emitted. */
export const STORE_IDENTITY = {
  name: "High Coastal Cannabis",
  domain: "www.highcoastalcannabis.com",
  websiteUrl: "https://www.highcoastalcannabis.com",
  storeId: "https://www.highcoastalcannabis.com",
  landingPath: "/weed-dispensary-mississauga/",
  visitPath: "/visit",
  hoursPath: "/24-hour-dispensary-mississauga",
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
