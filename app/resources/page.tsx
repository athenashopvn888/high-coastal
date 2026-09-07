import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { RESOURCE_HOME } from "./resourceData";

export const metadata: Metadata = {
  title: RESOURCE_HOME.seoTitle,
  description: RESOURCE_HOME.description,
  alternates: { canonical: "https://www.highcoastalcannabis.com/resources" },
};

export default function ResourcesPage() {
  const canonical = "https://www.highcoastalcannabis.com/resources";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.highcoastalcannabis.com" },
          { "@type": "ListItem", position: 2, name: "Resources", item: canonical },
        ],
      },
      { "@type": "CollectionPage", "@id": canonical, url: canonical, name: RESOURCE_HOME.seoTitle, headline: RESOURCE_HOME.title, description: RESOURCE_HOME.description },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><ResourceView page={RESOURCE_HOME} /></>;
}
