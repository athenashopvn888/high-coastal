export type WeedDiscoveryLink = { label: string; description: string; href: string };
export type WeedOwnerConfig = { storeName: string; city: string; address: string; streetAddress: string; province: string; postalCode: string; phoneDisplay: string; phoneIntl: string; ownerPath: string; flowerTiers: WeedDiscoveryLink[]; categories: WeedDiscoveryLink[]; guides: WeedDiscoveryLink[] };

export const lcWeedOwner: WeedOwnerConfig = {
  storeName: "High Coastal Cannabis", city: "Mississauga", address: "1720 Lakeshore Rd W, Mississauga, ON L5J 1J5, Canada", streetAddress: "1720 Lakeshore Rd W", province: "ON", postalCode: "L5J 1J5", phoneDisplay: "+1 (289) 815-5222", phoneIntl: "+12898155222", ownerPath: "/weed-dispensary-mississauga/",
  flowerTiers: [
    { label: "Budget Flower", description: "Start with the Budget flower selection.", href: "/budget" }, { label: "AA Flower", description: "Explore the AA flower selection.", href: "/aa" }, { label: "AAA+ Flower", description: "Explore the AAA+ flower selection.", href: "/aaa" }, { label: "Premium Flower", description: "Explore the Premium flower selection.", href: "/premium" }, { label: "Exotic Flower", description: "Explore the Exotic flower selection.", href: "/exotic" },
  ],
  categories: [
    { label: "Pre-Rolls", description: "For shoppers who prefer cannabis in a pre-roll format.", href: "/items/prerolls" }, { label: "Edibles", description: "Explore the edibles selection by format.", href: "/items/edibles" }, { label: "Vapes", description: "Explore cannabis vape options by format.", href: "/items/vapes" }, { label: "Concentrates", description: "Explore the concentrates category.", href: "/items/concentrates" }, { label: "Accessories", description: "Explore accessories for cannabis shoppers.", href: "/items/add-ons" },
  ],
  guides: [
    { label: "Menu Guide", description: "Compare flower, pre-rolls, edibles, vapes, concentrates and other cannabis formats.", href: "/resources/menu-guide" }, { label: "Flower Guide", description: "Find more context before choosing a flower tier.", href: "/resources/flower-guide" }, { label: "Value Guide", description: "Understand value-oriented choices without relying on a current price or promotion.", href: "/resources/value-guide" }, { label: "Pre-Roll Guide", description: "Focus specifically on the pre-roll format.", href: "/resources/pre-roll-guide" },
  ],
};
