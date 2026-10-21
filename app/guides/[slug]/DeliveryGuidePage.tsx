import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { DELIVERY_GUIDE_STORE, type DeliveryGuideEntry } from "../../lib/deliveryGuideRegistry";
import { SHOW_CIGARETTES, isGrabbaName, isKeptSmokeAccessoryName, visibleKeptSmokeCopy } from "../../lib/siteConfig";
import DeliveryGuideBody, { stripDeliveryMarkdown } from "./DeliveryGuideBody";
import styles from "./guide.module.css";

const BASE = `https://${DELIVERY_GUIDE_STORE.domain}`;
export default function DeliveryGuidePage({ guide }: { guide: DeliveryGuideEntry }) {
  const canonical = `${BASE}/guides/${guide.slug}`;
  const h1 = visibleKeptSmokeCopy(guide.h1);
  const title = visibleKeptSmokeCopy(guide.title);
  const description = visibleKeptSmokeCopy(guide.description);
  const body = visibleKeptSmokeCopy(guide.body_md);
  const faqs = guide.faq_items.flatMap((faq) => {
    if (!SHOW_CIGARETTES && isGrabbaName(`${faq.question} ${faq.answer}`) && !isKeptSmokeAccessoryName(`${faq.question} ${faq.answer}`)) return [];
    const question = visibleKeptSmokeCopy(faq.question);
    const answer = visibleKeptSmokeCopy(faq.answer);
    if (!question || !answer) return [];
    return [{ ...faq, question, answer }];
  });
  const categoryHref = !SHOW_CIGARETTES && isKeptSmokeAccessoryName(`${guide.slug} ${guide.name}`) ? "/items/add-ons" : guide.category_path;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: h1, item: canonical }] },
    { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: title, description },
    { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: stripDeliveryMarkdown(faq.question), acceptedAnswer: { "@type": "Answer", text: stripDeliveryMarkdown(faq.answer) } })) },
  ] };
  return <main className={styles.main}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><Navbar /><article className={styles.article}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{h1}</span></nav><header className={styles.hero}><h1>{h1}</h1></header><section className={styles.section} aria-label={`${h1} guide`}><DeliveryGuideBody markdown={body} faqs={faqs} /><div className={styles.actions}><Link className={styles.primary} href={guide.action_path}>{visibleKeptSmokeCopy(guide.main_button)}</Link><Link className={styles.secondary} href={categoryHref}>{visibleKeptSmokeCopy(guide.second_button)}</Link></div></section></article><Footer /></main>;
}
