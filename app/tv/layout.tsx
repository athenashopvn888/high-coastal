import type { Metadata } from "next";
import TvReviewQr from "../TvReviewQr";

export const metadata: Metadata = {
  title: "High Coastal In-Store Flower Display",
  description: "Operational in-store flower menu display for High Coastal Cannabis.",
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <TvReviewQr storeName="High Coastal Cannabis" />
    </>
  );
}
