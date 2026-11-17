import type { Metadata, ResolvingMetadata } from "next";
import HomePage from "./HomePage";
import { HOME_PAGE_TITLE } from "./lib/homeDelivery";

// Document title only. Parent openGraph/twitter are replaced wholesale, so copy
// them and change the title. Other tags (description, canonical, robots) stay inherited.
export async function generateMetadata(
  _props: { params: Promise<Record<string, never>> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const previous = await parent;
  return {
    title: { absolute: HOME_PAGE_TITLE },
    openGraph: {
      ...previous.openGraph,
      title: HOME_PAGE_TITLE,
    },
    twitter: {
      ...previous.twitter,
      title: HOME_PAGE_TITLE,
    },
  };
}

export default function Page() {
  return <HomePage />;
}
