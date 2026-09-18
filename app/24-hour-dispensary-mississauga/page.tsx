import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SccHubNav } from "../components/SccHubNav";
import {
  OPEN_NOW_FAQS,
  STORE_IDENTITY as nap,
  jsonLdHtml,
  mapsDirectionsUrl,
  openNowPageJsonLd,
} from "../lib/storeIdentity";
import styles from "../visit/visit.module.css";

const canonical = `${nap.websiteUrl}${nap.hoursPath}`;
const title = "24-Hour Mississauga Dispensary on Lakeshore — Open-Now FAQ";
const description =
  "Open now 24 hours at High Coastal Cannabis, 1720 Lakeshore Rd W, Mississauga. 24 hour and 24/7 dispensary FAQ for Lakeshore late arrival and ID. Call +1 (289) 815-5222. Adults 19+.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "24 hour dispensary mississauga",
    "24/7 dispensary mississauga",
    "24 hour dispensary near me",
    "dispensary near me",
    "high coastal cannabis",
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

export default function OpenNowFaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(openNowPageJsonLd()) }} />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Open now · 24 hours · Lakeshore Mississauga · Adults 19+</p>
          <h1>24-Hour Mississauga Dispensary on Lakeshore — Open-Now FAQ</h1>
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
            This FAQ answers whether High Coastal Cannabis is open now, how late arrival works on Lakeshore Rd W, and
            what ID you need. The <Link href="/">homepage</Link> is the name, address, and phone hub. The{" "}
            <Link href={nap.landingPath}>Mississauga dispensary page</Link> is the store landing. Use the{" "}
            <Link href={nap.visitPath}>Lakeshore visit guide</Link> for the pin and corridor walk-in notes.
          </p>
          <div className={styles.actions}>
            <a href={`tel:${nap.phoneIntl}`}>Call {nap.phoneDisplay}</a>
            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps directions
            </a>
            <Link href="/">Homepage NAP</Link>
            <Link href={nap.visitPath}>Lakeshore visit guide</Link>
          </div>
          <SccHubNav current={nap.hoursPath} />
        </section>

        <section>
          <h2>Hours</h2>
          <p>
            High Coastal Cannabis is a <strong>24 hour dispensary in Mississauga</strong>. Listed hours are{" "}
            <strong>open 24 hours</strong>, seven days a week, including after midnight. There is no last-call close on
            this Lakeshore walk-in.
          </p>
          <p>
            If you searched for a 24/7 dispensary in Mississauga or a 24 hour dispensary near me, this is the Lakeshore
            Rd W door: <strong>{nap.addressDisplay}</strong>. Overnight shoppers use the same storefront as daytime
            visits. Posted menu names can still change; the 24-hour schedule does not freeze a SKU.
          </p>
          <p>
            If one listed item is the reason you are coming after midnight, call{" "}
            <a href={`tel:${nap.phoneIntl}`}>
              <strong>{nap.phoneDisplay}</strong>
            </a>{" "}
            first.
          </p>
        </section>

        <section>
          <h2>Lakeshore late arrival</h2>
          <p>
            The pin is <strong>{nap.streetAddress}</strong> at <strong>{nap.intersection}</strong> in the{" "}
            {nap.neighborhood} neighbourhood. Look for the plaza storefront on Lakeshore Road West. If a map shows a
            different Lakeshore number, you are not at this walk-in.
          </p>
          <p>
            From Port Credit, stay on Lakeshore Rd W heading west until Clarkson Rd N and look for 1720. From Clarkson
            or Lorne Park, treat Lakeshore Rd W as the destination road. Plaza parking is available for customers.
            Evening street parking is often available — read the posted signs.
          </p>
          <p>
            Late MiWay and GO times stretch, so check live trip information before you leave. Confirm the official
            name, address, and phone on the <Link href="/">homepage</Link> if an older listing sent you here.
          </p>
        </section>

        <section>
          <h2>ID</h2>
          <p>
            High Coastal Cannabis is for <strong>adults 19+</strong> only. Bring valid government photo ID for every
            visit, including late night. That rule does not loosen after midnight.
          </p>
          <p>
            Do not send anyone under 19 to the door. Treat a 2 a.m. walk-in like a noon visit: show ID, stay on the
            posted menu, and ask staff when a current pack or price matters. Debit and cash are accepted. No appointment
            is required.
          </p>
        </section>

        <section>
          <h2>Open-now FAQ</h2>
          <div className={styles.faqList}>
            {OPEN_NOW_FAQS.map((faq) => (
              <article key={faq.question} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{withPhone(faq.answer)}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>Lakeshore visit guide</h2>
          <p>
            Need the Port Credit / Clarkson corridor pin, parking notes, and walk-in checklist in one article? Open the{" "}
            <Link href={nap.visitPath}>Lakeshore Mississauga visit guide</Link>. Confirming the current High Coastal
            name versus older search phrases? Use the <Link href="/high-coastal-visit">High Coastal brand visit FAQ</Link>.
            The Mississauga store landing is{" "}
            <Link href={nap.landingPath}>Weed Dispensary in Mississauga</Link>. Shop{" "}
            <Link href="/exotic">Exotic</Link>, <Link href="/premium">Premium</Link>, <Link href="/aaa">AAA+</Link>,{" "}
            <Link href="/aa">AA</Link>, and <Link href="/budget">Budget</Link> flower. The{" "}
            <Link href="/">homepage</Link> remains the website URL for this store — not this FAQ and not the city
            landing.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
