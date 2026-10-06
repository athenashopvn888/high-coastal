import type { CSSProperties } from "react";

export type TvTheme = {
  headerImage: string; backgroundImage: string; cornerLeft?: string; cornerRight?: string;
  primary: string; accent: string; glow: string; cardBorder: string; headerText: string;
  sloganLeft: string; sloganRight: string; footerLeft: string; footerRight: string;
};

export const TV_THEMES: Readonly<Record<string, TvTheme>> = {
  LC01: {
    headerImage: "/tv-theme/lc01/header.webp", backgroundImage: "/tv-theme/lc01/background.webp",
    cornerLeft: "/tv-theme/lc01/corner-left.png", cornerRight: "/tv-theme/lc01/corner-right.png",
    primary: "#005B63", accent: "#F0A6B5", glow: "rgba(125, 232, 224, 0.42)",
    cardBorder: "rgba(255, 221, 225, 0.94)", headerText: "#FFF9F2",
    sloganLeft: "COASTAL QUALITY", sloganRight: "HIGHER TIDES",
    footerLeft: "HIGH COASTAL CANNABIS", footerRight: "PREMIUM CANNABIS · COASTAL VIBES",
  },
};

export function getTvTheme(storeCode?: string | null): TvTheme | undefined { return storeCode ? TV_THEMES[storeCode] : undefined; }

type TvThemeVariables = CSSProperties & {
  "--tv-theme-header-image": string; "--tv-theme-background-image": string; "--tv-theme-primary": string;
  "--tv-theme-accent": string; "--tv-theme-glow": string; "--tv-theme-card-border": string; "--tv-theme-header-text": string;
};

export function getTvThemeVariables(theme: TvTheme): TvThemeVariables {
  return { "--tv-theme-header-image": `url("${theme.headerImage}")`, "--tv-theme-background-image": `url("${theme.backgroundImage}")`,
    "--tv-theme-primary": theme.primary, "--tv-theme-accent": theme.accent, "--tv-theme-glow": theme.glow,
    "--tv-theme-card-border": theme.cardBorder, "--tv-theme-header-text": theme.headerText };
}
