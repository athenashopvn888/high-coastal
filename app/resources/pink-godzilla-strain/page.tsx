import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { jsonLdHtml } from "../../lib/storeIdentity";
import styles from "../resources.module.css";
import article from "./article.module.css";

const TITLE = "Pink Godzilla Strain: A Monster Name With No Published Parents";
const CANONICAL = "https://www.highcoastalcannabis.com/resources/pink-godzilla-strain";
const DESCRIPTION =
  "Pink Godzilla is a loud, two-word name, and the public record can't confirm where it came from.";

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
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  author: { "@type": "Organization", name: "High Coastal Cannabis" },
  publisher: { "@type": "Organization", name: "High Coastal Cannabis" },
};

export default function PinkGodzillaStrainPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(schema) }} />
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <h1>{TITLE}</h1>
          <div className={styles.intro}>
            <p>Last checked: November 4, 2026</p>
            <p>
              Some names show up on a menu with a whole family tree behind them. <strong>Pink Godzilla</strong> doesn&apos;t. It&apos;s a loud, two-word name that people across Mississauga and the GTA type into search bars, and what comes back is a mess: seller pages that disagree with each other, family trees nobody can trace, and confident claims with no source behind them. High Coastal Cannabis would rather give you the straight version. Here it is: what the name is, what the public record can and can&apos;t tell you, and how to read the one thing that actually counts, the label in your hand. Adults 19+ only.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.body} ${article.prose}`}>
        <article className={styles.section}>
          <h2>What is the Pink Godzilla strain?</h2>
          <p>Pink Godzilla is a cannabis strain name with no documented, published lineage. When we checked on November 3, 2026, Leafly, one of the best-known strain databases, had no page for it. The places that do say what it&apos;s made of are mostly retail listings, and they don&apos;t agree. One family tree says one thing, the next says something else.</p>
          <p>So the fair way to put it is that Pink Godzilla is a trade name. It names a product, and the record doesn&apos;t confirm where it came from.</p>
        </article>

        <article className={styles.section}>
          <h2>Who are Pink Godzilla&apos;s parents?</h2>
          <p>Nobody can say for sure, because no reputable source publishes them. Anyone who hands you a parent pair with full confidence is guessing, or repeating a seller&apos;s guess. That&apos;s not a knock on the name. Plenty of strains carry names whose breeding records were never made public, or were lost along the way as cuttings moved from grower to grower.</p>
          <p>When a breeder doesn&apos;t publish a cross, it just stays unpublished. Online lists fill the gap with whatever sounds right, and after enough copying it starts to look like fact. Here we keep it simple: no published parents means we don&apos;t name any.</p>
        </article>

        <article className={styles.section}>
          <h2>Why is it called Pink Godzilla, then?</h2>
          <p>The honest answer is that nobody on record has explained it. Names in this game get picked for all kinds of reasons: a grower&apos;s sense of humour, the colour of the hairs on a bud, a nod to some other famous name, or just because it sounds big on a jar. &quot;Pink&quot; is one of the most-used words in strain naming. &quot;Godzilla&quot; is pure attitude. Put them together and you get a name built to stick in your head, but that tells you nothing about the plant.</p>
          <p>Read the name as branding. It&apos;s a handle, not a lab report and not a family history.</p>
        </article>

        <article className={styles.section}>
          <h2>Is Pink Godzilla related to Pink Kush?</h2>
          <p>There&apos;s no published source that ties the two together, so we won&apos;t claim it. Pink Kush is still worth knowing as general background, because it&apos;s one of the best-known &quot;pink&quot; names out there. Leafly lists Pink Kush, also called Pink OG, as an <strong>OG Kush relative</strong>, known for pink hairs on bright green buds. That&apos;s Pink Kush&apos;s own story. A shared word in two names isn&apos;t proof of a shared family. Lots of strains have &quot;pink&quot; in the name, and plenty of them have nothing to do with each other.</p>
        </article>

        <article className={styles.section}>
          <h2>Can you trust the family trees you find online?</h2>
          <p>Treat them with heavy suspicion, especially when they come from a store page. Here&apos;s a quick way to size one up:</p>
          <ul>
            <li><strong>Who published it?</strong> A breeder&apos;s own release notes beat a reseller&apos;s product blurb every time.</li>
            <li><strong>Does it cite anything?</strong> No source, no weight.</li>
            <li><strong>Do other sources agree?</strong> With Pink Godzilla they don&apos;t, and that tells you plenty.</li>
            <li><strong>How old is it?</strong> Some trees get copied for years without anyone checking them.</li>
          </ul>
          <p>Even a confirmed cross wouldn&apos;t settle much at the counter. Two growers can sell different cuts under the same name, and growing, drying and curing all change the batch.</p>
        </article>

        <article className={styles.section}>
          <h2>What should you look for on a Pink Godzilla package in Canada?</h2>
          <p>Start with the lines the law requires, and treat the strain name as extra. Health Canada&apos;s consumer guide to reading cannabis labels makes the strain name optional. A producer can print &quot;Pink Godzilla&quot; on the package or leave it off. The required information is a different story, and that&apos;s where you get facts instead of a family-tree story.</p>
          <p>Take it in this order:</p>
          <p><strong>First, the front panel.</strong> That&apos;s where the <strong>Total THC and Total CBD</strong> numbers live. They&apos;re measured figures from the package&apos;s own lot, not a reputation passed down from some other plant. Read them for what they are and don&apos;t let the name do the talking.</p>
          <p><strong>Then flip it for the paper trail.</strong> Find the <strong>lot number</strong> and the <strong>packaging date</strong>. The lot number ties the package to one production run. The date tells you how long it has been sealed. That&apos;s real history, which is more than the name gives you.</p>
          <p><strong>Then check who made it.</strong> The <strong>brand name</strong> is required, so you&apos;ll always know which producer stands behind the jar. If you liked or didn&apos;t like a past package, the brand and lot number are what let you track that, not the strain name.</p>
          <p><strong>Last, the small print.</strong> The <strong>class of cannabis</strong> (flower is dried cannabis) and the <strong>recommended storage conditions</strong> round it out. Follow the storage line once you&apos;re home.</p>
          <p>The point is that the name is marketing and the required lines are information. When a name has no published lineage, those required lines are all you have to go on.</p>
        </article>

        <article className={styles.section}>
          <h2>Does this article mean Pink Godzilla is in stock?</h2>
          <p>No. This guide explains a name. It doesn&apos;t list products or promise what&apos;s on the shelf. Menus change, and a strain name you saw online is a reason to ask, not a guarantee.</p>
        </article>

        <article className={styles.section}>
          <h2>Quick Pink Godzilla reality check</h2>
          <ul>
            <li>The name has no documented lineage, so treat any parent claim as unconfirmed.</li>
            <li>&quot;Pink&quot; in a name doesn&apos;t mean it&apos;s related to Pink Kush.</li>
            <li>Seller family trees aren&apos;t sources.</li>
            <li>The front panel, lot number and packaging date tell you more than the name does.</li>
            <li>Ask to see the label before you decide.</li>
          </ul>
          <p>
            If you&apos;re also curious about the concentrate side, our guide to <Link href="/resources/what-is-rosin">what rosin is</Link> is a good next read.
          </p>
        </article>

        <article className={styles.section}>
          <h2>Talk Pink Godzilla at High Coastal Cannabis</h2>
          <p>
            Got questions about the Pink Godzilla strain, or any name that&apos;s louder than its paper trail? Come by High Coastal Cannabis at 1720 Lakeshore Rd W, Mississauga, and ask to see the label. We&apos;ll go through it with you line by line. For the basics first, start with our <Link href="/resources/cannabis-101">Cannabis 101 guide</Link>. Adults 19+ only. Bring government-issued photo ID.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
