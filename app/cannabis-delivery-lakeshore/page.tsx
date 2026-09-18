import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SccHubNav } from "../components/SccHubNav";
import {
  DELIVERY_FAQS,
  STORE_IDENTITY as nap,
  deliveryPageJsonLd,
  jsonLdHtml,
  mapsDirectionsUrl,
} from "../lib/storeIdentity";
import styles from "../visit/visit.module.css";

const canonical = `${nap.websiteUrl}${nap.deliveryPath}`;
const title = "Cannabis Delivery on Lakeshore — Clarkson / Port Credit";
const description =
  "High Coastal Cannabis delivers to the Lakeshore / Clarkson / Port Credit corridor from 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5. $60 product minimum. Dispatcher confirms live delivery hours — not 24/7 walk-in. Call +1 (289) 815-5222. Adults 19+.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "cannabis delivery lakeshore",
    "weed delivery clarkson",
    "cannabis delivery port credit",
    "cannabis delivery mississauga lakeshore",
    "high coastal cannabis delivery",
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

export default function LakeshoreDeliveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(deliveryPageJsonLd()) }} />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Cannabis delivery · Lakeshore / Clarkson / Port Credit · Adults 19+</p>
          <h1>Cannabis Delivery on Lakeshore — Clarkson / Port Credit</h1>
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
            This is the neighbourhood delivery page for High Coastal Cannabis on Lakeshore Rd W. Walk-in at this pin is{" "}
            <strong>open 24 hours</strong>. Cannabis delivery is a <strong>separate service</strong>: the dispatcher
            confirms live availability, your address, and the $60 product minimum. The{" "}
            <Link href="/">homepage</Link> is the name, address, and phone hub. The{" "}
            <Link href={nap.deliveryMenuPath}>delivery menu</Link> is where LIVE ORDER starts.
          </p>
          <div className={styles.actions}>
            <Link href={`${nap.deliveryMenuPath}?liveOrder=1`}>Start LIVE ORDER</Link>
            <Link href={nap.deliveryMenuPath}>Browse delivery menu</Link>
            <a href={`tel:${nap.phoneIntl}`}>Call {nap.phoneDisplay}</a>
            <Link href={nap.visitPath}>Lakeshore visit guide</Link>
          </div>
          <SccHubNav current={nap.deliveryPath} />
        </section>

        <section>
          <h2>Delivery area — Lakeshore / Clarkson / Port Credit</h2>
          <p>
            High Coastal Cannabis packs delivery from <strong>{nap.streetAddress}</strong>, Mississauga,{" "}
            {nap.addressRegion} {nap.postalCode}, near <strong>{nap.intersection}</strong> in the {nap.neighborhood}{" "}
            neighbourhood.
          </p>
          <p>
            This page is for the Lakeshore West corridor: Clarkson, Port Credit, Lorne Park, and nearby southwest
            Mississauga addresses the dispatcher accepts. It is <strong>not a Square One mall pin</strong>. If a map
            shows a different Lakeshore number, you are not ordering from this store. Confirm the address on the{" "}
            <Link href="/">homepage</Link> before you send an order.
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
          <h2>Delivery hours are not 24-hour walk-in hours</h2>
          <p>
            The High Coastal Cannabis door at {nap.streetAddress} is a <strong>24 hour walk-in</strong>. That schedule
            does not mean delivery runs all night. This site does not publish a 24/7 delivery clock.
          </p>
          <p>
            Site truth for delivery: browse the <Link href={nap.deliveryMenuPath}>delivery menu</Link>, then use LIVE
            ORDER. Web Chat shows whether a dispatcher can take a new delivery order right now. The dispatcher confirms
            the window, the address, and next steps before an order is accepted. If chat is paused, wait and check
            again — do not assume overnight delivery because the storefront is open.
          </p>
          <p>
            Need the walk-in door after midnight instead? Use the{" "}
            <Link href={nap.hoursPath}>24-hour Mississauga dispensary FAQ</Link> and the{" "}
            <Link href={nap.visitPath}>Lakeshore visit guide</Link>.
          </p>
        </section>

        <section>
          <h2>How to order cannabis delivery</h2>
          <ol className={styles.checklist}>
            <li>
              <strong>Browse the menu.</strong> Open the <Link href={nap.deliveryMenuPath}>High Coastal delivery menu</Link>{" "}
              and note product names and weights. The listed product minimum is <strong>$60</strong>.
            </li>
            <li>
              <strong>Start LIVE ORDER.</strong> Use{" "}
              <Link href={`${nap.deliveryMenuPath}?liveOrder=1`}>LIVE ORDER</Link> to open Web Chat with the High Coastal
              dispatcher.
            </li>
            <li>
              <strong>Verify if you are new.</strong> New customers complete the private selfie-with-ID step in chat.
              Adults 19+ only.
            </li>
            <li>
              <strong>Confirm the drop.</strong> Send your Lakeshore / Clarkson / Port Credit address. The dispatcher
              confirms whether it is in range, current stock, and the delivery window.
            </li>
          </ol>
          <p>
            Flower on the walk-in floor is grouped as <Link href="/exotic">Exotic Weed</Link>,{" "}
            <Link href="/premium">Premium Weed</Link>, <Link href="/aaa">AAA+ Weed</Link>, <Link href="/aa">AA Weed</Link>,
            and <Link href="/budget">Budget Weed</Link>. Delivery catalog names can differ; the dispatcher confirms
            what can go on the current order.
          </p>
        </section>

        <section>
          <h2>Same Lakeshore pin — walk-in still open 24 hours</h2>
          <p>
            Delivery does not replace the storefront. High Coastal Cannabis remains a 24 hour dispensary at{" "}
            <strong>{nap.addressDisplay}</strong>. Call{" "}
            <a href={`tel:${nap.phoneIntl}`}>
              <strong>{nap.phoneDisplay}</strong>
            </a>{" "}
            if one listed item is the reason for a trip. Parking and corridor notes live on the visit guide, not on this
            delivery page.
          </p>
          <p>
            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps directions to {nap.streetAddress}
            </a>
            . The Mississauga weed hub is{" "}
            <Link href={nap.landingPath}>Weed Dispensary in Mississauga</Link>. Brand-name clarifiers stay on the{" "}
            <Link href={nap.brandVisitPath}>High Coastal brand visit FAQ</Link>.
          </p>
        </section>

        <section>
          <h2>Cannabis delivery FAQ for Lakeshore</h2>
          <div className={styles.faqList}>
            {DELIVERY_FAQS.map((faq) => (
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
            The <Link href="/">homepage</Link> remains the website URL for this store. Plan a walk-in with the{" "}
            <Link href={nap.visitPath}>Lakeshore visit guide</Link>. For open-now hours, use the{" "}
            <Link href={nap.hoursPath}>24-hour open-now FAQ</Link>. Shop the live floor collections from{" "}
            <Link href="/exotic">Exotic</Link>, <Link href="/premium">Premium</Link>, <Link href="/aaa">AAA+</Link>,{" "}
            <Link href="/aa">AA</Link>, and <Link href="/budget">Budget</Link>, or start the order on the{" "}
            <Link href={nap.deliveryMenuPath}>delivery menu</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
