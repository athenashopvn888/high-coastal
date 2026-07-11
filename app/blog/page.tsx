import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "High Coastal Cannabis Blog | Cannabis Menu Guides",
  description: "Read High Coastal Cannabis cannabis menu guides, flower tier notes, and local store checks for Mississauga shoppers.",
  alternates: {
    canonical: "https://www.highcoastalcannabis.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
