import Link from "next/link";
import styles from "./WeedDiscoveryModule.module.css";

export function WeedDiscoveryModule() {
  return <section className={styles.section} aria-labelledby="weed-discovery-title"><div className={styles.inner}><p className={styles.kicker}>Open 24 Hours · Adults 19+</p><h2 id="weed-discovery-title">Looking for Weed in Mississauga?</h2><p>High Coastal Cannabis is open 24 hours at <strong>1720 Lakeshore Rd W</strong>. Adults 19+ can explore flower tiers, pre-rolls, edibles, vapes, concentrates and more.</p><div className={styles.actions}><Link href="/weed-dispensary-mississauga/" className={styles.primary}>Explore Weed &amp; Cannabis</Link><Link href="/resources/weed-flower-guide" className={styles.secondary}>Explore the Weed &amp; Flower Guide</Link></div></div></section>;
}
