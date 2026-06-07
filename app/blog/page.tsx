import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — High Coastal Cannabis | Mississauga",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from High Coastal Cannabis in Mississauga.",
  alternates: {
    canonical: "https://highcoastalcannabis.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
