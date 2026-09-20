import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = constructMetadata({
  title: "Projects & Portfolio Case Studies",
  description:
    "Explore featured client websites, e-commerce storefronts, web applications, and utility tools engineered by Luis Navarro.",
  path: "/projects",
  keywords: [
    "Web Development Portfolio",
    "Next.js Projects",
    "E-Commerce Case Studies",
    "Web Application Portfolio",
  ],
});

export default function ProjectsPage() {
  const breadcrumbItems = [{ label: "Projects", href: "/projects" }];
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <Projects />
    </div>
  );
}
