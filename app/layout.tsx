import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://highcoastalcannabis.com"),
  title: {
    default: "High Coastal Cannabis — Premium Cannabis Dispensary, Mississauga",
    template: "%s | High Coastal Cannabis",
  },
  description:
    "Shop 200+ premium cannabis strains at High Coastal Cannabis. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Mississauga's uplifting dispensary at 1720 Lakeshore Rd W. Open 24 Hours.",
  keywords: [
    "cannabis dispensary Mississauga",
    "weed store Mississauga",
    "exotic flower Mississauga",
    "premium cannabis",
    "High Coastal Cannabis",
    "cheap weed Mississauga",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Mississauga",
    "vapes",
    "pre-rolls",
    "native cigarettes Mississauga",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://highcoastalcannabis.com",
    siteName: "High Coastal Cannabis",
    title: "High Coastal Cannabis — Premium Mississauga Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Mississauga's uplifting dispensary at 1720 Lakeshore Rd W. Open 24 Hours.",
    images: [
      {
        url: "https://highcoastalcannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "High Coastal Cannabis — Premium Cannabis Dispensary Mississauga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "High Coastal Cannabis — Mississauga's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open 24 Hours at 1720 Lakeshore Rd W, Mississauga.",
    images: ["https://highcoastalcannabis.com/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://highcoastalcannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://highcoastalcannabis.com",
  name: "High Coastal Cannabis",
  description: "Cannabis dispensary at 1720 Lakeshore Rd W in Mississauga, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://highcoastalcannabis.com",
  telephone: "+12894017550",
  image: "https://highcoastalcannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1720 Lakeshore Rd W",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5J 1J5",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.5177,
    longitude: -79.6220,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://maps.google.com/?q=1720+Lakeshore+Rd+W,+Mississauga,+ON+L5J+1J5",
    "https://maps.google.com/?q=1720+Lakeshore+Rd+W,+Mississauga,+ON+L5J+1J5",
  ],
  hasMap: "https://maps.google.com/?q=1720+Lakeshore+Rd+W,+Mississauga,+ON+L5J+1J5",
  areaServed: {
    "@type": "City",
    name: "Mississauga",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Mississauga" />
        <meta name="geo.position" content="43.5177;-79.6220" />
        <meta name="ICBM" content="43.5177, -79.6220" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
