"use client";

import Link from "next/link";
import { useState } from "react";
import CigaretteSeasonalNotice from "../CigaretteSeasonalNotice";
import { useCigaretteState } from "../CigaretteStateProvider";
import { FLEET_COLORS } from "../../lib/fleet/config";
import { SHOW_CIGARETTES } from "../../lib/siteConfig";
import type { ResolvedBanner } from "../../lib/fleet/types";

const figureStyle = { margin: 0, width: "100%" } as const;
const imageStyle = { display: "block", width: "100%", maxWidth: "100%", height: "auto" } as const;
const linkStyle = { display: "block", width: "100%" } as const;
const captionStyle = { margin: 0, padding: "10px 14px", background: FLEET_COLORS.banner, color: FLEET_COLORS.bannerText, textAlign: "center" as const, fontWeight: 800, lineHeight: 1.35 };

function BannerFigure({ banner }: { banner: ResolvedBanner }) {
  const [src, setSrc] = useState(banner.image);
  const [imageFailed, setImageFailed] = useState(false);
  const showText = banner.render === "text" || imageFailed || !src;
  const applyCodedFallback = () => {
    if (banner.codedImage && src !== banner.codedImage) {
      setSrc(banner.codedImage);
      return;
    }
    setImageFailed(true);
  };
  return (
    <figure data-core-banner={banner.id} style={{ ...figureStyle, boxShadow: "inset 0 0 0 2px #06b6d4" }}>
      {showText ? (
        <Link href={banner.href} aria-label={banner.alt} style={{ ...linkStyle, textDecoration: "none" }}>
          <div data-fleet-text-banner="" style={{ ...imageStyle, minHeight: banner.imageHeight || 180, display: "flex", alignItems: "center", justifyContent: "center", background: FLEET_COLORS.banner, color: FLEET_COLORS.bannerText, fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)" }}>{banner.categoryName}</div>
        </Link>
      ) : (
        <Link href={banner.href} aria-label={banner.alt} style={{ ...linkStyle, background: "#07141a" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img key={src} src={src} alt={banner.alt} title={banner.title} width={banner.imageWidth} height={banner.imageHeight} style={imageStyle} ref={(node) => { if (node?.complete && node.naturalWidth === 0) applyCodedFallback(); }} onError={applyCodedFallback} /></Link>
      )}
      <figcaption style={{ ...captionStyle, borderBottom: "3px solid #06b6d4" }}>{banner.textBar}</figcaption>
    </figure>
  );
}

/** Sheet Home rows. The coded homepage keeps its own markup when this is not mounted. */
export default function FleetAnnouncementBanner({ banners }: { banners: ResolvedBanner[] }) {
  const cigarettes = useCigaretteState();
  const showCigarettes = SHOW_CIGARETTES ? cigarettes.web : false;
  const visible = banners.filter((banner) => !banner.hidden && (showCigarettes || (banner.id !== "cigarettes" && banner.id !== "premium-cigarettes")));
  return (
    <aside data-fleet-homepage-announcement="" aria-label="Store promotions" style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "100%", height: "auto", minHeight: 0, overflow: "visible", position: "relative", zIndex: 50 }}>
      {visible.some((banner) => banner.id === "cigarettes") ? <CigaretteSeasonalNotice /> : null}
      {visible.map((banner) => <BannerFigure key={banner.id} banner={banner} />)}
    </aside>
  );
}
