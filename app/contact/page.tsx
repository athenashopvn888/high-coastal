import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";
import { STORE_IDENTITY as nap, jsonLdHtml } from "../lib/storeIdentity";

export const metadata: Metadata = {
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

export default function ContactPage() {
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
                {nap.streetAddress}
                <br />
                {nap.addressLocality}, {nap.addressRegion} {nap.postalCode}
                <br />
                <span className={styles.infoMuted}>{nap.intersection}</span>
              </p>
              <p className={styles.infoText}>
                <a href={`tel:${nap.phoneIntl}`} className={styles.infoBtn}>
                  Call {nap.phoneDisplay}
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
