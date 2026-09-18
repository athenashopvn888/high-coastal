import Link from "next/link";
import styles from "./WeedDiscoveryModule.module.css";
import { STORE_IDENTITY as nap } from "../lib/storeIdentity";
import { SccHubNav } from "./SccHubNav";

export function WeedDiscoveryModule() {
  return (
    <section className={styles.section} aria-labelledby="weed-discovery-title">
      <div className={styles.inner}>
        <p className={styles.kicker}>Open 24 Hours · Adults 19+ · {nap.neighborhood}</p>
        <h2 id="weed-discovery-title">Looking for Weed in Mississauga?</h2>
        <p>High Coastal Cannabis is open 24 hours at <strong>{nap.streetAddress}</strong> in the {nap.neighborhood} neighbourhood. Adults 19+ can explore flower tiers, pre-rolls, edibles, vapes, concentrates and more.</p>
        <p>Call <a href={`tel:${nap.phoneIntl}`}><strong>{nap.phoneDisplay}</strong></a> or visit {nap.addressDisplay} any hour of the day.</p>
        <div className={styles.actions}>
          <Link href={nap.landingPath} className={styles.primary}>Explore Weed &amp; Cannabis</Link>
          <Link href="/visit" className={styles.secondary}>Lakeshore Visit Guide</Link>
          <Link href="/24-hour-dispensary-mississauga" className={styles.secondary}>24-Hour Open-Now FAQ</Link>
          <Link href="/high-coastal-visit" className={styles.secondary}>High Coastal Brand Visit FAQ</Link>
          <Link href="/cannabis-delivery-lakeshore" className={styles.secondary}>Cannabis Delivery on Lakeshore</Link>
          <Link href="/resources/weed-flower-guide" className={styles.secondary}>Explore the Weed &amp; Flower Guide</Link>
          <Link href="/exotic" className={styles.secondary}>Exotic Weed</Link>
          <Link href="/premium" className={styles.secondary}>Premium Weed</Link>
          <Link href="/aaa" className={styles.secondary}>AAA+ Weed</Link>
          <Link href="/aa" className={styles.secondary}>AA Weed</Link>
          <Link href="/budget" className={styles.secondary}>Budget Weed</Link>
        </div>
        <SccHubNav current="/" />
      </div>
    </section>
  );
}
