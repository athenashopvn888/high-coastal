import { cigaretteRedirectDestination } from "./app/lib/cigaretteVisibility";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const destination = cigaretteRedirectDestination(request.nextUrl.pathname);
  if (!destination) return NextResponse.next();
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
