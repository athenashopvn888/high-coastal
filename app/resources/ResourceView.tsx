import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./resources.module.css";
import type { ResourcePage } from "./resourceData";

type ResourceViewProps = {
  page: ResourcePage;
};

export default function ResourceView({ page }: ResourceViewProps) {
  const intro = Array.isArray(page.intro) ? page.intro : [page.intro];

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <div className={styles.intro}>
            {intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {page.introBullets && (
              <ul>{page.introBullets.map((item) => <li key={item}>{item}</li>)}</ul>
            )}
          </div>
        </div>
      </section>

      {page.cards.length > 0 && (
        <section className={styles.cardsSection}>
          <div className={styles.grid}>
            {page.cards.map((card) => (
              <Link key={card.href} href={card.href} className={styles.card}>
                <span>{card.title}</span>
                {card.text && <p>{card.text}</p>}
              </Link>
            ))}
          </div>
        </section>
      )}

      {page.groups?.map((group) => (
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
        {page.sections.map((section) => (
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
        {page.faqs && page.faqs.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            {page.faqs.map((faq) => (
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
