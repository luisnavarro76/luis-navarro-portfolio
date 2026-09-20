"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Globe,
  Shield,
  Terminal,
  FileDown,
} from "lucide-react";
// import Image from "next/image";
import { siteConfig } from "@/data/site";
import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TerminalCode } from "@/components/effects/TerminalCode";

const floatingIcons = [
  { Icon: Code2, x: "10%", y: "20%", delay: 0 },
  { Icon: Shield, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Globe, x: "90%", y: "70%", delay: 1 },
  { Icon: Database, x: "5%", y: "75%", delay: 1.5 },
  { Icon: Terminal, x: "75%", y: "45%", delay: 2 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32"
    >
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="h-12 w-12 text-primary" strokeWidth={1} />
          </motion.div>
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-8">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm text-primary font-medium">
                Available for Projects • U.S. & Global
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {siteConfig.name.split(" ").map((word, i) => (
                <span key={i}>
                  {i === 0 ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    ` ${word}`
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-lg font-medium text-primary md:text-xl"
            >
              {siteConfig.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-lg text-muted-foreground leading-relaxed"
            >
              {siteConfig.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View Projects
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
              <Button size="lg" variant="glass" asChild>
                <a
                  href={siteConfig.resumeUrl}
                  download="Luis-Navarro-Resume.pdf"
                  aria-label="Download resume PDF"
                >
                  Resume
                  <FileDown className="transition-transform group-hover:translate-y-0.5" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative min-w-0"
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-50" />
            <TerminalCode />

            {/* <div className="mt-6 grid grid-cols-3 gap-3">
              {["AI Agent", "Python", "LLMs", "RAG", "FastAPI", "Cloud"].map(
                (tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="glass rounded-lg px-3 py-2 text-center font-mono text-xs text-primary"
                  >
                    {tech}
                  </motion.div>
                )
              )}
            </div> */}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="h-8 w-5 rounded-full border-2 border-primary/30 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-primary mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
