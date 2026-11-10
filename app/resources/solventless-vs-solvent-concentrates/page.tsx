import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { jsonLdHtml } from "../../lib/storeIdentity";
import styles from "../resources.module.css";
import article from "./article.module.css";

const TITLE = "Solventless vs Solvent Concentrates: What's the Difference?";
const CANONICAL = "https://www.highcoastalcannabis.com/resources/solventless-vs-solvent-concentrates";
const DESCRIPTION =
  "Two concentrates can look almost identical: one made with heat, pressure, ice and water, the other by washing plant material with a solvent.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: "index,follow",
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
  datePublished: "2026-11-10",
  dateModified: "2026-11-10",
  author: { "@type": "Organization", name: "High Coastal Cannabis" },
  publisher: { "@type": "Organization", name: "High Coastal Cannabis" },
};

export default function SolventlessVsSolventConcentratesPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(schema) }} />
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <h1>{TITLE}</h1>
          <div className={styles.intro}>
            <p>Last checked: October 27, 2026</p>
            <p>
              Two concentrates can sit side by side looking almost identical: golden, glossy, sticky. One was made with heat, pressure, ice and water. The other was made by washing plant material with a solvent. That&apos;s the solventless vs solvent split, and it&apos;s the first question to ask when concentrate names start piling up. High Coastal Cannabis, at 1720 Lakeshore Rd W in Mississauga, answers it Q&amp;A-style for adults 19+. Clear help, no pressure.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.body} ${article.prose}`}>
        <article className={styles.section}>
          <h2>Q: What does &quot;solventless&quot; mean?</h2>
          <p>A solventless concentrate is made by <strong>physically</strong> separating the resin from the plant, without dissolving it in a chemical solvent. The tools are things like screens, ice water, heat and pressure.</p>
          <p>The main solventless families:</p>
          <ul>
            <li><strong>Dry sift / kief:</strong> trichomes knocked or sifted off dried plant material through fine screens.</li>
            <li><strong>Ice water hash (bubble hash):</strong> plant material agitated in ice water so trichomes snap off, then collected through filter bags.</li>
            <li><strong>Rosin:</strong> heat and pressure applied to flower, kief or hash to squeeze the resin out.</li>
          </ul>
        </article>

        <article className={styles.section}>
          <h2>Q: What does &quot;solvent-based&quot; mean?</h2>
          <p>A solvent-based concentrate uses a <strong>solvent</strong> to dissolve the resin out of the plant. The solvent is then removed, leaving the concentrate behind.</p>
          <p>Common solvent families you&apos;ll see named:</p>
          <ul>
            <li><strong>Hydrocarbon:</strong> butane or propane, often shortened to &quot;BHO&quot; or &quot;PHO.&quot;</li>
            <li><strong>Ethanol:</strong> alcohol-based extraction.</li>
            <li><strong>CO₂:</strong> carbon dioxide under pressure.</li>
          </ul>
          <p>Many familiar concentrate names, such as shatter, wax, budder, sauce and distillate, are usually made through solvent-based processes, with extra refining steps for some of them.</p>
        </article>

        <article className={styles.section}>
          <h2>Q: Solventless vs solvent, side by side?</h2>
          <div className={article.tableWrap}>
            <table className={article.table}>
              <thead>
                <tr>
                  <th></th>
                  <th>Solventless</th>
                  <th>Solvent-based</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>How resin is separated</td>
                  <td>Physically: screens, ice water, heat, pressure</td>
                  <td>Chemically: dissolved in a solvent</td>
                </tr>
                <tr>
                  <td>Common inputs</td>
                  <td>Flower, kief, hash, fresh frozen material</td>
                  <td>Flower, trim, fresh frozen material</td>
                </tr>
                <tr>
                  <td>Typical names</td>
                  <td>Kief, dry sift, bubble hash, rosin</td>
                  <td>Shatter, wax, budder, sauce, distillate</td>
                </tr>
                <tr>
                  <td>&quot;Live&quot; versions?</td>
                  <td>Yes (e.g. live rosin)</td>
                  <td>Yes (e.g. live resin)</td>
                </tr>
                <tr>
                  <td>Label class</td>
                  <td>Cannabis extract</td>
                  <td>Cannabis extract</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Notice the bottom row. On a Canadian label, both sides fall into the same product class.</p>
        </article>

        <article className={styles.section}>
          <h2>Q: Is solventless &quot;better&quot;?</h2>
          <p>We don&apos;t rank them. The solventless vs solvent difference is about <strong>method</strong>, and each method suits different products. Producers choose based on what they&apos;re making. Neither word is a promise about how a product will feel, and neither is a THC number. For that, read the Total THC and Total CBD values on the label.</p>
        </article>

        <article className={styles.section}>
          <h2>Q: Where does the word &quot;live&quot; fit in?</h2>
          <p>&quot;Live&quot; points to the <strong>input</strong>, not the method. It means the plant was frozen soon after harvest instead of dried and cured.</p>
          <ul>
            <li><strong>Live resin:</strong> solvent-based, from fresh frozen input.</li>
            <li><strong>Live rosin:</strong> solventless, usually pressed from ice water hash made from fresh frozen input.</li>
          </ul>
          <p>So &quot;live&quot; can show up on either side of the table.</p>
        </article>

        <article className={styles.section}>
          <h2>Q: How do I tell which one I&apos;m looking at?</h2>
          <ol>
            <li><strong>Read the product name.</strong> Rosin, bubble hash and kief point solventless. Shatter, wax, budder, sauce and distillate usually point solvent-based.</li>
            <li><strong>Read the description.</strong> Producers often name the method.</li>
            <li><strong>Read the label</strong> for the facts: product class, Total THC, Total CBD, net weight, packaging date and ingredients where listed.</li>
          </ol>
          <p>If the method matters to you, ask staff to show you the label and the product description. We&apos;ll tell you what&apos;s printed and what isn&apos;t.</p>
        </article>

        <article className={styles.section}>
          <h2>Q: What does neither word tell me?</h2>
          <ul>
            <li>Not a THC or potency figure.</li>
            <li>Not a quality grade.</li>
            <li>Not a separate legal class.</li>
            <li>Not a guarantee by itself. It&apos;s how the product is described.</li>
          </ul>
        </article>

        <article className={styles.section}>
          <h2>Q: How should I store either type?</h2>
          <p>The same way. Concentrates soften with heat and stick to everything. Keep them in the original sealed, labelled container, somewhere cool, and well out of reach of children and pets.</p>
        </article>

        <article className={styles.section}>
          <h2>Quick glossary</h2>
          <ul>
            <li><strong>Trichomes:</strong> resin glands on the plant surface; what every concentrate is chasing.</li>
            <li><strong>Kief / dry sift:</strong> loose trichomes collected through screens.</li>
            <li><strong>Bubble hash:</strong> trichomes collected through ice water and filter bags.</li>
            <li><strong>Rosin:</strong> resin pressed out with heat and pressure. (More in our <Link href="/resources/what-is-rosin">rosin explainer</Link>.)</li>
            <li><strong>BHO:</strong> butane hash oil, a hydrocarbon extract.</li>
            <li><strong>Distillate:</strong> a heavily refined extract.</li>
          </ul>
        </article>

        <article className={styles.section}>
          <h2>The bottom line</h2>
          <p>Solventless vs solvent comes down to one question: was the resin separated physically, or dissolved out with a solvent? Kief, bubble hash and rosin sit on the solventless side; shatter, wax, budder, sauce and distillate usually sit on the solvent side. Both are labelled as cannabis extracts, and the label carries the numbers.</p>
          <p>
            Planning a stop in Clarkson? Our <Link href="/resources/cannabis-101">Cannabis 101 guide</Link> covers the basics, and our <Link href="/weed-dispensary-mississauga">Mississauga weed dispensary page</Link> covers the area. High Coastal Cannabis is for adults 19 and over. Bring government-issued photo ID.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
