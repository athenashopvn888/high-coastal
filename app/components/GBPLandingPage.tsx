import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./GBPLandingPage.module.css";
import { lcWeedOwner as store } from "../lib/weedDiscovery";
import { STORE_IDENTITY as nap, jsonLdHtml, landingPageJsonLd } from "../lib/storeIdentity";

const faqItems = [
  { question: "Where is High Coastal Cannabis?", answer: `High Coastal Cannabis is located at ${nap.addressDisplay}.` },
  { question: "Is High Coastal Cannabis open 24 hours?", answer: "Yes. High Coastal Cannabis is open 24 hours a day, seven days a week." },
  { question: "Is High Coastal Cannabis on Lakeshore Rd W in Mississauga?", answer: `Yes. High Coastal Cannabis is at ${nap.streetAddress} in Mississauga, in the ${nap.neighborhood} neighbourhood, near ${nap.intersection}.` },
  { question: "What cannabis categories can I explore?", answer: "Adults 19+ can explore Budget Weed, AA Weed, AAA+ Weed, Premium Weed and Exotic Weed flower collections, along with pre-rolls, edibles, vapes, concentrates and accessories." },
  { question: "What is the difference between weed and cannabis?", answer: "Weed is common everyday terminology for cannabis. Cannabis is the broader term and can describe flower as well as other formats such as pre-rolls, edibles, vapes and concentrates." },
  { question: "What is the difference between bud and flower?", answer: "Flower is the category term for dried cannabis flower. Bud is a common informal word people use for flower." },
  { question: "Can I browse different flower tiers?", answer: "Yes. High Coastal Cannabis has dedicated sections for Budget Weed, AA Weed, AAA+ Weed, Premium Weed and Exotic Weed flower browsing." },
  { question: "How can I check on a specific product before visiting?", answer: `Call High Coastal Cannabis at ${nap.phoneDisplay} if you are looking for a specific product before making a special trip.` },
  { question: "Do I need to be 19+?", answer: "Yes. High Coastal Cannabis is for adults 19+." },
];

function withPhone(text: string) {
  if (!text.includes(nap.phoneDisplay)) return text;
  const [before, after] = text.split(nap.phoneDisplay);
  return (
    <>
      {before}
      <a href={`tel:${nap.phoneIntl}`}>
        <strong>{nap.phoneDisplay}</strong>
      </a>
      {after}
    </>
  );
}

