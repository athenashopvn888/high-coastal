import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation } from "@/app/lib/gbp-location";
import { STORE_IDENTITY as nap } from "@/app/lib/storeIdentity";

export const metadata: Metadata = {
  title: { absolute: gbpLocation.seoTitle },
  description: gbpLocation.metaDescription,
  alternates: {
    canonical: `https://${gbpLocation.domain}/${gbpLocation.slug}/`,
  },
  openGraph: {
    title: gbpLocation.seoTitle,
    description: gbpLocation.metaDescription,
    url: `${nap.websiteUrl}${nap.landingPath}`,
    siteName: nap.name,
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GBPLandingPage />;
}
