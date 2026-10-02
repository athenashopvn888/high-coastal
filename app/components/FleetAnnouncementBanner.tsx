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
      <p data-bb-light-deal="">EXCLUSIVE SPECIAL PREMIUM GRADE BB FULL, BB LIGHT &amp; BELMONT KING SIZE!</p>
      <Link href="/items/cigarettes" data-cig-mix-banner="" aria-label="Shop cigarette mix-and-match deals">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/2pack5cig.webp" alt="Cigarette deal at High Coastal Cannabis — 2 packs for $5 mix and match. Adults 19+." />
      </Link>
      <Link href="/items/cigarettes" data-bb-premium-banner="" aria-label="Shop BB and Belmont Premium Grade cigarettes">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/BB_Belmont_Premium_Grade.webp" alt="Exclusive Premium Grade BB Full Flavor, BB Lights, and Belmont King Size cigarettes at High Coastal Cannabis — Exotic, Premium, and AAA+ weed with Buy 2g Get 1g FREE and Buy 3g Get 3g FREE." />
      </Link>
      <Link href="/items/cigarettes" data-belmont-mix-match-banner="" aria-label="BELMONT KING SIZE $10 - 2PACK BB $5 MIX & MATCH">
        <span data-belmont-offer-lead="">BELMONT KING SIZE $10 -</span>
        <span data-belmont-offer-tail=""> 2PACK BB $5 MIX &amp; MATCH</span>
      </Link>
    </aside>
  );
}
