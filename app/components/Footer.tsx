import Link from "next/link";
import styles from "./Footer.module.css";
import { STORE_IDENTITY as nap } from "../lib/storeIdentity";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.brand}>HIGH COASTAL CANNABIS</div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At {nap.streetAddress}, {nap.addressLocality}. Visit {nap.name} For Premium Weed, Edibles, Vapes &amp; More. {nap.hoursDisplay}.
            </p>
            <div className={styles.buttons}>
              <a href={`tel:${nap.phoneIntl}`} className={styles.btnPrimary}>
                Call Now
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>{nap.streetAddress}</span>
              <span>{nap.addressLocality}, {nap.addressRegion} {nap.postalCode}</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href={`tel:${nap.phoneIntl}`} style={{ color: "inherit" }}>
                  {nap.phoneDisplay}
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>{nap.hoursDisplay}</span>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic-weed">Exotic Weed</Link>
              <Link href="/premium-weed">Premium Weed</Link>
              <Link href="/aaa-weed">AAA+ Weed</Link>
              <Link href="/aa-weed">AA Weed</Link>
              <Link href="/budget-weed">Budget Weed</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Nicotine Vape</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery Menu</Link>
              <Link href="/info/mississauga-weed-dispensary">Mississauga Dispensary</Link>
              <Link href="/info/cheap-weed-mississauga">Cheap Weed Mississauga</Link>
              <Link href="/info/native-cigarettes-mississauga">Native Cigarettes</Link>
              <Link href="/info/nicotine-vapes-mississauga">Nicotine Vapes Mississauga</Link>
              <Link href="/info/weed-store-near-clarkson-lakeshore">Weed Store Near Clarkson</Link>
              <Link href="/weed-dispensary-mississauga/">High Coastal Cannabis Weed Dispensary in Mississauga</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            (c) {new Date().getFullYear()} {nap.name}. Must be 19+ to
            enter. Please review posted store and menu information.
          </p>
        </div>
      </div>
    </footer>
  );
}
