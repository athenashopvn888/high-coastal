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
];

/** Rolling papers, Backwoods, and cigarillo-style wraps stay listed. */
export function isKeptSmokeAccessoryName(value: string): boolean {
  return /\b(backwoods|grabba|cigarillos?|rolling papers?|raw papers?)\b/i.test(value);
}

export function isCigaretteHref(href: string): boolean {
  const path = href.split("?")[0].replace(/\/$/, "") || "/";
  if (CIGARETTE_HREFS.includes(path)) return true;
  return path.startsWith("/resources/native-smokes");
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