export function GBPLandingPage() {
  const pageSchema = landingPageJsonLd(faqItems);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(pageSchema) }} />
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Open 24 Hours · Adults 19+ · {nap.neighborhood}</p>
          <h1>High Coastal Cannabis — 24-Hour Weed Dispensary on Lakeshore Rd W, Mississauga</h1>
          <p className={styles.heroAddress}>{nap.addressDisplay}</p>
          <p className={styles.heroPhone}>
            <a href={`tel:${nap.phoneIntl}`}>{nap.phoneDisplay}</a>
            <span aria-hidden="true"> · </span>
            {nap.hoursDisplay}
          </p>
          <div className={styles.actions}>
            <Link href="#find-your-weed" className={styles.primaryAction}>Find Your Weed</Link>
            <Link href="/visit" className={styles.secondaryAction}>Plan Your Visit</Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Weed and Cannabis in Mississauga, Open 24 Hours</h2>
          <p>High Coastal Cannabis is located at <strong>{nap.streetAddress}</strong> in Mississauga and is open <strong>24 hours a day, seven days a week</strong>.</p>
          <p>At High Coastal Cannabis, adults 19+ can begin with flower and choose from Budget Weed, AA Weed, AAA+ Weed, Premium Weed or Exotic Weed, or focus on a format such as pre-rolls, edibles, vapes, concentrates or accessories. The Lakeshore Road West location is open 24 hours, giving shoppers flexibility in when they visit.</p>
          <p>If you already know what you are looking for, call <a href={`tel:${nap.phoneIntl}`}><strong>{nap.phoneDisplay}</strong></a> before making a special trip.</p>
        </section>

        <section className={styles.section}>
          <p className={styles.kicker}>Clarkson / Lakeshore neighbourhood</p>
          <h2>24-Hour Dispensary on Lakeshore Rd W</h2>
          <p>High Coastal Cannabis is a 24-hour cannabis dispensary at <strong>{nap.addressDisplay}</strong>, in the {nap.neighborhood} neighbourhood of southwest Mississauga. Adults 19+ can walk in any hour for flower, pre-rolls, edibles, vapes, concentrates and accessories.</p>
          <p>Shoppers looking for a weed dispensary on Lakeshore Rd W, a 24-hour dispensary in Mississauga, or a cannabis store near Clarkson can confirm the current store identity: <strong>{nap.name}</strong>, {nap.addressDisplay}, {nap.phoneDisplay}, {nap.hoursDisplay}.</p>
          <p>The store sits on Lakeshore Rd W near Clarkson Rd N, convenient for Clarkson, Port Credit, Lorne Park and the Lakeshore corridor.</p>
          <div className={styles.areaRow}>
            {nap.doorTestAreas.map((area) => (
              <span className={styles.areaChip} key={area}>{area}</span>
            ))}
          </div>
        </section>

        <section className={styles.visitSection} id="visit">
          <div>
            <p className={styles.kicker}>Open 24 Hours on Lakeshore Road West</p>
            <h2>{nap.name}</h2>
            <address>
              {nap.streetAddress}
              <br />
              {nap.addressLocality}, {nap.addressRegion} {nap.postalCode}
              <br />
              Canada
            </address>
          </div>
          <div className={styles.visitFacts}>
            <strong>{nap.hoursDisplay} · 7 Days a Week</strong>
            <a href={`tel:${nap.phoneIntl}`}>Phone: {nap.phoneDisplay}</a>
            <span>Adults 19+</span>
            <span>{nap.intersection}, Mississauga</span>
          </div>
          <p>The 24-hour schedule gives adults 19+ flexibility to visit High Coastal Cannabis at the time that works for them. For a particular product, calling ahead is the safest way to confirm the details you need before making a special trip.</p>
          <p>Need the Port Credit / Clarkson corridor pin first? Use the <Link href="/visit">Lakeshore Mississauga visit guide</Link>.</p>
          <p>Need open-now hours, late arrival, and ID in FAQ form? Use the <Link href="/24-hour-dispensary-mississauga">24-hour Mississauga dispensary FAQ</Link>.</p>
        </section>

        <section className={styles.section} id="find-your-weed">
          <p className={styles.kicker}>Find Your Weed</p>
          <h2>Explore Flower by Tier</h2>
          <div className={styles.cardGrid}>{store.flowerTiers.map((item) => <Link href={item.href} className={styles.card} key={item.href}><span>{item.label}</span><small>{item.description}</small></Link>)}</div>
          <div className={styles.inlineGuide}><span>Want more context before choosing a tier?</span><Link href="/resources/weed-flower-guide">Read the Weed &amp; Flower Guide</Link></div>
          <h3 className={styles.subheading}>Explore Cannabis by Format</h3>
          <div className={styles.cardGrid}>{store.categories.map((item) => <Link href={item.href} className={styles.card} key={item.href}><span>{item.label}</span><small>{item.description}</small></Link>)}</div>
          <p className={styles.note}>If you are looking for one specific item, call <a href={`tel:${nap.phoneIntl}`}><strong>{nap.phoneDisplay}</strong></a> before making a special trip.</p>
        </section>

        <section className={styles.section}>
          <h2>Weed, Cannabis, Bud and Flower</h2>
          <p>Shoppers use different words when talking about cannabis. Knowing how the terms relate can make choosing a category easier.</p>
          <div className={styles.termGrid}>
            <article><h3>Weed</h3><p>Weed is common everyday language for cannabis. Someone looking for weed may be interested in flower, pre-rolls, edibles, vapes, concentrates or another cannabis format.</p></article>
            <article><h3>Cannabis</h3><p>Cannabis is the broader term. It includes flower as well as the other cannabis categories available to explore at High Coastal Cannabis.</p></article>
            <article><h3>Flower</h3><p>Flower refers to dried cannabis flower. High Coastal Cannabis organizes flower browsing into Budget Weed, AA Weed, AAA+ Weed, Premium Weed and Exotic Weed collections.</p></article>
            <article><h3>Bud</h3><p>Bud is a common informal word for cannabis flower.</p></article>
          </div>
          <p>Whether you say weed, cannabis, bud or flower, the useful next step is choosing the format or flower tier that matches what you want to shop for.</p>
        </section>

        <section className={styles.section}>
          <h2>Learn Before You Browse</h2>
          <p>Want a clearer way to read the High Coastal Cannabis menu? Start with Cannabis 101, the Lakeshore Road first-visit guide or the Weed &amp; Flower Guide.</p>
          <div className={styles.inlineGuide}>
            <Link href="/visit">Lakeshore Visit Guide</Link>
            <Link href="/24-hour-dispensary-mississauga">24-Hour Open-Now FAQ</Link>
            <Link href="/resources/cannabis-101">Cannabis 101</Link>
            <Link href="/resources/lakeshore-clarkson-first-visit-guide">First Visit on Lakeshore Road West</Link>
            <Link href="/resources/weed-flower-guide">Weed &amp; Flower Guide</Link>
            <Link href="/resources">Resource Centre</Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Helpful Cannabis Guides</h2>
          <div className={styles.guideGrid}>{store.guides.map((guide) => <article className={styles.guideCard} key={guide.href}><h3>{guide.label}</h3><p>{guide.description}</p><Link href={guide.href}>Explore {guide.label}</Link></article>)}</div>
        </section>

        <section className={styles.section} id="faq">
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqItems.map((item) => (
              <article className={styles.faqItem} key={item.question}>
                <h3>{item.question}</h3>
                <p>{withPhone(item.answer)}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
