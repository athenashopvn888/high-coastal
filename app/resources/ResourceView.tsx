import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./resources.module.css";
import { SHOW_CIGARETTES, isCigaretteHref, isKeptSmokeAccessoryName, publicCopy, visibleQa } from "../lib/siteConfig";
import type { ResourceCard, ResourcePage, ResourceSection } from "./resourceData";

type ResourceViewProps = {
  page: ResourcePage;
};

function keepCard(card: ResourceCard) {
  if (SHOW_CIGARETTES) return true;
  if (isCigaretteHref(card.href)) return false;
  const blob = `${card.title} ${card.href} ${card.text || ""}`;
  if (isKeptSmokeAccessoryName(blob)) return true;
  return publicCopy(blob).length > 0;
}

function visibleSection(section: ResourceSection): ResourceSection | null {
  if (SHOW_CIGARETTES) return section;
  const heading = publicCopy(section.heading);
  const bodySource = Array.isArray(section.body) ? section.body : [section.body];
  const body = bodySource.map((paragraph) => publicCopy(paragraph)).filter(Boolean);
  const bullets = section.bullets?.map((item) => publicCopy(item)).filter(Boolean);
  const subsections = section.subsections?.flatMap((subsection) => {
    const subHeading = publicCopy(subsection.heading);
    const subBody = subsection.body.map((paragraph) => publicCopy(paragraph)).filter(Boolean);
    const subBullets = subsection.bullets?.map((item) => publicCopy(item)).filter(Boolean);
    if (!subHeading && subBody.length === 0 && !subBullets?.length) return [];
    return [{ ...subsection, heading: subHeading || "Details", body: subBody, bullets: subBullets }];
  });
  if (!heading && body.length === 0 && !bullets?.length && !subsections?.length) return null;
  return { ...section, heading: heading || "Details", body, bullets, subsections };
}

export default function ResourceView({ page }: ResourceViewProps) {
  const intro = (Array.isArray(page.intro) ? page.intro : [page.intro]).map((paragraph) => publicCopy(paragraph)).filter(Boolean);
  const introBullets = page.introBullets?.map((item) => publicCopy(item)).filter(Boolean);
  const cards = page.cards.filter(keepCard);
  const groups = page.groups?.flatMap((group) => {
    const groupCards = group.cards.filter(keepCard);
    if (!SHOW_CIGARETTES && publicCopy(group.heading) === "" && groupCards.length === 0) return [];
    if (groupCards.length === 0 && !SHOW_CIGARETTES) return [];
    const heading = publicCopy(group.heading);
    if (!heading) return [];
    return [{ ...group, heading, cards: groupCards }];
  });
  const sections = page.sections.flatMap((section) => {
    const next = visibleSection(section);
    return next ? [next] : [];
  });
  const faqs = page.faqs ? visibleQa(page.faqs) : undefined;

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <div className={styles.intro}>
            {intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {introBullets && introBullets.length > 0 && (
              <ul>{introBullets.map((item) => <li key={item}>{item}</li>)}</ul>
            )}
          </div>
        </div>
      </section>

      {cards.length > 0 && (
        <section className={styles.cardsSection}>
          <div className={styles.grid}>
            {cards.map((card) => (
              <Link key={card.href} href={card.href} className={styles.card}>
                <span>{card.title}</span>
                {card.text && <p>{card.text}</p>}
              </Link>
            ))}
          </div>
        </section>
      )}

      {groups?.map((group) => (
        <section className={styles.cardsSection} key={group.heading}>
          <div className={styles.groupWrap}>
            <h2>{group.heading}</h2>
            <div className={styles.grid}>
              {group.cards.map((card) => (
                <Link key={card.href} href={card.href} className={styles.card}>
                  <span>{card.title}</span>
                  {card.text && <p>{card.text}</p>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className={styles.body}>
        {sections.map((section) => (
          <article key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.subsections?.map((subsection) => (
              <div key={subsection.heading} className={styles.subsection}>
                <h3>{subsection.heading}</h3>
                {subsection.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {subsection.bullets && (
                  <ul>{subsection.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
                )}
              </div>
            ))}
          </article>
        ))}
        {faqs && faqs.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq) => (
              <details key={faq.q} className={styles.faqItem}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </section>
        )}
      </section>
      <Footer />
    </main>
  );
}
