import { isGrabbaName, isKeptSmokeAccessoryName } from "../lib/siteConfig.ts";

export type TvCigaretteCardItem = { category?: string; name?: string };

/** Backwoods, cigarillos, and papers stay on the off card. Grabba does not. */
export function keptTvSmokeItems<T extends TvCigaretteCardItem>(items: T[]): T[] {
  return items.filter((item) => {
    const name = String(item.name || "");
    return item.category === "CIGARETTES" && isKeptSmokeAccessoryName(name) && !isGrabbaName(name);
  });
}

export type TvCigaretteCard<T extends TvCigaretteCardItem> =
  | { visible: true; kind: "cigarettes"; items: T[] }
  | { visible: true; kind: "kept"; title: "BACKWOODS"; items: T[] }
  | { visible: false; kind: "hidden" };

/** Live TV flag selects the cigarette board. Off keeps today's wraps card, or hides it when nothing is left. */
export function selectTvCigaretteCard<T extends TvCigaretteCardItem>(show: boolean, items: T[]): TvCigaretteCard<T> {
  if (!show) {
    const kept = keptTvSmokeItems(items);
    if (!kept.length) return { visible: false, kind: "hidden" };
    return { visible: true, kind: "kept", title: "BACKWOODS", items: kept };
  }
  return {
    visible: true,
    kind: "cigarettes",
    items: items.filter((item) => item.category === "CIGARETTES"),
  };
}
