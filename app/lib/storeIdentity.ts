/** Canonical LC01 NAP. Import this everywhere identity is rendered or emitted. */
export const STORE_IDENTITY = {
  name: "High Coastal Cannabis",
  domain: "www.highcoastalcannabis.com",
  websiteUrl: "https://www.highcoastalcannabis.com",
  storeId: "https://www.highcoastalcannabis.com",
  landingPath: "/weed-dispensary-mississauga/",
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
