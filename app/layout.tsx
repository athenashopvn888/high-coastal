import CigaretteStateProvider from "./components/CigaretteStateProvider";
import FleetContentProvider from "./components/fleet/FleetContentProvider";
import FullNameNap from "./components/FullNameNap";
import MobileBottomBar from "./components/MobileBottomBar";
import PinnedNavClearance from "./components/PinnedNavClearance";
import { HOME_DOC_TITLE } from "./lib/homeDelivery";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";
import { SHOW_CIGARETTES } from "./lib/siteConfig";
import { STORE_IDENTITY, cannabisStoreGraphNode, serializeJsonLd, websiteGraphNode } from "./lib/storeIdentity";

const metadata: Metadata = {
  metadataBase: new URL(STORE_IDENTITY.websiteUrl),
  title: {
    default: HOME_DOC_TITLE,
    template: "%s | High Coastal Cannabis",
  },
  description:
    "High Coastal Cannabis is a 24-hour cannabis dispensary at 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5 in the Clarkson / Lakeshore neighbourhood. Adults 19+ can browse flower, pre-rolls, vapes, edibles, concentrates, and accessories. Call +1 (289) 815-5222.",
  keywords: [
    "cannabis dispensary Mississauga",
    "weed store Mississauga",
    "24 hour dispensary Mississauga",
    "Lakeshore Rd W dispensary",
    "weed dispensary Clarkson",
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
    ...(SHOW_CIGARETTES ? ["native cigarettes Mississauga"] : []),
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: STORE_IDENTITY.websiteUrl,
    siteName: STORE_IDENTITY.name,
    title: HOME_DOC_TITLE,
    description:
      "Browse flower tiers and menu categories for High Coastal Cannabis at 1720 Lakeshore Rd W. Open 24 Hours.",
    images: [
      {
        url: "https://www.highcoastalcannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "High Coastal Cannabis - Cannabis Dispensary Mississauga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_DOC_TITLE,
    description: "Browse current menu categories. Open 24 Hours at 1720 Lakeshore Rd W, Mississauga.",
    images: ["https://www.highcoastalcannabis.com/wp-content/uploads/2026/04/46Oi5.jpg"],
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
    canonical: STORE_IDENTITY.websiteUrl,
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [websiteGraphNode(), cannabisStoreGraphNode()],
};

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return metadata;
  const description = fleet.pages.Home?.metaDescription || "";
  if (!description || description === metadata.description) return metadata;
  return {
    ...metadata,
    description,
    openGraph: { ...metadata.openGraph, description },
    twitter: { ...metadata.twitter, description },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [fleet, cigaretteSnapshot] = await Promise.all([getFleetContent(), getCigaretteSnapshot()]);
  const cigarettes = toPublicCigaretteState(cigaretteSnapshot);
  const sheetBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : null;
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
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
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QLDK412BJR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QLDK412BJR');
            `
          }}
        />
      </head>
      <body>
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap, banners: sheetBanners }}>
          <CigaretteStateProvider value={{ ...cigarettes, web: SHOW_CIGARETTES ? cigarettes.web : false, tv: SHOW_CIGARETTES }}>
            {children}
            <FullNameNap />
            <PinnedNavClearance />
            <MobileBottomBar />
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}
