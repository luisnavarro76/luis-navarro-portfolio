"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function Experience() {
  return (
    <section id="process" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container-custom relative">
        <SectionHeading
          label="ENGINEERING APPROACH"
          title="How I Build Production Systems"
          description="A practical process for understanding the product, designing the right architecture, shipping safely, and improving from real production feedback."
        />

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Timeline */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2 md:-translate-x-px" />

          {siteConfig.workflow.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <ScrollReveal key={step.step} delay={index * 0.08}>
                <div
                  className={`relative mb-14 flex items-start last:mb-0 md:min-h-[150px] ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Desktop card */}
                  <div
                    className={`hidden flex-1 md:flex ${
                      isLeft
                        ? "justify-end pr-14"
                        : "justify-start pl-14"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="glass group w-full max-w-md rounded-2xl border border-border/60 p-6 transition-colors duration-300 hover:border-primary/30"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="font-mono text-xs font-medium tracking-wider text-primary">
                          {String(step.step).padStart(2, "0")}
                        </span>

                        <div className="h-px flex-1 bg-border transition-colors group-hover:bg-primary/30" />
                      </div>

                      <h3 className="mb-2 text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline node */}
                  <div className="relative z-10 flex w-12 shrink-0 justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-background shadow-[0_0_20px_rgba(var(--primary),0.08)]"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    </motion.div>
                  </div>

                  {/* Mobile card */}
                  <div className="ml-5 flex-1 md:hidden">
                    <div className="glass rounded-2xl border border-border/60 p-5">
                      <span className="mb-2 block font-mono text-xs font-medium tracking-wider text-primary">
                        {String(step.step).padStart(2, "0")}
                      </span>

                      <h3 className="mb-2 text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}