import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./GBPLandingPage.module.css";
import { lcWeedOwner as store } from "../lib/weedDiscovery";
import { STORE_IDENTITY as nap, WEED_DISPENSARY_FAQS, jsonLdHtml, landingPageJsonLd } from "../lib/storeIdentity";
import { SccHubNav } from "./SccHubNav";

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
  const pageSchema = landingPageJsonLd(WEED_DISPENSARY_FAQS);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(pageSchema) }} />
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Open 24 Hours · Adults 19+ · {nap.neighborhood}</p>
          <h1>High Coastal Cannabis — Lakeshore / Clarkson / Port Credit Weed Dispensary in Mississauga</h1>
          <p className={styles.heroAddress}>{nap.addressDisplay}</p>
          <p className={styles.heroPhone}>
            <a href={`tel:${nap.phoneIntl}`}>{nap.phoneDisplay}</a>
            <span aria-hidden="true"> · </span>
            <a href={nap.websiteUrl}>www.highcoastalcannabis.com</a>
            <span aria-hidden="true"> · </span>
            {nap.hoursDisplay}
          </p>
          <div className={styles.actions}>
            <Link href="#find-your-weed" className={styles.primaryAction}>Find Your Weed</Link>
            <Link href="/visit" className={styles.secondaryAction}>Plan Your Visit</Link>
          </div>
          <SccHubNav current={nap.landingPath} />
        </section>

        <section className={styles.section}>
          <h2>Weed dispensary on Lakeshore — Clarkson / Port Credit</h2>
          <p>High Coastal Cannabis is the neighbourhood weed dispensary at <strong>{nap.streetAddress}</strong>, Mississauga, {nap.addressRegion} {nap.postalCode}, near <strong>{nap.intersection}</strong>. The walk-in is open <strong>24 hours a day, seven days a week</strong>.</p>
          <p>Adults 19+ can begin with flower — Budget Weed, AA Weed, AAA+ Weed, Premium Weed or Exotic Weed — or focus on pre-rolls, edibles, vapes, concentrates or accessories. If one listed item is the reason for the trip, call <a href={`tel:${nap.phoneIntl}`}><strong>{nap.phoneDisplay}</strong></a> first.</p>
        </section>

        <section className={styles.section}>
          <p className={styles.kicker}>Lakeshore / Clarkson / Port Credit</p>
          <h2>Shoreline walk-in — not a Square One mall pin</h2>
          <p>High Coastal Cannabis is a 24-hour weed dispensary at <strong>{nap.addressDisplay}</strong> on the Lakeshore West corridor. Clarkson is the neighbourhood around 1720. Port Credit sits east along Lakeshore Rd W. Lorne Park is the next inland cue.</p>
          <p>This is <strong>not a Square One mall pin</strong> and not a city-centre counter. If a map shows a different Lakeshore number or a mall unit, you are not at this store. Confirm the current identity: <strong>{nap.name}</strong>, {nap.addressDisplay}, {nap.phoneDisplay}, {nap.hoursDisplay}.</p>
          <p>The official website is the <Link href="/">homepage</Link> at www.highcoastalcannabis.com — not a city landing URL.</p>
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
          <p>Confirming the current High Coastal name versus older search phrases? Use the <Link href="/high-coastal-visit">High Coastal brand visit FAQ</Link>.</p>
          <p>Ordering to a Lakeshore / Clarkson / Port Credit address instead of walking in? Use the <Link href="/cannabis-delivery-lakeshore">cannabis delivery on Lakeshore</Link> page.</p>
          <p>Comparing listed tobacco-nicotine categories? Use <Link href="/native-cigarettes-lakeshore">Native cigarettes on Lakeshore</Link> or <Link href="/nicotine-vape-lakeshore">nicotine vape on Lakeshore</Link>.</p>
        </section>

        <section className={styles.section} id="find-your-weed">
          <p className={styles.kicker}>Find Your Weed</p>
          <h2>Explore Flower by Tier</h2>
          <div className={styles.cardGrid}>{store.flowerTiers.map((item) => <Link href={item.href} className={styles.card} key={item.href}><span>{item.label}</span><small>{item.description}</small></Link>)}</div>
          <div className={styles.inlineGuide}><span>Want more context before choosing a tier?</span><Link href="/resources/weed-flower-guide">Read the Weed &amp; Flower Guide</Link></div>
          <p>Short flower paths: <Link href="/exotic">Exotic</Link>, <Link href="/premium">Premium</Link>, <Link href="/aaa">AAA+</Link>, <Link href="/aa">AA</Link>, and <Link href="/budget">Budget</Link>.</p>
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
            <Link href="/high-coastal-visit">High Coastal Brand Visit FAQ</Link>
            <Link href="/cannabis-delivery-lakeshore">Cannabis Delivery on Lakeshore</Link>
            <Link href="/native-cigarettes-lakeshore">Native Cigarettes on Lakeshore</Link>
            <Link href="/nicotine-vape-lakeshore">Nicotine Vape on Lakeshore</Link>
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
            {WEED_DISPENSARY_FAQS.map((item) => (
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
