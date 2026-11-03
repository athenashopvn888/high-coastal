import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { jsonLdHtml } from "../../lib/storeIdentity";
import styles from "../resources.module.css";
import article from "./article.module.css";

const TITLE = "What Is Distillate? The Clear Cannabis Oil Behind So Many Vapes and Edibles";
const CANONICAL = "https://www.highcoastalcannabis.com/resources/what-is-cannabis-distillate";
const DESCRIPTION =
  "Distillate is one of the most common ingredients in the legal cannabis world, and one of the least understood.";

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
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  author: { "@type": "Organization", name: "High Coastal Cannabis" },
  publisher: { "@type": "Organization", name: "High Coastal Cannabis" },
};

export default function WhatIsCannabisDistillatePage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(schema) }} />
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <h1>{TITLE}</h1>
          <div className={styles.intro}>
            <p>Last checked: October 25, 2026</p>
            <p>
              Crystal clear, thick as honey and almost flavourless on its own. Distillate is one of the most common ingredients in the legal cannabis world, and one of the least understood. High Coastal Cannabis, at 1720 Lakeshore Rd W in Clarkson, Mississauga L5J 1J5, explains <strong>what is distillate</strong>, where it shows up and how the label treats it, for adults 19+.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.body} ${article.prose}`}>
        <article className={styles.section}>
          <h2>What is distillate?</h2>
          <p>Distillate is a highly refined cannabis oil. Producers start with a crude extract, then purify it further through distillation, separating cannabinoids from other plant compounds. The result is a clear to golden, very viscous oil that&apos;s mostly a single cannabinoid, usually THC or CBD.</p>
          <p>Think of it as the plant&apos;s chemistry with most of the &quot;plant&quot; removed.</p>
        </article>

        <article className={styles.section}>
          <h2>Why distillate tastes like almost nothing</h2>
          <p>Distillation separates compounds by how they behave under heat and vacuum. Many of the aroma compounds (terpenes) come off separately. So plain distillate has very little smell or flavour. That&apos;s why you&apos;ll often see &quot;added terpenes&quot; or &quot;flavour&quot; in the ingredient list of distillate products: producers add aroma back in.</p>
        </article>

        <article className={styles.section}>
          <h2>Where distillate shows up</h2>
          <p>Distillate is versatile, so it appears across formats:</p>
          <div className={article.tableWrap}>
            <table className={article.table}>
              <thead>
                <tr>
                  <th>Format</th>
                  <th>How distillate is used</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vape cartridges</td>
                  <td>Main ingredient, often with added flavour</td>
                </tr>
                <tr>
                  <td>Edibles</td>
                  <td>Mixed into food or drink bases</td>
                </tr>
                <tr>
                  <td>Capsules</td>
                  <td>Measured into shells</td>
                </tr>
                <tr>
                  <td>Infused pre-rolls</td>
                  <td>Coated on or added to flower</td>
                </tr>
                <tr>
                  <td>Syringes / dabbables</td>
                  <td>Sold on its own</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Each format has its own class and label framework. Read the class line first.</p>
        </article>

        <article className={styles.section}>
          <h2>Distillate vs other extracts</h2>
          <div className={article.tableWrap}>
            <table className={article.table}>
              <thead>
                <tr>
                  <th>Extract</th>
                  <th>Made how</th>
                  <th>Typical look</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Distillate</td>
                  <td>Refined by distillation</td>
                  <td>Clear, thick oil</td>
                </tr>
                <tr>
                  <td>Shatter</td>
                  <td>Solvent extraction, left still</td>
                  <td>Glassy sheet</td>
                </tr>
                <tr>
                  <td>Rosin</td>
                  <td>Heat and pressure, no solvent</td>
                  <td>Sappy, golden</td>
                </tr>
                <tr>
                  <td>Live resin</td>
                  <td>Solvent extraction from fresh-frozen plant</td>
                  <td>Saucy, aromatic</td>
                </tr>
                <tr>
                  <td>Kief</td>
                  <td>Mechanical separation</td>
                  <td>Loose powder</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>All of these sit in the cannabis extract class when sold on their own. Health Canada&apos;s label guide lists resin, rosin, wax, shatter, kief and hash in that class.</p>
        </article>

        <article className={styles.section}>
          <h2>What a distillate label shows</h2>
          <p>A legal distillate product carries:</p>
          <ol>
            <li>Class (cannabis extract for most distillate products)</li>
            <li>Net weight or volume</li>
            <li>Total THC and Total CBD</li>
            <li>Ingredient list, including any added flavours or terpenes</li>
            <li>Lot number and packaging date</li>
            <li>Storage conditions</li>
            <li>Health warning in the yellow box and the standardized symbol</li>
          </ol>
          <p>The ingredient list is especially useful with distillate, because it shows whether aroma was added.</p>
        </article>

        <article className={styles.section}>
          <h2>Possession math</h2>
          <p>Ontario counts concentrates at 0.25 g per 1 g dried toward the 30 g public limit. So 1 g of distillate counts as 4 g of dried.</p>
        </article>

        <article className={styles.section}>
          <h2>Common distillate myths</h2>
          <p><strong>&quot;Clear means pure, means better.&quot;</strong> Clarity reflects refining. It isn&apos;t a quality ranking.</p>
          <p><strong>&quot;Distillate and isolate are the same.&quot;</strong> Isolate is a solid, purified single compound, often CBD. Distillate is an oil. Related idea, different product.</p>
          <p><strong>&quot;Flavoured distillate contains a different cannabinoid.&quot;</strong> Flavour usually comes from added terpenes or flavourings. Check the ingredients.</p>
          <p><strong>&quot;Distillate is a strain.&quot;</strong> It&apos;s a format, made from many kinds of starting material.</p>
        </article>

        <article className={styles.section}>
          <h2>Storage</h2>
          <p>Distillate is thick and sticky and can thin out when warm. Keep it in its original child-resistant package, upright, cool and dark, and away from kids and pets.</p>
        </article>

        <article className={styles.section}>
          <h2>Distillate glossary</h2>
          <div className={article.tableWrap}>
            <table className={article.table}>
              <thead>
                <tr>
                  <th>Word</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Crude</td>
                  <td>The first, unrefined extract</td>
                </tr>
                <tr>
                  <td>Winterization</td>
                  <td>A refining step that removes waxes and fats</td>
                </tr>
                <tr>
                  <td>Distillation</td>
                  <td>Separating compounds using heat and vacuum</td>
                </tr>
                <tr>
                  <td>Added terpenes</td>
                  <td>Aroma compounds put back in after refining</td>
                </tr>
                <tr>
                  <td>Isolate</td>
                  <td>A solid, purified single compound</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>These words describe processing steps. None is a quality grade.</p>
        </article>

        <article className={styles.section}>
          <h2>How to read a flavoured distillate product</h2>
          <p>Flavoured products are common, so here&apos;s a quick order:</p>
          <ol>
            <li>Class line: extract (or edible, if it&apos;s in food).</li>
            <li>Ingredient list: look for &quot;terpenes&quot; or &quot;flavour&quot;.</li>
            <li>Total THC and Total CBD.</li>
            <li>Net weight or volume.</li>
            <li>Packaging date.</li>
          </ol>
          <p>If you&apos;d rather avoid added flavours, the ingredient list is where you&apos;ll find out.</p>
        </article>

        <article className={styles.section}>
          <h2>Distillate across formats, one more time</h2>
          <p>The same refined oil can end up in a cartridge, a capsule or an edible. The class line changes depending on the finished product, and so do the label rules. Always read the class before comparing.</p>
        </article>

        <article className={styles.section}>
          <h2>Plan a Clarkson stop</h2>
          <p>
            Find store details on our <Link href="/weed-dispensary-mississauga">Mississauga weed dispensary</Link> page, and check the <Link href="/high-coastal-visit">High Coastal visit page</Link> before you come by.
          </p>
          <p>What is distillate? A refined, clear cannabis oil, usually one main cannabinoid, labelled as an extract. High Coastal Cannabis is for adults 19 and over. Staff ask for ID from anyone who looks under 25.</p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
