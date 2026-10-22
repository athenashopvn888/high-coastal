"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { FLEET_STORE_NAME, TV_PROMO_INITIAL_DELAY_MS, TV_PROMO_SLIDE_MS } from "../../lib/fleet/config";
import type { TvFullscreenPromo } from "../../lib/fleet/types";
import styles from "./TvPromoTakeover.module.css";

type PromoPhase = "hidden" | "entering" | "visible" | "exiting";

const subscribeToClient = () => () => {};

function preload(promos: readonly TvFullscreenPromo[], onReady: (ready: TvFullscreenPromo[]) => void) {
  let active = true;
  const loaded: TvFullscreenPromo[] = [];
  let remaining = promos.length;
  const finish = () => {
    remaining -= 1;
    if (remaining === 0 && active) onReady(loaded.slice());
  };
  const preloads = promos.map((promo) => {
    const image = new Image();
    let settled = false;
    const settle = (ok: boolean) => {
      if (settled) return;
      settled = true;
      if (ok) loaded.push(promo);
      finish();
    };
    const onLoad = () => settle(image.naturalWidth > 0);
    const onError = () => settle(false);
    image.addEventListener("load", onLoad);
    image.addEventListener("error", onError);
    image.src = promo.image;
    if (image.complete) settle(image.naturalWidth > 0);
    return { image, onLoad, onError };
  });
  return () => {
    active = false;
    preloads.forEach(({ image, onLoad, onError }) => {
      image.removeEventListener("load", onLoad);
      image.removeEventListener("error", onError);
    });
  };
}

export default function TvPromoTakeover({ promos }: { promos: readonly TvFullscreenPromo[] }) {
  const mounted = useSyncExternalStore(subscribeToClient, () => true, () => false);
  const promoKey = promos.map((promo) => `${promo.spot}\n${promo.image}`).join("|");
  const [ready, setReady] = useState<TvFullscreenPromo[]>([]);
  const [readyKey, setReadyKey] = useState(promoKey);
  const [activePromoIndex, setActivePromoIndex] = useState(0);
  const [phase, setPhase] = useState<PromoPhase>("hidden");
  const [phaseKey, setPhaseKey] = useState(promoKey);
  if (readyKey !== promoKey) {
    setReadyKey(promoKey);
    setReady([]);
  }
  if (phaseKey !== promoKey) {
    setPhaseKey(promoKey);
    setPhase("hidden");
    setActivePromoIndex(0);
  }
  const visibleReady = readyKey === promoKey ? ready : [];
  const visiblePhase = phaseKey === promoKey ? phase : "hidden";
  const showSeconds = promos[0]?.showSeconds ?? 5;
  const everyMinutes = promos[0]?.everyMinutes ?? 1;

  useEffect(() => {
    return preload(promos, (loaded) => {
      setReadyKey(promoKey);
      setReady(loaded);
    });
  }, [promos, promoKey]);

  useEffect(() => {
    if (visibleReady.length === 0) return;
    let promoActive = false;
    let nextPromoIndex = 0;
    let holdTimer: number | undefined;
    let exitTimer: number | undefined;
    let releaseTimer: number | undefined;

    const showPromo = () => {
      if (promoActive) return;
      promoActive = true;
      setActivePromoIndex(nextPromoIndex);
      nextPromoIndex = (nextPromoIndex + 1) % visibleReady.length;
      setPhase("entering");
      holdTimer = window.setTimeout(() => {
        setPhase("visible");
        exitTimer = window.setTimeout(() => {
          setPhase("exiting");
          releaseTimer = window.setTimeout(() => {
            setPhase("hidden");
            promoActive = false;
          }, TV_PROMO_SLIDE_MS);
        }, showSeconds * 1000);
      }, TV_PROMO_SLIDE_MS);
    };

    const initialPreviewTimer = window.setTimeout(showPromo, TV_PROMO_INITIAL_DELAY_MS);
    const promoTimer = window.setInterval(showPromo, everyMinutes * 60_000);
    return () => {
      window.clearTimeout(initialPreviewTimer);
      window.clearInterval(promoTimer);
      if (holdTimer !== undefined) window.clearTimeout(holdTimer);
      if (exitTimer !== undefined) window.clearTimeout(exitTimer);
      if (releaseTimer !== undefined) window.clearTimeout(releaseTimer);
    };
  }, [visibleReady, showSeconds, everyMinutes]);

  if (!mounted || visibleReady.length === 0) return null;
  const activePromo = visibleReady[activePromoIndex] ?? visibleReady[0];

  return createPortal(
    <aside
      className={`${styles.takeover} ${styles[visiblePhase]}`}
      data-fleet-tv-takeover=""
      aria-hidden={visiblePhase === "hidden"}
      aria-label={visiblePhase !== "hidden" ? `${FLEET_STORE_NAME} promotion` : undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={activePromo.image} alt={activePromo.alt} />
    </aside>,
    document.body,
  );
}
