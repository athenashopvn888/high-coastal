import Link from "next/link";
import FlowerBogoStrip from "./FlowerBogoStrip";

export default function FleetAnnouncementBanner() {
  return (
    <aside data-fleet-homepage-announcement="" aria-label="Store announcements">
      <FlowerBogoStrip hero />
      <Link href="/exotic-weed" data-exotic-tier-banner="" aria-label="Shop Exotic Premium AAA+ tier weed">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/top-weed-tier-lc01.webp" alt="TOP WEED TIER at High Coastal Cannabis — Exotic, Premium, and AAA+ weed with Buy 2g Get 1g FREE and Buy 3g Get 3g FREE." />
      </Link>
      <p data-cigarette-deal="">CIGARETTE DEAL ! 2 PACK $5 MIX AND MATCH</p>
      <p data-bb-light-deal="">EXCLUSIVE SPECIAL PREMIUM GRADE BB FULL &amp; BB LIGHT!</p>
      <Link href="/items/cigarettes" data-cig-mix-banner="" aria-label="Shop cigarette mix-and-match deals">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/2pack5cig.webp" alt="Cigarette deal at High Coastal Cannabis — 2 packs for $5 mix and match. Adults 19+." />
      </Link>
      <Link href="/items/cigarettes" data-bb-premium-banner="" aria-label="Shop BB Premium Grade cigarettes">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/bb-premium-grade-full-lights.webp" alt="Exclusive BB Premium Grade cigarettes — Full Flavor and Lights Canadian blend tobacco packs and cartons at High Coastal Cannabis." />
      </Link>
    </aside>
  );
}
