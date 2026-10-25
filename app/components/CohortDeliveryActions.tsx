"use client";

import Link from "next/link";
import { HOME_DELIVERY_HREF, HOME_MENU_HREF } from "../lib/homeDelivery";
import { FULL_NAME_NAP } from "../lib/fullNameNap";
import styles from "./CohortDeliveryActions.module.css";

export default function CohortDeliveryActions({ variant = "nav" }: { variant?: "nav" | "hero" }) {
  const trackDirections = () => {
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "directions_click", {
      store_code: "LC01",
      link_location: "primary_navigation",
    });
  };

  return <div className={`${styles.actions} ${variant === "hero" ? styles.hero : ""}`} aria-label="Choose a store or delivery menu">
    <Link href={HOME_MENU_HREF} className={`${styles.link} ${styles.primary}`}>STORE MENU</Link>
    <Link href={HOME_DELIVERY_HREF} className={`${styles.link} ${styles.secondary}`}>Delivery</Link>
    {variant === "nav" ? <a href={FULL_NAME_NAP.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.directions}`} onClick={trackDirections}>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
      <span>Directions</span>
    </a> : null}
  </div>;
}
