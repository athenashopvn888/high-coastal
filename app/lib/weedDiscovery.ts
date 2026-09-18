import { STORE_IDENTITY as nap } from "./storeIdentity";

export type WeedDiscoveryLink = { label: string; description: string; href: string };
export type WeedOwnerConfig = { storeName: string; city: string; address: string; streetAddress: string; province: string; postalCode: string; phoneDisplay: string; phoneIntl: string; ownerPath: string; flowerTiers: WeedDiscoveryLink[]; categories: WeedDiscoveryLink[]; guides: WeedDiscoveryLink[] };

export const lcWeedOwner: WeedOwnerConfig = {
  storeName: nap.name, city: nap.addressLocality, address: nap.addressDisplay, streetAddress: nap.streetAddress, province: nap.addressRegion, postalCode: nap.postalCode, phoneDisplay: nap.phoneDisplay, phoneIntl: nap.phoneIntl, ownerPath: nap.landingPath,
  flowerTiers: [
    { label: "Budget Weed", description: "Explore the Budget Weed flower collection.", href: "/budget-weed" }, { label: "AA Weed", description: "Explore the AA Weed flower collection.", href: "/aa-weed" }, { label: "AAA+ Weed", description: "Explore the AAA+ Weed flower collection.", href: "/aaa-weed" }, { label: "Premium Weed", description: "Explore the Premium Weed flower collection.", href: "/premium-weed" }, { label: "Exotic Weed", description: "Explore the Exotic Weed flower collection.", href: "/exotic-weed" },
  ],
  categories: [
    { label: "Pre-Rolls", description: "Explore cannabis in a pre-roll format.", href: "/items/prerolls" }, { label: "Edibles", description: "Explore the edibles category by format.", href: "/items/edibles" }, { label: "Nicotine Vape", description: "Explore the Nicotine Vape category, kept separate from THC Vape.", href: "/items/vapes" }, { label: "Concentrates", description: "Explore the concentrates category.", href: "/items/concentrates" }, { label: "Accessories", description: "Explore accessories for cannabis shoppers.", href: "/items/add-ons" },
  ],
  guides: [
    { label: "Menu Guide", description: "Compare flower, pre-rolls, edibles, vapes, concentrates and other cannabis formats.", href: "/resources/menu-guide" }, { label: "Weed & Flower Guide", description: "Find more context before choosing a Weed flower collection.", href: "/resources/weed-flower-guide" }, { label: "Value Guide", description: "Understand value-oriented choices without relying on a current price or promotion.", href: "/resources/value-guide" }, { label: "Pre-Roll Guide", description: "Focus specifically on the pre-roll format.", href: "/resources/pre-roll-guide" },
  ],
};
