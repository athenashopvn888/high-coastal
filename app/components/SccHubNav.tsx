import Link from "next/link";
import { SCC_HUB_LINKS, SCC_SHORT_TIER_LINKS } from "../lib/sccHub";
import styles from "./SccHubNav.module.css";

function normalize(path: string) {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
}

export function SccHubNav({
  current,
  variant = "dark",
}: {
  current?: string;
  variant?: "dark" | "light";
}) {
  const currentNorm = current ? normalize(current) : "";

  return (
    <nav className={`${styles.hub} ${styles[variant]}`} aria-label="Lakeshore store guides and flower tiers">
      <p className={styles.kicker}>Lakeshore store guides</p>
      <div className={styles.row}>
        {SCC_HUB_LINKS.map((item) => {
          const isCurrent = currentNorm === normalize(item.href);
          if (isCurrent) {
            return (
              <span key={item.href} className={`${styles.link} ${styles.current}`} aria-current="page">
                {item.label}
              </span>
            );
          }
          return (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          );
        })}
      </div>
      <p className={styles.kicker}>Flower tiers</p>
      <div className={styles.row}>
        {SCC_SHORT_TIER_LINKS.map((item) => {
          const isCurrent = currentNorm === normalize(item.href);
          if (isCurrent) {
            return (
              <span key={item.href} className={`${styles.link} ${styles.current}`} aria-current="page">
                {item.label}
              </span>
            );
          }
          return (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
