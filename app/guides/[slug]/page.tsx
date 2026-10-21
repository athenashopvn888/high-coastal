import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { SHOW_CIGARETTES, VAPE_PAGE_PATH, isKeptSmokeAccessoryName, visibleKeptSmokeCopy } from "../../lib/siteConfig";
import { isHiddenCigaretteGuide } from "../../lib/cigaretteVisibility";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { DELIVERY_GUIDE_REGISTRY, getDeliveryGuide } from "../../lib/deliveryGuideRegistry";
import { GUIDE_REGISTRY, GUIDE_STORE, getGuide, resolveGuideProduct, type GuideEntry } from "../../lib/guideRegistry";
import GuideBody, { stripMarkdown } from "./GuideBody";
import DeliveryGuidePage from "./DeliveryGuidePage";
import styles from "./guide.module.css";

const BASE = `https://${GUIDE_STORE.domain}`;
type GuidePageProps = { params: Promise<{ slug: string }> };
const laneCopy = {
  strain: { label: "Strain name", category: "Cannabis flower" },
  native_cig: { label: "Native Cigarettes", category: "Native Cigarettes" },
  nic_vape: { label: "Nicotine Vape", category: "Nicotine Vape" },
  thc_vape: { label: "THC Vape", category: "THC Vape" },
} as const;

export const dynamicParams = false;
export function generateStaticParams() { return [...GUIDE_REGISTRY, ...DELIVERY_GUIDE_REGISTRY].map((guide) => ({ slug: guide.slug })); }

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const deliveryGuide = getDeliveryGuide(slug);
  if (deliveryGuide) {
    if (!SHOW_CIGARETTES && deliveryGuide.lane === "native_cig" && !isKeptSmokeAccessoryName(`${deliveryGuide.slug} ${deliveryGuide.name}`)) redirect(VAPE_PAGE_PATH);
    const title = visibleKeptSmokeCopy(deliveryGuide.title);
    const description = visibleKeptSmokeCopy(deliveryGuide.description);
    return { title: { absolute: title }, description, alternates: { canonical: `${BASE}/guides/${deliveryGuide.slug}` }, robots: { index: true, follow: true }, openGraph: { title, description, url: `${BASE}/guides/${deliveryGuide.slug}`, type: "website" } };
  }
  const guide = getGuide(slug);
  if (!guide) return {};
  if (!SHOW_CIGARETTES && guide.lane === "native_cig" && !isKeptSmokeAccessoryName(`${guide.slug} ${guide.name}`)) redirect(VAPE_PAGE_PATH);
  const title = visibleKeptSmokeCopy(guide.title);
  const description = visibleKeptSmokeCopy(stripMarkdown(guide.description));
  const keywords = guide.primaryKeywords.map((keyword) => visibleKeptSmokeCopy(keyword)).filter(Boolean);
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: `${BASE}/guides/${guide.slug}` },
    robots: { index: true, follow: true },
    openGraph: { title, description, url: `${BASE}/guides/${guide.slug}`, type: "website" },
  };
}

const relatedEntries = (guide: GuideEntry) => guide.relatedSlugs.map(getGuide).filter((entry): entry is GuideEntry => Boolean(entry)).filter((entry) => !isHiddenCigaretteGuide(entry));

function visibleLane(guide: GuideEntry) {
  const lane = laneCopy[guide.lane];
  if (SHOW_CIGARETTES || guide.lane !== "native_cig") return lane;
  const label = `${guide.slug} ${guide.name}`;
  if (/\bbackwoods\b/i.test(label)) return { label: "Backwoods", category: "Backwoods" };
  if (/\bcigarillos?\b/i.test(label)) return { label: "Cigarillos", category: "Cigarillos" };
  if (/\b(rolling papers?|raw papers?)\b/i.test(label)) return { label: "Rolling papers", category: "Rolling papers" };
  return { label: "Wraps", category: "Wraps" };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const slug = (await params).slug;
  const deliveryGuide = getDeliveryGuide(slug);
  if (deliveryGuide) {
    if (!SHOW_CIGARETTES && deliveryGuide.lane === "native_cig" && !isKeptSmokeAccessoryName(`${deliveryGuide.slug} ${deliveryGuide.name}`)) redirect(VAPE_PAGE_PATH);
    return <DeliveryGuidePage guide={deliveryGuide} />;
  }
  const guide = getGuide(slug);
  if (!guide) notFound();
  if (!SHOW_CIGARETTES && guide.lane === "native_cig" && !isKeptSmokeAccessoryName(`${guide.slug} ${guide.name}`)) redirect(VAPE_PAGE_PATH);
  const product = resolveGuideProduct(guide);
  const productHref = product ? `${guide.lane === "strain" ? "/flower" : "/item"}/${product.slug}` : undefined;
  const categoryHref = !SHOW_CIGARETTES && isKeptSmokeAccessoryName(`${guide.slug} ${guide.name}`) ? "/items/add-ons" : guide.preferredCategoryPath;
  const canonical = `${BASE}/guides/${guide.slug}`;
  const lane = visibleLane(guide);
  const title = visibleKeptSmokeCopy(guide.title);
  const description = visibleKeptSmokeCopy(stripMarkdown(guide.description));
  const body = visibleKeptSmokeCopy(guide.bodyMd);
  const related = relatedEntries(guide);
  const graph: Record<string, unknown>[] = [{
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE}/guides` },
      { "@type": "ListItem", position: 3, name: guide.name, item: canonical },
    ],
  }];
  if (guide.schema.types.includes("WebPage")) graph.push({ "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: title, description });
  if (guide.schema.types.includes("FAQPage")) graph.push({
    "@type": "FAQPage",
    mainEntity: guide.schema.faq_items.flatMap((faq) => {
      const name = visibleKeptSmokeCopy(stripMarkdown(faq.question));
      const text = visibleKeptSmokeCopy(stripMarkdown(faq.answer));
      if (!name || !text) return [];
      return [{ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }];
    }),
  });
  if (guide.schema.types.includes("Product")) graph.push({
    "@type": "Product",
    name: guide.name,
    brand: { "@type": "Brand", name: guide.name },
    description,
    category: lane.category,
    url: canonical,
  });
  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <article className={styles.article}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/guides">Guides</Link><span>/</span><span>{guide.name}</span></nav>
        <header className={styles.hero}>
          <span className={styles.lane}>{lane.label}</span>
          <h1>{title}</h1>
          <p className={styles.lede}>{description}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href={productHref ?? categoryHref}>{productHref ? `Open the ${guide.name} menu listing` : "Check today’s board"}</Link>
            <Link className={styles.secondary} href={categoryHref}>Browse {lane.category}</Link>
          </div>
        </header>
        <section className={styles.section} aria-label={`${guide.name} guide`}><GuideBody markdown={body} /></section>
        {related.length > 0 ? <section className={styles.section} aria-labelledby="related-guides-heading">
          <h2 id="related-guides-heading">Related {lane.label} guides</h2>
          <div className={styles.related}>{related.map((entry) => <Link key={entry.slug} href={`/guides/${entry.slug}`}>{entry.name}<span>{visibleLane(entry).label}</span></Link>)}</div>
        </section> : null}
        <aside className={styles.finalCta}>
          <h2>Check today&apos;s board</h2>
          <p>Use the current menu path for the latest posted listing and format details.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href={productHref ?? categoryHref}>Open today&apos;s menu path</Link>
            <Link className={styles.secondary} href="/visit">Visit {GUIDE_STORE.brand}</Link>
          </div>
        </aside>
      </article>
      <Footer />
    </main>
  );
}
