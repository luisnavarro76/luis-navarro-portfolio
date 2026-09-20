import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { GitHubIcon } from "@/components/ui/social-icons";
import { projects } from "@/data/projects";
import {
  constructMetadata,
  getCaseStudySchema,
  getBreadcrumbSchema,
} from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return constructMetadata({
      title: "Project Not Found",
      description: "The requested project case study does not exist.",
    });
  }

  return constructMetadata({
    title: `${project.name} - ${project.category} Case Study`,
    description: project.description,
    path: `/projects/${project.slug}`,
    keywords: [project.name, project.category, ...project.tags],
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isGitHub = project.url.includes("github.com");
  const breadcrumbItems = [
    { label: "Projects", href: "/projects" },
    { label: project.name, href: `/projects/${project.slug}` },
  ];

  const caseStudySchema = getCaseStudySchema(project);
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 font-mono text-xs text-primary">
              {project.category}
            </span>
            {project.featured && (
              <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 font-mono text-xs text-amber-400">
                Featured Case Study
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            {project.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Visual Header / Banner */}
        <div className={`relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br ${project.gradient} border border-border`}>
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass rounded-2xl p-8 max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-foreground">{project.name}</h2>
              <p className="text-xs font-mono text-primary">{project.tags.join(" • ")}</p>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {/* Challenge */}
            {project.challenge && (
              <section className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  The Problem & Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </section>
            )}

            {/* Solution */}
            {project.solution && (
              <section className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Technical Solution & Engineering
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </section>
            )}

            {/* Key Highlights */}
            {project.keyHighlights && project.keyHighlights.length > 0 && (
              <section className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Key Deliverables & Performance Highlights
                </h2>
                <div className="space-y-3">
                  {project.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-foreground">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="px-3 py-1 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Live Link Button */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-foreground">
                Explore Project
              </h3>
              <Button asChild size="lg" className="w-full">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}`}
                >
                  {isGitHub ? (
                    <>
                      View Repository
                      <GitHubIcon className="h-5 w-5 ml-2" />
                    </>
                  ) : (
                    <>
                      Visit Live Website
                      <ExternalLink className="h-5 w-5 ml-2" />
                    </>
                  )}
                </a>
              </Button>
            </div>

            {/* CTA */}
            <div className="glass rounded-2xl p-6 border-primary/30 glow-primary">
              <h3 className="text-lg font-bold mb-2 text-foreground">
                Need a Similar Solution?
              </h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                I help businesses design, build, and optimize custom web applications tailored to their market goals.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/#contact">
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
