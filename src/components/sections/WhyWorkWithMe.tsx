"use client";

import { motion } from "framer-motion";
import {
  FileCode2,
  Zap,
  Smartphone,
  Lock,
  Search,
  Cpu,
  MessageCircle,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  FileCode2,
  Zap,
  Smartphone,
  Lock,
  Search,
  Cpu,
  MessageCircle,
  HeartHandshake,
};

export function WhyWorkWithMe() {
  return (
    <section id="why-me" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container-custom relative">
        <SectionHeading
          label="Why Me"
          title="Why Work With Me"
          description="Delivering value through expertise, reliability, and a commitment to excellence."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.features.map((feature) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass group h-full rounded-xl p-6 transition-all hover:border-primary/30"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
