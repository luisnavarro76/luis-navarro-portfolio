import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import {
  constructMetadata,
  getBlogPostingSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return constructMetadata({
      title: "Article Not Found",
      description: "The requested blog post does not exist.",
    });
  }

  return constructMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
  });
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  const blogPostingSchema = getBlogPostingSchema(post);
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
            <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-primary">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              <span>By {post.author}</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Article Content Body */}
        <main className="glass rounded-2xl p-8 sm:p-10 mb-12 space-y-6 text-foreground/90 leading-relaxed text-base">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-8">
              {paragraph}
            </p>
          ))}
        </main>

        {/* Article Footer & Tags */}
        <footer className="glass rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="block text-xs font-mono text-muted-foreground mb-2">
              Article Tags
            </span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-secondary px-3 py-1 font-mono text-xs text-primary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <Button asChild variant="outline">
            <Link href="/blog">
              Explore More Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  );
}
