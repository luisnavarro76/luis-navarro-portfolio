"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";

const categories = [
  "AI & LLM",
  "Backend & APIs",
  "Frontend",
  "Data & Cloud",
] as const;

const categoryDescriptions = {
  "AI & LLM":
    "Production AI systems, retrieval, agents, and LLM orchestration.",
  "Backend & APIs":
    "Services, integrations, application logic, and reliable backend systems.",
  Frontend:
    "Modern SaaS interfaces, dashboards, and full-stack product experiences.",
  "Data & Cloud":
    "Databases, infrastructure, containers, deployment, and cloud services.",
};

export function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container-custom relative">
        <SectionHeading
          label="TECH STACK"
          title="Technical Expertise"
          description="Technologies I use to build production AI, SaaS, and backend systems."
        />

        <div className="mt-14 space-y-14">
          {categories.map((category) => {
            const skills = siteConfig.skills.filter(
              (skill) => skill.category === category
            );

            if (!skills.length) return null;

            return (
              <div key={category}>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary">
                    {category}
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {categoryDescriptions[category]}
                  </p>
                </div>

                <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {skills.map((skill) => (
                    <StaggerItem key={`${category}-${skill.name}`}>
                      <motion.div
                        whileHover={{
                          y: -4,
                          scale: 1.01,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                          glass
                          group
                          h-full
                          rounded-xl
                          border
                          border-border/60
                          p-5
                          transition-colors
                          duration-300
                          hover:border-primary/40
                        "
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />

                          <h4 className="font-semibold tracking-tight">
                            {skill.name}
                          </h4>
                        </div>

                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {skill.description}
                        </p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}