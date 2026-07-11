import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.brand}>HIGH COASTAL CANNABIS</div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 1720 Lakeshore Rd W, Mississauga. Visit
              High Coastal Cannabis For Premium Flower, Edibles, Vapes &amp; More.
              Open 24 Hours.
            </p>
            <div className={styles.buttons}>
              <a href="tel:+12894017550" className={styles.btnPrimary}>
                Call Now
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>1720 Lakeshore Rd W</span>
              <span>Mississauga, ON L5J 1J5</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href="tel:+12894017550" style={{ color: "inherit" }}>
                  (289) 401-7550
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours</span>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery (Coming Soon)</Link>
              <Link href="/info/mississauga-weed-dispensary">Mississauga Dispensary</Link>
              <Link href="/info/cheap-weed-mississauga">Cheap Weed Mississauga</Link>
              <Link href="/info/native-cigarettes-mississauga">Native Cigarettes</Link>
              <Link href="/info/weed-store-near-clarkson-lakeshore">Weed Store Near Clarkson</Link>
              <Link href="/weed-dispensary-mississauga/">High Coastal Cannabis Weed Dispensary in Mississauga</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            (c) {new Date().getFullYear()} High Coastal Cannabis. Must be 19+ to
            enter. Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
