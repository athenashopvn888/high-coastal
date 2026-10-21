import { getDeliveryGuide } from "./deliveryGuideRegistry";
import { getGuide } from "./guideRegistry";
import { allItems } from "./products";
import {
  SHOW_CIGARETTES,
  VAPE_PAGE_PATH,
  isCigaretteHref,
  isKeptSmokeAccessoryName,
} from "./siteConfig";

type NamedItem = { name: string; slug: string; category: string };
type NamedGuide = { slug: string; lane: string; name?: string };

export function isHiddenCigaretteItem(item: NamedItem): boolean {
  if (SHOW_CIGARETTES) return false;
  const label = `${item.name} ${item.slug}`;
  if (isKeptSmokeAccessoryName(label)) return false;
  if (item.category.toUpperCase() === "CIGARETTES") return true;
  return /\b(cigarettes?|marlboro|belmont)\b/i.test(label);
}

export function isHiddenCigaretteGuide(guide: NamedGuide): boolean {
  if (SHOW_CIGARETTES) return false;
  if (guide.lane !== "native_cig") return false;
  return !isKeptSmokeAccessoryName(`${guide.slug} ${guide.name || ""}`);
}

/** 302 target while the switch is off. Null means the URL stays as it is. */
export function cigaretteRedirectDestination(pathname: string): string | null {
  if (SHOW_CIGARETTES) return null;
  const path = pathname.split("?")[0].replace(/\/$/, "") || "/";
  if (isCigaretteHref(path)) return VAPE_PAGE_PATH;

  if (path.startsWith("/item/")) {
    const slug = decodeURIComponent(path.slice("/item/".length));
    const item = allItems.find((entry) => entry.slug === slug);
    if (item && isHiddenCigaretteItem(item)) return VAPE_PAGE_PATH;
    if (!item && /\b(cigarettes?|marlboro|belmont)\b/i.test(slug) && !isKeptSmokeAccessoryName(slug)) {
      return VAPE_PAGE_PATH;
    }
  }

  if (path.startsWith("/guides/")) {
    const slug = decodeURIComponent(path.slice("/guides/".length));
    const guide = getGuide(slug) || getDeliveryGuide(slug);
    if (guide && isHiddenCigaretteGuide(guide)) return VAPE_PAGE_PATH;
  }

  return null;
}
