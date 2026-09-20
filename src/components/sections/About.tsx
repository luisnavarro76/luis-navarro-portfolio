"use client";

import { motion } from "framer-motion";
import { Bot, ServerCog, PanelsTopLeft, CloudCog } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const highlights = [
  {
    icon: Bot,
    title: "AI & LLM Systems",
    description: "RAG, AI agents, LangGraph, OpenAI & Anthropic",
  },
  {
    icon: ServerCog,
    title: "Backend & APIs",
    description: "Python, FastAPI, Node.js, PostgreSQL & integrations",
  },
  {
    icon: PanelsTopLeft,
    title: "Full-Stack Development",
    description: "React, Next.js, TypeScript & production SaaS",
  },
  {
    icon: CloudCog,
    title: "Cloud & Infrastructure",
    description: "AWS, GCP, Docker, Terraform & CI/CD",
  }
];

export function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="container-custom">
        <SectionHeading
          label="About Me"
          title="Building AI & SaaS Products for the Real World"
          description="Senior AI, Backend & Full-Stack Engineer focused on reliable, scalable production systems."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 blur-xl" />
              <div className="glass glow-primary relative rounded-2xl p-8 md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <span className="text-2xl font-bold text-gradient">LN</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{siteConfig.name}</h3>
                    <p className="text-sm text-primary">{siteConfig.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {siteConfig.about.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["AI & LLMs", "Backend", "SaaS", "Cloud"].map(
                    (area) => (
                      <div
                        key={area}
                        className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-center"
                      >
                        <span className="text-sm font-medium">{area}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass group rounded-xl p-6 transition-all hover:border-primary/30"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="mb-2 font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
