"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, BookOpen } from "lucide-react";
import { GitHubIcon } from "@/components/ui/social-icons";
import {
  projects,
  projectCategories,
  projectCount,
  type ProjectCategory,
} from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";

const INITIAL_VISIBLE = 6;

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const isGitHub = project.url.includes("github.com");

  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all hover:border-primary/30 hover:glow-primary"
    >
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass rounded-xl p-5 transition-transform group-hover:scale-105">
            <div className="mb-2 flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="space-y-1.5 font-mono text-[10px]">
              <div className="h-1.5 w-28 rounded bg-primary/30" />
              <div className="h-1.5 w-20 rounded bg-primary/20" />
              <div className="mt-2 h-12 w-36 rounded border border-primary/20 bg-primary/5" />
            </div>
          </div>
        </div>

        <div className="absolute top-3 right-3 flex gap-2">
          {project.featured && (
            <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary backdrop-blur-sm">
              Featured
            </span>
          )}
          <span className="rounded-full bg-background/80 px-2.5 py-0.5 text-[10px] font-medium backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={`View ${project.name} Case Study`}
        >
          <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
            <BookOpen className="h-4 w-4" />
            <span>Read Case Study</span>
          </div>
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold group-hover:text-primary transition-colors">
          <Link href={`/projects/${project.slug}`}>
            {project.name}
          </Link>
        </h3>
        <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full text-xs" size="sm" asChild>
            <Link href={`/projects/${project.slug}`}>
              Case Study
            </Link>
          </Button>

          <Button variant="glass" className="w-full text-xs group/btn" size="sm" asChild>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name}`}
            >
              {isGitHub ? (
                <>
                  GitHub
                  <GitHubIcon className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:scale-110" />
                </>
              ) : (
                <>
                  Live Site
                  <ExternalLink className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </>
              )}
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section id="projects" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="container-custom relative">
        <SectionHeading
          label="Portfolio"
          title={`${projectCount}+ Projects Built`}
          description="A collection of client websites, web applications, online tools, and security utilities."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass text-muted-foreground hover:text-primary hover:border-primary/30"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({projects.filter((p) => p.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project) => (
                <StaggerItem key={project.slug}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        )}

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisibleCount((c) => c + 6)}
            >
              Show More Projects
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                ({filteredProjects.length - visibleCount} remaining)
              </span>
            </Button>
          </div>
        )}

        {!hasMore && filteredProjects.length > INITIAL_VISIBLE && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Showing all {filteredProjects.length} projects
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>
        )}
      </div>
    </section>
  );
}
