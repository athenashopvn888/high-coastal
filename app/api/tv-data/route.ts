import { NextResponse } from "next/server";
import { getCigaretteSnapshot, reconcileSurfaceItems, snapshotHeaders, toPublicCigaretteState } from "../../lib/cigaretteFeed";
import { allFlowers, allItems } from "../../lib/products";
import { getTvData } from "../../lib/tvStock";

export const runtime = "nodejs";

// Always run the handler. Upstream Apps Script reads are cached for ~300s
// inside getTvData; this response itself is not cached (Cache-Control: no-store).
export const revalidate = 0;

export async function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type") || "flowers";
  // Warm the shared stock cache before the cigarette snapshot reads it. The
  // snapshot's own fetch budget is shorter than this menu read.
  const { body, headers } = await getTvData({
    type,
    staticFlowers: allFlowers,
    staticItems: allItems,
  });
  const snap = await getCigaretteSnapshot();
  const cigHeaders = snapshotHeaders(snap);

  let payload = body;
  if (type === "items" && Array.isArray(body)) {
    payload = reconcileSurfaceItems(body, snap.items, toPublicCigaretteState(snap).tv);
    headers["x-tv-data-item-count"] = String(payload.length);
  }

  return NextResponse.json(payload, { headers: { ...headers, ...cigHeaders } });
}
