import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SccHubNav } from "../components/SccHubNav";
import {
  BRAND_VISIT_FAQS,
  STORE_IDENTITY as nap,
  brandVisitPageJsonLd,
  jsonLdHtml,
  mapsDirectionsUrl,
} from "../lib/storeIdentity";
import styles from "../visit/visit.module.css";

const canonical = `${nap.websiteUrl}${nap.brandVisitPath}`;
const title = "High Coastal Brand Visit FAQ — Lakeshore Pin + Existing Brand Queries";
const description =
  "High Coastal dispensary FAQ for the Lakeshore pin at 1720 Lakeshore Rd W, Mississauga. High Coastal Cannabis is the current name. Call +1 (289) 815-5222. Adults 19+.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "high coastal dispensary",
    "high coastal cannabis",
    "six nations medicine",
    "6ix nations",
    "six nations dispensary",
  ],
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: nap.name,
    locale: "en_CA",
    type: "article",
  },
};

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

export default function BrandVisitFaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(brandVisitPageJsonLd()) }} />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Brand visit FAQ · Lakeshore pin · Adults 19+</p>
          <h1>High Coastal Brand Visit FAQ — Lakeshore Pin + Existing Brand Queries</h1>
          <p className={`${styles.nap} nap`}>
            <strong>{nap.name}</strong>
            <br />
            {nap.addressDisplay}
            <br />
            <a href={`tel:${nap.phoneIntl}`}>{nap.phoneDisplay}</a>
            <span aria-hidden="true"> · </span>
            {nap.hoursDisplay}
          </p>
          <p className={styles.lede}>
            This FAQ is for people searching a High Coastal dispensary or High Coastal Cannabis store and landing on
            this Lakeshore walk-in. The <Link href="/">homepage</Link> is the name, address, and phone hub. The{" "}
            <Link href={nap.landingPath}>Mississauga dispensary page</Link> is the store landing. Use the{" "}
            <Link href={nap.visitPath}>Lakeshore visit guide</Link> for corridor arrival notes.
          </p>
          <div className={styles.actions}>
            <a href={`tel:${nap.phoneIntl}`}>Call {nap.phoneDisplay}</a>
            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps directions
            </a>
            <Link href="/">Homepage NAP</Link>
            <Link href={nap.landingPath}>Mississauga dispensary</Link>
          </div>
          <SccHubNav current={nap.brandVisitPath} />
        </section>

        <section>
          <h2>Brand names people search</h2>
          <p>
            The official name of this Lakeshore walk-in is <strong>High Coastal Cannabis</strong>. Shoppers looking for
            a <strong>high coastal dispensary</strong> or <strong>high coastal cannabis</strong> store are looking for
            this pin: {nap.addressDisplay}.
          </p>
          <p>
            Some people also search <strong>six nations medicine</strong>, <strong>6ix nations</strong>, or{" "}
            <strong>six nations dispensary</strong> when they mean this same Mississauga storefront. Those are existing
            demand / people-also-search phrases for this Lakeshore address. They are not the current store name, and
            this page does not revive an old brand as the primary name.
          </p>
          <p>
            This FAQ does not rename Google Business Profile. The name on the door, on the homepage, and in Maps stays{" "}
            <strong>High Coastal Cannabis</strong>.
          </p>
        </section>

        <section>
          <h2>Exact Lakeshore address</h2>
          <p>
            High Coastal Cannabis is at <strong>{nap.addressDisplay}</strong>. The useful intersection is{" "}
            <strong>{nap.intersection}</strong> in the {nap.neighborhood} neighbourhood.
          </p>
          <p>
            Look for the plaza storefront on Lakeshore Road West. If a map pin shows a different Lakeshore number, you
            are not at this walk-in. Confirm the address on the <Link href="/">homepage</Link> or call{" "}
            <a href={`tel:${nap.phoneIntl}`}>
              <strong>{nap.phoneDisplay}</strong>
            </a>{" "}
            before you leave.
          </p>
          <p>
            For Port Credit / Clarkson corridor notes, parking, and the walk-in checklist, use the{" "}
            <Link href={nap.visitPath}>Lakeshore Mississauga visit guide</Link>.
          </p>
        </section>

        <section>
          <h2>Hours</h2>
          <p>
            High Coastal Cannabis is <strong>open 24 hours</strong> a day, seven days a week. Overnight visitors use the
            same door at {nap.streetAddress}. There is no last-call close on this Lakeshore walk-in.
          </p>
          <p>
            A 24-hour High Coastal dispensary still requires adult ID. If you are coming after midnight for one listed
            item, call <a href={`tel:${nap.phoneIntl}`}>{nap.phoneDisplay}</a> first. For open-now hours, late arrival,
            and ID in FAQ form, use the{" "}
            <Link href={nap.hoursPath}>24-hour Mississauga dispensary FAQ</Link>.
          </p>
        </section>

        <section>
          <h2>Retail-only disclaimer</h2>
          <p>
            High Coastal Cannabis is a <strong>retail cannabis dispensary</strong> for adults 19+. This page is visit
            and brand-clarification copy only. It does not make Indigenous, Nation, reserve, healing, or medical
            claims.
          </p>
          <p>
            Staff sell the posted menu — flower, pre-rolls, edibles, vapes, concentrates, and accessories. They do not
            provide medical advice. This site does not invent reviews or star ratings. Confirm current packs and prices
            in store or by phone.
          </p>
        </section>

        <section>
          <h2>FAQ</h2>
          <div className={styles.faqList}>
            {BRAND_VISIT_FAQS.map((faq) => (
              <article key={faq.question} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{withPhone(faq.answer)}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>Homepage and Mississauga landing</h2>
          <p>
            The <Link href="/">homepage</Link> remains the website URL for this store — not this FAQ and not the city
            landing. Browse the Mississauga store page at{" "}
            <Link href={nap.landingPath}>Weed Dispensary in Mississauga</Link>. Need the pin first? Open the{" "}
            <Link href={nap.visitPath}>Lakeshore visit guide</Link>. Flower collections are on{" "}
            <Link href="/exotic">Exotic</Link>, <Link href="/premium">Premium</Link>, <Link href="/aaa">AAA+</Link>,{" "}
            <Link href="/aa">AA</Link>, and <Link href="/budget">Budget</Link>. Ordering to a Lakeshore / Clarkson /
            Port Credit address? Use the <Link href="/cannabis-delivery-lakeshore">cannabis delivery on Lakeshore</Link> page.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
