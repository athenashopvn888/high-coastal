import type { Metadata } from "next";
import { FULL_NAME_NAP } from "../lib/fullNameNap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";
import { getFleetContent } from "../lib/fleetContent";
import { STORE_IDENTITY as nap, jsonLdHtml } from "../lib/storeIdentity";

export const dynamic = "force-dynamic";

const metadata: Metadata = {
  title: { absolute: `Contact Us — ${nap.name} | ${nap.streetAddress}, ${nap.addressLocality}` },
  description:
    `Visit ${nap.name} at ${nap.addressDisplay}. ${nap.hoursDisplay}, 7 days a week. Walk-ins welcome. Call ${nap.phoneDisplay}.`,
  alternates: {
    canonical: `${nap.websiteUrl}/contact`,
  },
  openGraph: {
    title: `Contact ${nap.name} — Mississauga Dispensary`,
    description:
      `${nap.streetAddress}, ${nap.addressLocality}. ${nap.hoursDisplay}, 7 days a week. Call ${nap.phoneDisplay}.`,
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return metadata;
  const description = fleet.pages.Contact?.metaDescription || "";
  const title = fleet.pages.Contact?.metaTitle || "";
  if ((!description || description === metadata.description) && !title) return metadata;
  return {
    ...metadata,
    ...(title ? { title: { absolute: title } } : {}),
    ...(description && description !== metadata.description ? { description } : {}),
  };
}

export default async function ContactPage() {
  const fleet = await getFleetContent();
  const street = fleet.active ? fleet.nap.street : nap.streetAddress;
  const locality = fleet.active ? fleet.nap.city : nap.addressLocality;
  const region = fleet.active ? fleet.nap.province : nap.addressRegion;
  const postal = fleet.active ? fleet.nap.postalCode : nap.postalCode;
  const intersection = fleet.active ? fleet.nap.intersection : nap.intersection;
  const phoneDisplay = fleet.active ? fleet.nap.phoneDisplay : nap.phoneDisplay;
  const phoneTel = fleet.active ? fleet.nap.phoneTel : nap.phoneIntl;
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${nap.websiteUrl}/contact`,
    name: `Contact ${nap.name}`,
    mainEntity: { "@id": nap.storeId },
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(contactSchema) }} />
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero} style={{ paddingTop: "92px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <img src="/banners/08_Contact_Us.webp" alt="Contact Us" style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-lg)" }} />
          <h1 className={styles.heroTitle} data-fullname-contact-h1="" style={{ marginTop: "16px", textAlign: "center", fontSize: "clamp(22px, 4vw, 34px)", lineHeight: 1.2, overflowWrap: "anywhere" }}>Contact {FULL_NAME_NAP.fullName}</h1>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                {street}
                <br />
                {locality}, {region} {postal}
                <br />
                <span className={styles.infoMuted}>{intersection}</span>
              </p>
              <p className={styles.infoText}>
                <a href={`tel:${phoneTel}`} className={styles.infoBtn}>
                  Call {phoneDisplay}
                </a>
              </p>
              <p className={styles.infoText}>
                <a href="/visit" className={styles.infoBtn}>
                  Lakeshore visit guide
                </a>
              </p>
              <p className={styles.infoText}>
                <a href="/high-coastal-visit" className={styles.infoBtn}>
                  High Coastal brand visit FAQ
                </a>
              </p>
              <p className={styles.infoText}>
                <a href="/cannabis-delivery-lakeshore" className={styles.infoBtn}>
                  Cannabis delivery on Lakeshore
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕒</div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}>
                  <span>Monday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Tuesday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Wednesday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Thursday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Friday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Saturday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Sunday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
              </div>
              <div className={styles.openBadge}>
                <span className={styles.openDot}></span>
                Open 24/7 — Never Closed
              </div>
              <p className={styles.infoText}>
                <a href="/24-hour-dispensary-mississauga" className={styles.infoBtn}>
                  24-hour open-now FAQ
                </a>
              </p>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔥</div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help you compare current menu details.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Flower tiers and menu categories
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Current package details
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Knowledgeable budtenders
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
