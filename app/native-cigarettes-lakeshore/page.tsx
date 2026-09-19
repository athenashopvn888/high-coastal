import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SccHubNav } from "../components/SccHubNav";
import {
  NATIVE_CIGARETTE_FAQS,
  STORE_IDENTITY as nap,
  jsonLdHtml,
  mapsDirectionsUrl,
  nativeCigarettesPageJsonLd,
} from "../lib/storeIdentity";
import styles from "../visit/visit.module.css";

const canonical = `${nap.websiteUrl}${nap.nativeCigarettesPath}`;
const title = "Native Cigarettes on Lakeshore — Clarkson / Port Credit";
const description =
  "Adults 19+: Native cigarettes at High Coastal Cannabis, 1720 Lakeshore Rd W, Mississauga, ON L5J 1J5. Lakeshore / Clarkson / Port Credit walk-in. Call +1 (289) 815-5222. Retail counter only.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "native cigarettes lakeshore",
    "native cigarettes clarkson",
    "native cigarettes port credit",
    "native cigarettes mississauga lakeshore",
    "high coastal cannabis cigarettes",
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

export default function NativeCigarettesLakeshorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(nativeCigarettesPageJsonLd()) }} />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Native cigarettes · Lakeshore / Clarkson / Port Credit · Adults 19+</p>
          <h1>Native Cigarettes on Lakeshore — Clarkson / Port Credit</h1>
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
            This is the neighbourhood Native cigarettes page for the High Coastal Cannabis walk-in on Lakeshore Rd W.
            The <Link href="/">homepage</Link> is the name, address, and phone hub. The{" "}
            <Link href={nap.cigarettesMenuPath}>cigarette category</Link> holds current brand names. This page is retail
            walk-in copy only.
          </p>
          <div className={styles.actions}>
            <Link href={nap.cigarettesMenuPath}>Browse cigarette menu</Link>
            <a href={`tel:${nap.phoneIntl}`}>Call {nap.phoneDisplay}</a>
            <Link href={nap.visitPath}>Lakeshore visit guide</Link>
            <Link href={nap.hoursPath}>24-hour open-now FAQ</Link>
          </div>
          <SccHubNav current={nap.nativeCigarettesPath} />
        </section>

        <section>
          <h2>Retail Lakeshore walk-in — not a Nation or reserve claim</h2>
          <p>
            High Coastal Cannabis sells Native cigarettes at <strong>{nap.streetAddress}</strong>, Mississauga,{" "}
            {nap.addressRegion} {nap.postalCode}, near <strong>{nap.intersection}</strong> in the {nap.neighborhood}{" "}
            neighbourhood.
          </p>
          <p>
            “Native cigarettes” here is the shopper phrase for the tobacco cartons listed on this store’s cigarette
            menu. This page does not claim Indigenous Nation affiliation, reserve retail, healing, or medical use. Staff
            sell the posted menu to adults 19+. They do not give medical advice.
          </p>
        </section>

        <section>
          <h2>Brand names shown on the cigarette menu</h2>
          <p>
            Carton-style listings around <strong>$25</strong> may include Canadian Lights, Canadian Full, Putters,
            Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, and Canadian
            Classics Silver. Those names are a starting list, not a live stock sheet.
          </p>
          <p>
            Open the <Link href={nap.cigarettesMenuPath}>cigarette category</Link> for what is posted today. Call{" "}
            <a href={`tel:${nap.phoneIntl}`}>
              <strong>{nap.phoneDisplay}</strong>
            </a>{" "}
            when one carton is the reason for the trip. Nicotine pouch tins, when listed, stay on that same cigarette
            menu — this page does not invent a separate pouches landing.
          </p>
          <p>
            Need the longer brand-preview resource? Use{" "}
            <Link href="/info/native-cigarettes-mississauga">Native Cigarettes Mississauga</Link> or the{" "}
            <Link href="/resources/native-smokes/native-cigarettes-guide">Native cigarettes guide</Link>. Keep cannabis
            flower, THC vape, and <Link href={nap.nicotineVapePath}>nicotine vape on Lakeshore</Link> in their own
            categories.
          </p>
        </section>

        <section>
          <h2>Lakeshore / Clarkson / Port Credit pin</h2>
          <p>
            This counter is the shoreline walk-in, <strong>not a Square One mall pin</strong>. Port Credit sits east
            along Lakeshore Rd W. Clarkson is the neighbourhood around 1720. If a map shows a different Lakeshore
            number, you are not at this store. Confirm the address on the <Link href="/">homepage</Link>.
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
            The High Coastal door is <strong>open 24 hours</strong>. Adults 19+ can walk in after midnight for listed
            cigarettes. Overnight stock still changes. Use the{" "}
            <Link href={nap.hoursPath}>24-hour Lakeshore open-now FAQ</Link> for late arrival and ID.
          </p>
          <p>
            Cannabis delivery is a <strong>separate service</strong>. This site does not publish a 24/7 delivery clock.
            If you need a drop instead of a carton walk-in, use{" "}
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
          <h2>Native cigarettes FAQ for Lakeshore</h2>
          <div className={styles.faqList}>
            {NATIVE_CIGARETTE_FAQS.map((faq) => (
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
            <Link href={nap.nicotineVapePath}>nicotine vape on Lakeshore</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
