import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceView from "../ResourceView";
import { getResourcePage, RESOURCE_PAGES } from "../resourceData";

type ResourceRouteProps = {
  params: Promise<{ slug?: string[] }>;
};

function routeSlug(slug?: string[]) {
  return (slug || []).join("/");
}

export function generateStaticParams() {
  return RESOURCE_PAGES.filter((page) => page.slug).map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (!page) return {};
  return {
    title: { absolute: page.seoTitle },
    description: page.description,
    alternates: { canonical: "https://www.highcoastalcannabis.com/resources/" + page.slug },
    robots: { index: true, follow: true },
  };
}

export default async function ResourcePage({ params }: ResourceRouteProps) {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (!page) notFound();
  const canonical = `https://www.highcoastalcannabis.com/resources/${page.slug}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.highcoastalcannabis.com" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.highcoastalcannabis.com/resources" },
        { "@type": "ListItem", position: 3, name: page.title, item: canonical },
      ],
    },
    {
      "@type": "Article",
      "@id": canonical,
      url: canonical,
      name: page.seoTitle,
      headline: page.title,
      description: page.description,
      mainEntityOfPage: canonical,
      ...(page.datePublished ? { datePublished: page.datePublished } : {}),
      ...(page.dateModified ? { dateModified: page.dateModified } : {}),
    },
    ...(page.faqs && page.faqs.length > 0
      ? [{
          "@type": "FAQPage",
          mainEntity: page.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }]
      : []),
  ];
  const schema = { "@context": "https://schema.org", "@graph": graph };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <ResourceView page={page} />
    </>
  );
}
