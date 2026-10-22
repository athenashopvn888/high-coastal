import { cigaretteWebMode } from "./app/lib/cigaretteFeed";
import { cigaretteRedirectDestination } from "./app/lib/cigaretteVisibility";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const destination = cigaretteRedirectDestination(request.nextUrl.pathname);
  if (!destination) return NextResponse.next();
  // Coded keeps the redirect. An explicit sheet flag stays on this URL.
  if ((await cigaretteWebMode()) !== "coded") return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = destination;
  url.search = "";
  return NextResponse.redirect(url, 302);
}

export const config = {
  matcher: [
    "/cigarettes",
    "/items/cigarettes",
    "/native-cigarettes-lakeshore",
    "/info/native-cigarettes-mississauga",
    "/info/native-cigarettes-york",
    "/resources/native-smokes",
    "/resources/native-smokes/:path*",
    "/item/:path*",
    "/guides/:path*",
  ],
};
