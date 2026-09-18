/** SCC hub graph for LC01 — visit / geo / 24h / delivery plus short flower tiers. */
export const SCC_HUB_LINKS = [
  { href: "/", label: "Homepage" },
  { href: "/visit", label: "Lakeshore visit guide" },
  { href: "/high-coastal-visit", label: "High Coastal brand visit FAQ" },
  { href: "/24-hour-dispensary-mississauga", label: "24-hour open-now FAQ" },
  { href: "/weed-dispensary-mississauga/", label: "Weed dispensary in Mississauga" },
  { href: "/cannabis-delivery-lakeshore", label: "Cannabis delivery on Lakeshore" },
] as const;

export const SCC_SHORT_TIER_LINKS = [
  { href: "/exotic", label: "Exotic Weed", key: "EXOTIC" },
  { href: "/premium", label: "Premium Weed", key: "PREMIUM" },
  { href: "/aaa", label: "AAA+ Weed", key: "AAA+" },
  { href: "/aa", label: "AA Weed", key: "AA" },
  { href: "/budget", label: "Budget Weed", key: "BUDGET" },
] as const;
