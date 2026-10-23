import { cache } from "react";
import {
  cigarettePublicHeaders,
  decideCigaretteGuide,
  decideCigaretteSurface,
  reconcileSurfaceItems,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
} from "./cigDecision";
import { allFlowers, allItems, type ItemProduct } from "./products";
import { getCigaretteDataset } from "./tvStock";

export type CigaretteSnapshot = {
  web: CigaretteSurfaceDecision & { wording: CigaretteWording };
  tv: CigaretteSurfaceDecision & { wording: CigaretteWording };
  guides: CigaretteSurfaceDecision;
  wording: CigaretteWording;
  live: boolean;
  items: ItemProduct[];
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

/** Coded redirect, explicit sheet off (stay on the URL), or explicit sheet on. */
export type CigaretteWebMode = "coded" | "on" | "off";

function snapshotFrom(cig: unknown, items: ItemProduct[], live: boolean, errored: boolean): CigaretteSnapshot {
  const web = decideCigaretteSurface({ cig, items, surface: "web", errored });
  const tv = decideCigaretteSurface({ cig, items, surface: "tv", errored });
  const guides = decideCigaretteGuide({ cig, items, errored });
  return { web, tv, guides, wording: web.wording, live, items };
}

export function webModeFromReason(reason: string): CigaretteWebMode {
  if (reason === "on") return "on";
  if (reason === "off" || reason === "no-items") return "off";
  return "coded";
}

export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  try {
    const dataset = await getCigaretteDataset({
      staticFlowers: allFlowers,
      staticItems: allItems,
      timeoutMs: 2000,
    });
    const live = dataset?.source === "live";
    const items = Array.isArray(dataset?.items) ? dataset.items as ItemProduct[] : allItems;
    const cig = dataset?.cig ?? null;
    return snapshotFrom(cig, items.length ? items : allItems, live, !live && !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export async function cigaretteWebMode(): Promise<CigaretteWebMode> {
  try {
    const snap = await getCigaretteSnapshot();
    return webModeFromReason(snap.web.reason);
  } catch {
    return "coded";
  }
}

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  const webMode = webModeFromReason(snap.web.reason);
  const tvMode = webModeFromReason(snap.tv.reason);
  return {
    web: webMode === "on" ? true : webMode === "off" ? false : snap.web.show,
    tv: tvMode === "on" ? true : tvMode === "off" ? false : snap.tv.show,
    wording: snap.wording,
  };
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  return cigarettePublicHeaders(toPublicCigaretteState(snap));
}

export { reconcileSurfaceItems };
