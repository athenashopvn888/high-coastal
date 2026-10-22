import { redirect } from "next/navigation";
import { cigaretteWebMode } from "./cigaretteFeed";
import { SHOW_CIGARETTES, VAPE_PAGE_PATH } from "./siteConfig";

/**
 * Cigarette URLs keep today's redirect while the feed is coded or missing.
 * An explicit off stays on this URL. An explicit on renders the page.
 */
export async function resolveCigaretteRequest(isCigaretteUrl: boolean): Promise<"show" | "unavailable"> {
  if (!isCigaretteUrl) return "show";
  const mode = await cigaretteWebMode();
  if (mode === "off") return "unavailable";
  if (mode === "on") return "show";
  if (!SHOW_CIGARETTES) redirect(VAPE_PAGE_PATH);
  return "show";
}
