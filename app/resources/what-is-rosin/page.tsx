import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { jsonLdHtml } from "../../lib/storeIdentity";
import styles from "../resources.module.css";
import article from "./article.module.css";

const TITLE = 'Rosin, Decoded: What "Solventless" Really Means on a Concentrates Menu';
const CANONICAL = "https://www.highcoastalcannabis.com/resources/what-is-rosin";
const DESCRIPTION =
  "Rosin names a real, specific process: squeeze cannabis with heat and pressure until the resin comes out, and use no solvent at all.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  mainEntityOfPage: CANONICAL,
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  author: { "@type": "Organization", name: "High Coastal Cannabis" },
  publisher: { "@type": "Organization", name: "High Coastal Cannabis" },
};

export default function WhatIsRosinPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(schema) }} />
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <h1>{TITLE}</h1>
          <div className={styles.intro}>
            <p>Last checked: October 21, 2026</p>
            <p>
              Some words on a concentrates menu are pure hype. Rosin isn&apos;t one of them. It names a real, specific process: squeeze cannabis with heat and pressure until the resin comes out, and use no solvent at all. That&apos;s where the word &quot;solventless&quot; comes from. Here&apos;s what rosin is, how the live version differs, and what a Canadian label will and won&apos;t tell you. For adults 19 and over.
            </p>
            <p>One thing up front: this is an explainer, not a stock list, and it&apos;s not a how-to.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.body} ${article.prose}`}>
        <article className={styles.section}>
          <h2>Part 1: Rosin, defined</h2>
          <p>Rosin is a cannabis concentrate made by pressing. Starting material goes between heated plates, pressure is applied, and the sticky resin is pushed out and collected. No butane, no propane, no ethanol wash. Heat and force do the work.</p>
          <p>What goes into the press decides what kind of rosin comes out:</p>
          <ul>
            <li><strong>Flower rosin</strong> is pressed straight from dried flower.</li>
            <li><strong>Hash rosin</strong> is pressed from hash, meaning resin glands that were separated from the plant first (for example, ice-water hash or dry-sifted kief).</li>
          </ul>
          <p>Same method, different starting point. You&apos;ll see both terms on menus.</p>
        </article>

        <article className={styles.section}>
          <h2>Part 2: What &quot;solventless&quot; means, and why the law cares</h2>
          <p>&quot;Solventless&quot; is a process word. It tells you no chemical solvent was used to pull the resin out.</p>
          <p>That distinction lines up with a real legal line. Canada&apos;s Cannabis Act prohibits altering cannabis with an organic solvent unless authorized, and it defines &quot;organic solvent&quot; as an organic compound that is explosive or highly or extremely flammable. It names examples: petroleum naphtha, butane, isobutane, propane and propylene. Those are the substances the Act is worried about. Rosin&apos;s selling point is that it skips that whole category.</p>
          <p>Here&apos;s what &quot;solventless&quot; does <strong>not</strong> mean: safer, cleaner, purer or stronger. It&apos;s a description of how something was made, not a promise about anything else.</p>
        </article>

        <article className={styles.section}>
          <h2>Part 3: What is live rosin?</h2>
          <p>&quot;Live&quot; is about the starting material, not the press. Live rosin starts with cannabis that was frozen fresh after harvest instead of being dried and cured first. That material is usually turned into ice-water hash, and the hash is then pressed.</p>
          <p>So:</p>
          <div className={article.tableWrap}>
            <table className={article.table}>
              <thead>
                <tr>
                  <th>Term on the menu</th>
                  <th>Starting material</th>
                  <th>Solvent used?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Flower rosin</td>
                  <td>Dried flower</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Hash rosin</td>
                  <td>Hash or kief</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Live rosin</td>
                  <td>Hash made from fresh-frozen cannabis</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>No government page defines &quot;live rosin&quot;. It&apos;s an industry term, and the table above is what it describes. It says nothing about strength or quality.</p>
        </article>

        <article className={styles.section}>
          <h2>Part 4: Rosin vs resin, one letter apart</h2>
          <p>Easy to mix up. &quot;Resin&quot; in concentrate names usually means a solvent was used, typically a hydrocarbon such as butane. &quot;Live resin&quot; applies that solvent process to fresh-frozen plant material. Rosin, live or not, is pressed without solvent. That one letter carries a lot.</p>
        </article>

        <article className={styles.section}>
          <h2>Part 5: How rosin shows up on a Canadian label</h2>
          <p>The Cannabis Regulations define a cannabis extract as a substance produced by putting cannabis through extraction processing. Health Canada&apos;s label guide lists rosin right alongside kief, hash and shatter as a cannabis extract, and its licensing guidance counts heat-and-pressure processing to make rosin as extraction. So legal rosin sits in the class the federal schedule calls &quot;cannabis extracts&quot;.</p>
          <p>Every cannabis label has to show the class, a brand name, a lot number, recommended storage conditions and the packaging date, plus the child warning, a health warning and, for products with THC, the standardized cannabis symbol. Section 132.12 adds lines for an extract sold by weight:</p>
          <ul>
            <li>the <strong>net weight</strong> of the extract, in grams,</li>
            <li><strong>Total THC</strong> and <strong>Total CBD</strong>, in milligrams per gram,</li>
            <li>a <strong>list of ingredients</strong> and any food allergen,</li>
            <li>the product&apos;s <strong>identity</strong>, by its common name or its function,</li>
            <li>its <strong>intended use</strong>.</li>
          </ul>
          <p>Read the identity line and the ingredients list. That&apos;s where you&apos;ll learn what the product actually is. No required line says &quot;pressed&quot; or &quot;solventless&quot;, so don&apos;t expect the label to confirm the process unless the product&apos;s name or description does.</p>
        </article>

        <article className={styles.section}>
          <h2>Part 6: Rosin and the 30 g limit</h2>
          <p>Ontario caps public possession at 30 grams of dried cannabis or its equivalent. For concentrates, solid or liquid, 0.25 g counts as 1 g of dried cannabis. Do the math and 7.5 g of rosin hits the 30 g ceiling all by itself. Ontario also caps extracts at 1,000 mg of THC per package.</p>
        </article>

        <article className={styles.section}>
          <h2>Quick answers</h2>
          <p><strong>Is rosin legal in Ontario?</strong></p>
          <p>Cannabis extracts are a legal class for adults 19 and over, sold in packaged, labelled form.</p>
          <p><strong>Is live rosin a different product class?</strong></p>
          <p>No. &quot;Live&quot; describes the starting material. The class on the label is still a cannabis extract.</p>
          <p><strong>Does &quot;solventless&quot; mean it&apos;s better for you?</strong></p>
          <p>No. It describes the method only. We don&apos;t make health or quality claims, and neither should a menu.</p>
          <p><strong>Does High Coastal Cannabis carry rosin?</strong></p>
          <p>Menus change, so check the current concentrates listings or ask in store. This page explains the word. It doesn&apos;t promise a product.</p>
        </article>

        <article className={styles.section}>
          <h2>High Coastal Cannabis on Lakeshore Rd W</h2>
          <p>
            High Coastal Cannabis is at 1720 Lakeshore Rd W, Mississauga. Come in at 19+, ask what&apos;s on the concentrates menu, and now you&apos;ll know exactly what the word rosin is telling you. New to the menu words? Start with our <Link href="/resources/cannabis-101">Cannabis 101 guide</Link>.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
