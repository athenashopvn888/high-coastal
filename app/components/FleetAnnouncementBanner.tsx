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
<Link href="/items/cigarettes" data-cig-mix-banner="" aria-label="Shop cigarette mix-and-match deals">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/native-cigarette-offer-20260822.webp" alt="Cigarette deal at High Coastal Cannabis — 2 packs for $5 mix and match. Adults 19+."
          style={{ display: "block", width: "100%", height: "auto" }} />
      </Link>
</aside>
  );
}
