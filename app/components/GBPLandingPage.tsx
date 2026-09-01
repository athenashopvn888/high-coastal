import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./GBPLandingPage.module.css";
import { lcWeedOwner as store } from "../lib/weedDiscovery";

const faqItems = [
  { question: "Where is High Coastal Cannabis?", answer: <>High Coastal Cannabis is located at <strong>{store.address}</strong>.</> },
  { question: "Is High Coastal Cannabis open 24 hours?", answer: <>Yes. High Coastal Cannabis is <strong>open 24 hours a day, seven days a week</strong>.</> },
  { question: "What cannabis categories can I explore?", answer: <>Adults 19+ can explore Budget, AA, AAA+, Premium and Exotic flower tiers, along with pre-rolls, edibles, vapes, concentrates and accessories.</> },
  { question: "What is the difference between weed and cannabis?", answer: <><strong>Weed</strong> is common everyday terminology for cannabis. <strong>Cannabis</strong> is the broader term and can describe flower as well as other formats such as pre-rolls, edibles, vapes and concentrates.</> },
  { question: "What is the difference between bud and flower?", answer: <><strong>Flower</strong> is the category term for dried cannabis flower. <strong>Bud</strong> is a common informal word people use for flower.</> },
  { question: "Can I browse different flower tiers?", answer: <>Yes. High Coastal Cannabis has dedicated sections for Budget, AA, AAA+, Premium and Exotic flower browsing.</> },
  { question: "How can I check on a specific product before visiting?", answer: <>Call High Coastal Cannabis at <a href={`tel:${store.phoneIntl}`}><strong>{store.phoneDisplay}</strong></a> if you are looking for a specific product before making a special trip.</> },
  { question: "Do I need to be 19+?", answer: <>Yes. High Coastal Cannabis is for <strong>adults 19+</strong>.</> },
];

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://www.highcoastalcannabis.com/weed-dispensary-mississauga/",
  name: store.storeName,
  url: "https://www.highcoastalcannabis.com/weed-dispensary-mississauga/",
  telephone: store.phoneIntl,
  address: { "@type": "PostalAddress", streetAddress: store.streetAddress, addressLocality: store.city, addressRegion: store.province, postalCode: store.postalCode, addressCountry: "CA" },
  openingHours: "Mo-Su 00:00-23:59",
};

export function GBPLandingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }} />
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Open 24 Hours · Adults 19+</p>
          <h1>High Coastal Cannabis — Weed Dispensary in Mississauga</h1>
          <p className={styles.heroAddress}>{store.address}</p>
          <div className={styles.actions}><Link href="#find-your-weed" className={styles.primaryAction}>Find Your Weed</Link><Link href="#visit" className={styles.secondaryAction}>Plan Your Visit</Link></div>
        </section>

        <section className={styles.section}>
          <h2>Weed and Cannabis in Mississauga, Open 24 Hours</h2>
          <p>High Coastal Cannabis is located at <strong>{store.streetAddress}</strong> in Mississauga and is open <strong>24 hours a day, seven days a week</strong>.</p>
          <p>At High Coastal Cannabis, adults 19+ can begin with flower and choose from Budget, AA, AAA+, Premium or Exotic, or focus on a format such as pre-rolls, edibles, vapes, concentrates or accessories. The Lakeshore Road West location is open 24 hours, giving shoppers flexibility in when they visit.</p>
          <p>If you already know what you are looking for, call <a href={`tel:${store.phoneIntl}`}><strong>{store.phoneDisplay}</strong></a> before making a special trip.</p>
        </section>

        <section className={styles.section} id="find-your-weed">
          <p className={styles.kicker}>Find Your Weed</p>
          <h2>Explore Flower by Tier</h2>
          <div className={styles.cardGrid}>{store.flowerTiers.map((item) => <Link href={item.href} className={styles.card} key={item.href}><span>{item.label}</span><small>{item.description}</small></Link>)}</div>
          <div className={styles.inlineGuide}><span>Want more context before choosing a tier?</span><Link href="/resources/flower-guide">Read the Flower Guide</Link></div>
          <h3 className={styles.subheading}>Explore Cannabis by Format</h3>
          <div className={styles.cardGrid}>{store.categories.map((item) => <Link href={item.href} className={styles.card} key={item.href}><span>{item.label}</span><small>{item.description}</small></Link>)}</div>
          <p className={styles.note}>If you are looking for one specific item, call <a href={`tel:${store.phoneIntl}`}><strong>{store.phoneDisplay}</strong></a> before making a special trip.</p>
        </section>

        <section className={styles.section}>
          <h2>Weed, Cannabis, Bud and Flower</h2>
          <p>Shoppers use different words when talking about cannabis. Knowing how the terms relate can make choosing a category easier.</p>
          <div className={styles.termGrid}>
            <article><h3>Weed</h3><p>Weed is common everyday language for cannabis. Someone looking for weed may be interested in flower, pre-rolls, edibles, vapes, concentrates or another cannabis format.</p></article>
            <article><h3>Cannabis</h3><p>Cannabis is the broader term. It includes flower as well as the other cannabis categories available to explore at High Coastal Cannabis.</p></article>
            <article><h3>Flower</h3><p>Flower refers to dried cannabis flower. High Coastal Cannabis organizes flower browsing into Budget, AA, AAA+, Premium and Exotic tiers.</p></article>
            <article><h3>Bud</h3><p>Bud is a common informal word for cannabis flower.</p></article>
          </div>
          <p>Whether you say weed, cannabis, bud or flower, the useful next step is choosing the format or flower tier that matches what you want to shop for.</p>
        </section>

        <section className={styles.visitSection} id="visit">
          <div><p className={styles.kicker}>Open 24 Hours on Lakeshore Road West</p><h2>{store.storeName}</h2><address>{store.streetAddress}<br />{store.city}, {store.province} {store.postalCode}, Canada</address></div>
          <div className={styles.visitFacts}><strong>Open 24 Hours · 7 Days a Week</strong><a href={`tel:${store.phoneIntl}`}>Phone: {store.phoneDisplay}</a><span>Adults 19+</span></div>
          <p>The 24-hour schedule gives adults 19+ flexibility to visit High Coastal Cannabis at the time that works for them. For a particular product, calling ahead is the safest way to confirm the details you need before making a special trip.</p>
        </section>

        <section className={styles.section}>
          <h2>Helpful Cannabis Guides</h2>
          <div className={styles.guideGrid}>{store.guides.map((guide) => <article className={styles.guideCard} key={guide.href}><h3>{guide.label}</h3><p>{guide.description}</p><Link href={guide.href}>Explore {guide.label}</Link></article>)}</div>
        </section>

        <section className={styles.section} id="faq"><h2>Frequently Asked Questions</h2><div className={styles.faqList}>{faqItems.map((item) => <article className={styles.faqItem} key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></section>
      </main>
      <Footer />
    </>
  );
}
