import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SccHubNav } from "../components/SccHubNav";
import {
  NICOTINE_VAPE_FAQS,
  STORE_IDENTITY as nap,
  jsonLdHtml,
  mapsDirectionsUrl,
  nicotineVapePageJsonLd,
} from "../lib/storeIdentity";
import styles from "../visit/visit.module.css";

const canonical = `${nap.websiteUrl}${nap.nicotineVapePath}`;
const title = "Nicotine Vape on Lakeshore — Clarkson / Port Credit";
const description =
  "Adults 19+: nicotine vape at High Coastal Cannabis, 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5. Lakeshore / Clarkson / Port Credit walk-in. Nicotine is addictive. Call +1 (289) 815-5222.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "nicotine vape lakeshore",
    "nicotine vape clarkson",
    "nicotine vape port credit",
    "nicotine vapes mississauga lakeshore",
    "high coastal cannabis nicotine vape",
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

export default function NicotineVapeLakeshorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(nicotineVapePageJsonLd()) }} />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Nicotine vape · Lakeshore / Clarkson / Port Credit · Adults 19+</p>
          <h1>Nicotine Vape on Lakeshore — Clarkson / Port Credit</h1>
          <p className={`${styles.nap} nap`}>
            <strong>{nap.name}</strong>
            <br />
            {nap.addressDisplay}
            <br />
            <a href={`tel:${nap.phoneIntl}`}>{nap.phoneDisplay}</a>
            <span aria-hidden="true"> · </span>
            <a href={nap.websiteUrl}>www.highcoastalcannabis.com</a>
          </p>
          <p className={styles.lede}>
            This is the neighbourhood nicotine vape page for the High Coastal Cannabis walk-in on Lakeshore Rd W.
            Nicotine is addictive. The <Link href="/">homepage</Link> is the name, address, and phone hub. The{" "}
            <Link href={nap.nicotineVapeMenuPath}>nicotine vape category</Link> holds current product pages. THC vape
            stays in a separate category.
          </p>
          <div className={styles.actions}>
            <Link href={nap.nicotineVapeMenuPath}>Browse nicotine vape</Link>
            <a href={`tel:${nap.phoneIntl}`}>Call {nap.phoneDisplay}</a>
            <Link href={nap.visitPath}>Lakeshore visit guide</Link>
            <Link href={nap.hoursPath}>24-hour open-now FAQ</Link>
          </div>
          <SccHubNav current={nap.nicotineVapePath} />
        </section>

        <section>
          <h2>Sold at the Lakeshore walk-in — kept off the THC vape shelf</h2>
          <p>
            High Coastal Cannabis lists nicotine vape at <strong>{nap.streetAddress}</strong>, Mississauga,{" "}
            {nap.addressRegion} {nap.postalCode}, near <strong>{nap.intersection}</strong> in the {nap.neighborhood}{" "}
            neighbourhood. Adults 19+ only.
          </p>
          <p>
            Nicotine vape is a tobacco-nicotine category. It is not cannabis flower and it is not THC vape. Do not read
            nicotine strength or puff-count notes as duration, performance, or medical claims.
          </p>
        </section>

        <section>
          <h2>How to compare listed nicotine vapes</h2>
          <p>
            Start on the <Link href={nap.nicotineVapeMenuPath}>nicotine vape category</Link>. The Mississauga nicotine
            vape resource highlights a small live-checked set — Geek, NEXA, and OVNS pages — as a reference, not the
            complete selection. Use each product page for the name attached to that listing.
          </p>
          <p>
            Call{" "}
            <a href={`tel:${nap.phoneIntl}`}>
              <strong>{nap.phoneDisplay}</strong>
            </a>{" "}
            when one device is the reason for the trip. For the five-card evidence set, open{" "}
            <Link href="/info/nicotine-vapes-mississauga">Nicotine Vapes Mississauga</Link>. Native cigarettes stay on{" "}
            <Link href={nap.nativeCigarettesPath}>Native cigarettes on Lakeshore</Link>. Nicotine pouch tins, when
            listed, stay on the <Link href={nap.cigarettesMenuPath}>cigarette menu</Link>.
          </p>
        </section>

        <section>
          <h2>Lakeshore / Clarkson / Port Credit pin</h2>
          <p>
            This is the shoreline walk-in, <strong>not a Square One mall pin</strong>. From Port Credit, stay west on
            Lakeshore Rd W to 1720 near Clarkson Rd N. If a map shows a different Lakeshore number, you are not at this
            store. Confirm the address on the <Link href="/">homepage</Link>.
          </p>
          <div className={styles.areaRow}>
            {nap.doorTestAreas.map((area) => (
              <span className={styles.areaChip} key={area}>
                {area}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2>24-hour walk-in — delivery stays separate</h2>
          <p>
            The High Coastal door is <strong>open 24 hours</strong>. Overnight nicotine vape stock still changes. Use
            the <Link href={nap.hoursPath}>24-hour Lakeshore open-now FAQ</Link> for late arrival and ID.
          </p>
          <p>
            Cannabis delivery is a <strong>separate service</strong>. This site does not publish a 24/7 delivery clock.
            Need a drop instead of a walk-in? Open{" "}
            <Link href={nap.deliveryPath}>cannabis delivery on Lakeshore</Link>.
          </p>
          <p>
            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps directions to {nap.streetAddress}
            </a>
            .
          </p>
        </section>

        <section>
          <h2>Nicotine vape FAQ for Lakeshore</h2>
          <div className={styles.faqList}>
            {NICOTINE_VAPE_FAQS.map((faq) => (
              <article key={faq.question} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{withPhone(faq.answer)}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>Homepage, visit, and flower tiers</h2>
          <p>
            The <Link href="/">homepage</Link> remains the website URL for this store. Plan the corridor with the{" "}
            <Link href={nap.visitPath}>Lakeshore visit guide</Link>. Brand-name clarifiers stay on the{" "}
            <Link href={nap.brandVisitPath}>High Coastal brand visit FAQ</Link>. City flower context is{" "}
            <Link href={nap.landingPath}>Weed Dispensary in Mississauga</Link>. Shop{" "}
            <Link href="/exotic">Exotic</Link>, <Link href="/premium">Premium</Link>, <Link href="/aaa">AAA+</Link>,{" "}
            <Link href="/aa">AA</Link>, and <Link href="/budget">Budget</Link> flower, or compare{" "}
            <Link href={nap.nativeCigarettesPath}>Native cigarettes on Lakeshore</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
