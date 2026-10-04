import type { Metadata } from "next";
import TvReviewQr from "../TvReviewQr";

export const metadata: Metadata = {
  title: "High Coastal In-Store Accessories Display",
  description: "Operational in-store accessories menu display for High Coastal Cannabis.",
  robots: { index: false, follow: false },
};

export default function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <TvReviewQr storeName="High Coastal Cannabis" />
    </>
  );
}
