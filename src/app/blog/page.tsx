import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Blog | AI, Backend & SaaS",
  description:
    "Technical articles by Luis Navarro on AI engineering, RAG, backend architecture, SaaS development, API integrations, databases, cloud infrastructure, and production software systems.",
  path: "/blog",
  keywords: [
    "AI Engineering Blog",
    "Backend Engineering",
    "RAG Systems",
    "AI Agents",
    "FastAPI",
    "Python Backend",
    "SaaS Architecture",
    "API Integrations",
    "PostgreSQL",
    "AWS",
    "Google Cloud",
    "Full Stack Engineering",
  ],
});

export default function BlogIndexPage() {
  const breadcrumbItems = [{ label: "Blog", href: "/blog" }];
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="pb-24 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            Engineering Notes
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            AI, Backend & Product Engineering
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Practical notes on building reliable AI systems, backend services,
            SaaS products, integrations, data pipelines, and cloud
            infrastructure.
          </p>
        </div>

        {blogPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="glass group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2 font-mono text-xs text-muted-foreground">
                    <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-primary">
                      {post.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary/80 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group/btn w-full"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <span>Read Article</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        ) : (
          <div className="glass mx-auto max-w-2xl rounded-2xl p-10 text-center">
            <h2 className="text-xl font-semibold">Articles coming soon</h2>

            <p className="mt-3 text-muted-foreground">
              I’ll be sharing practical engineering notes on AI systems,
              backend architecture, integrations, SaaS development, and cloud
              infrastructure.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}