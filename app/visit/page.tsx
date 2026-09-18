import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  STORE_IDENTITY as nap,
  VISIT_FAQS,
  jsonLdHtml,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  visitPageJsonLd,
} from "../lib/storeIdentity";
import styles from "./visit.module.css";

const canonical = `${nap.websiteUrl}${nap.visitPath}`;
const title = "Lakeshore Mississauga Dispensary Visit Guide — Port Credit / Clarkson Corridor";
const description =
  "Visit High Coastal Cannabis at 1720 Lakeshore Rd W, Mississauga — the 24-hour dispensary on the Port Credit / Clarkson Lakeshore corridor. Call +1 (289) 815-5222. Adults 19+.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
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

export default function VisitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(visitPageJsonLd()) }} />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Visit guide · Port Credit / Clarkson / Lakeshore West · Adults 19+</p>
          <h1>Lakeshore Mississauga Dispensary Visit Guide — Port Credit / Clarkson Corridor</h1>
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
            This is the arrival guide for the High Coastal Cannabis walk-in on Lakeshore Rd W. The{" "}
            <Link href="/">homepage</Link> is the name, address, and phone hub. The{" "}
            <Link href={nap.landingPath}>Mississauga dispensary page</Link> is the store landing. Use this page when you
            need the pin, corridor context, hours, and walk-in checklist.
          </p>
          <div className={styles.actions}>
            <a href={`tel:${nap.phoneIntl}`}>Call {nap.phoneDisplay}</a>
            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps directions
            </a>
            <Link href="/">Homepage NAP</Link>
          </div>
        </section>

        <section>
          <h2>1720 Lakeshore Rd W — how to find us</h2>
          <p>
            High Coastal Cannabis is the Mississauga dispensary at <strong>{nap.streetAddress}</strong>, Mississauga,{" "}
            {nap.addressRegion} {nap.postalCode}. The useful intersection is <strong>{nap.intersection}</strong> in the{" "}
            {nap.neighborhood} neighbourhood.
          </p>
          <p>
            Look for the plaza storefront on Lakeshore Road West. If a map pin shows a different Lakeshore number, you
            are not at this walk-in. Confirm the address on the <Link href="/">homepage</Link> or call{" "}
            <a href={`tel:${nap.phoneIntl}`}>
              <strong>{nap.phoneDisplay}</strong>
            </a>{" "}
            before you leave.
          </p>
        </section>

        <section>
          <h2>Port Credit / Clarkson / Lakeshore West context</h2>
          <p>
            This is a Lakeshore West corridor store, not a Square One mall counter. Port Credit sits east along
            Lakeshore Road. Clarkson is the immediate neighbourhood around the pin. Lorne Park is the next inland
            reference.
          </p>
          <p>
            From Port Credit, stay on Lakeshore Rd W heading west until you reach the Clarkson Rd N area and look for
            1720. From Clarkson or Lorne Park, treat Lakeshore Rd W as the destination road. Clarkson GO and local
            MiWay routes serve the same shoreline corridor; check live trip times if you are arriving late.
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
          <h2>Hours — open 24 hours</h2>
          <p>
            High Coastal Cannabis is <strong>open 24 hours</strong> a day, seven days a week. That is the listed
            schedule: there is no last-call close on this Lakeshore walk-in. Overnight visitors use the same door at{" "}
            {nap.streetAddress}.
          </p>
          <p>
            A 24 hour dispensary in Mississauga still requires adult ID. If you are coming after midnight for one
            listed item, call <a href={`tel:${nap.phoneIntl}`}>{nap.phoneDisplay}</a> first.
          </p>
        </section>

        <section>
          <h2>Walk-in checklist</h2>
          <ul className={styles.checklist}>
            <li>
              <strong>ID:</strong> Adults 19+ only. Bring valid government photo ID for every visit, including late
              night.
            </li>
            <li>
              <strong>Parking:</strong> Plaza parking is available for customers. Free evening street parking is often
              available on Lakeshore Rd W — read the posted signs.
            </li>
            <li>
              <strong>Appointment:</strong> None required. Walk in any hour.
            </li>
            <li>
              <strong>Payment:</strong> Debit and cash are accepted.
            </li>
            <li>
              <strong>Specific items:</strong> Call {nap.phoneDisplay} when one pack or brand is the reason for the
              trip. Posted names and stock move.
            </li>
          </ul>
        </section>

        <section>
          <h2>Current brand name</h2>
          <p>
            The name on the door is <strong>High Coastal Cannabis</strong>. That is the current store identity for this
            Lakeshore Rd W pin. Use the homepage for the official name, address, phone, and hours. The business website
            is the High Coastal Cannabis homepage — not a city landing URL.
          </p>
          <p>
            If an older listing or search result pointed you at this same Mississauga address, treat High Coastal
            Cannabis as the store you are visiting. This page does not make cultural, Nation, reserve, or medical
            claims. It is a retail walk-in guide.
          </p>
        </section>

        <section>
          <h2>Map and directions</h2>
          <div className={styles.map}>
            <iframe
              title="Map of High Coastal Cannabis at 1720 Lakeshore Rd W, Mississauga"
              src={mapsEmbedUrl}
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p>
            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              Open Google Maps directions to {nap.streetAddress}
            </a>
            .
          </p>
        </section>

        <section>
          <h2>After you have the pin</h2>
          <p>
            Browse the live menu from the <Link href="/">homepage</Link>, or start with{" "}
            <Link href="/exotic-weed">Exotic Weed</Link> if that is the collection you already want. For menu
            terminology on a first store visit, use the{" "}
            <Link href="/resources/lakeshore-clarkson-first-visit-guide">Lakeshore first-visit shopping guide</Link>.
            The category landing remains{" "}
            <Link href={nap.landingPath}>Weed Dispensary in Mississauga</Link>.
          </p>
        </section>

        <section>
          <h2>Mississauga dispensary near me — FAQ</h2>
          <div className={styles.faqList}>
            {VISIT_FAQS.map((faq) => (
              <article key={faq.question} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{withPhone(faq.answer)}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
