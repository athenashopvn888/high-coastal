/**
 * Site-wide cigarette / tobacco visibility.
 * Default is off. Set NEXT_PUBLIC_SHOW_CIGARETTES=true and rebuild to restore.
 */
const SHOW_CIGARETTES_DEFAULT = false;

function readShowCigarettes(raw: string | undefined): boolean {
  if (raw == null || raw.trim() === "") return SHOW_CIGARETTES_DEFAULT;
  return /^(1|true|yes|on)$/i.test(raw.trim());
}

export const SHOW_CIGARETTES = readShowCigarettes(process.env.NEXT_PUBLIC_SHOW_CIGARETTES);

/** Nicotine vape category. Cigarette URLs temporarily redirect here while the switch is off. */
export const VAPE_PAGE_PATH = "/items/vapes";

const CIGARETTE_HREFS = [
  "/cigarettes",
  "/items/cigarettes",
  "/native-cigarettes-lakeshore",
  "/info/native-cigarettes-mississauga",
  "/info/native-cigarettes-york",
  "/resources/native-smokes",
  "/resources/native-smokes/native-cigarettes-guide",
  "/guides/grabba",
  "/guides/grabba-delivery-mississauga",
  "/item/grabba",
  "/item/grabba-shaker-redrose-red-herring",
];

const KEPT_SMOKE_ACCESSORY = /\b(backwoods|cigarillos?|rolling papers?|raw papers?)\b/i;

/** Rolling papers, Backwoods, and cigarillo-style wraps stay listed. Grabba does not. */
export function isKeptSmokeAccessoryName(value: string): boolean {
  return KEPT_SMOKE_ACCESSORY.test(value);
}

export function isGrabbaName(value: string): boolean {
  return /\bgrabba\b/i.test(value);
}

export function isCigaretteHref(href: string): boolean {
  const path = href.split("?")[0].replace(/\/$/, "") || "/";
  if (CIGARETTE_HREFS.includes(path)) return true;
  if (path.startsWith("/resources/native-smokes")) return true;
  const decoded = safeDecode(path);
  return isGrabbaName(decoded) && !isKeptSmokeAccessoryName(decoded);
}

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/**
 * Drop the shopper phrase "Native cigarettes" from copy that stays on screen.
 * Source strings are unchanged and return in full when the switch is on.
 */
export function stripNativeCigarettePhrase(text: string): string {
  if (SHOW_CIGARETTES || !text) return text;
  const word = "(?:\\*\\*)?\\bnative[ \\t]+cigarettes?\\b(?:\\*\\*)?";
  const stripped = text
    .replace(new RegExp(`(?:^|(?<=[.!?][ \\t]+))[ \\t]*${word}[ \\t]+for adults[^.!?\\n]*[.!?]?`, "gi"), "")
    .replace(new RegExp(`${word}[ \\t]*/[ \\t]*`, "gi"), "")
    .replace(new RegExp(`[ \\t]*/[ \\t]*${word}`, "gi"), "")
    .replace(new RegExp(word, "gi"), "");
  return stripped
    .split("\n")
    .map((line) => line.replace(/\*\*[ \t]*\*\*/g, "").replace(/[ \t]{2,}/g, " ").replace(/[ \t]+([,.;:!?])/g, "$1").replace(/,[ \t]*,/g, ",").replace(/\([ \t]*\)/g, "").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Kept Backwoods / cigarillo / paper pages stay. Grabba sentences and the
 * Native cigarettes phrase are omitted from what the reader sees.
 */
export function visibleKeptSmokeCopy(text: string): string {
  if (SHOW_CIGARETTES || !text) return text;
  const lines = text.split("\n").flatMap((line) => {
    const grabbaOnlyBullet = /^\s*[-*]\s+/.test(line) && isGrabbaName(line) && !isKeptSmokeAccessoryName(line);
    if (grabbaOnlyBullet) return [];
    const withoutGrabbaSentences = line.replace(/[^.!?\n]*\bgrabba\b[^.!?\n]*[.!?]?/gi, (sentence) =>
      isKeptSmokeAccessoryName(sentence) ? sentence : "",
    ).trim();
    return withoutGrabbaSentences ? [withoutGrabbaSentences] : [];
  });
  return stripNativeCigarettePhrase(lines.join("\n"));
}

/**
 * Copy shown while cigarettes are hidden.
 * Returns "" when the text is still a cigarette / tobacco mention after light clause removal.
 */
export function publicCopy(text: string): string {
  if (SHOW_CIGARETTES) return text;
  const stripped = text
    .replace(/,\s*and cigarettes where listed/gi, "")
    .replace(/,\s*or cigarettes where listed/gi, "")
    .replace(/,\s*and cigarette categories\b/gi, "")
    .replace(/,\s*and cigarettes\b/gi, "")
    .replace(/,\s*and Native smokes where listed/gi, "")
    .replace(/\s+and cigarettes\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.])/g, "$1")
    .trim();
  if (/\b(cigarettes?|native smokes|cartons?|marlboro|belmont|tobacco)\b/i.test(stripped)) return "";
  return stripped;
}

export function visibleFaqs<T extends { question: string; answer: string }>(faqs: readonly T[]): T[] {
  if (SHOW_CIGARETTES) return [...faqs];
  return faqs.flatMap((faq) => {
    const question = publicCopy(faq.question);
    const answer = publicCopy(faq.answer);
    if (!question || !answer) return [];
    if (question === faq.question && answer === faq.answer) return [faq];
    return [{ ...faq, question, answer }];
  });
}

export function visibleQa<T extends { q: string; a: string }>(faqs: readonly T[]): T[] {
  if (SHOW_CIGARETTES) return [...faqs];
  return faqs.flatMap((faq) => {
    const q = publicCopy(faq.q);
    const a = publicCopy(faq.a);
    if (!q || !a) return [];
    if (q === faq.q && a === faq.a) return [faq];
    return [{ ...faq, q, a }];
  });
}
