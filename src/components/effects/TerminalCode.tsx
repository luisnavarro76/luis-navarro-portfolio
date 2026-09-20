"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site";

const codeLines = [
  { text: 'const engineer = {', indent: 0, color: "text-purple-400" },
  { text: '  specialty: "AI + Backend",', indent: 1, color: "text-green-400" },
  { text: '  builds: ["SaaS", "AI Workflows", "APIs"],', indent: 1, color: "text-green-400" },
  {
    text: 'stack: ["Python", "FastAPI", "TypeScript"],',
    indent: 1,
    color: "text-cyan-400",
  },
  {
    text: 'cloud: ["AWS", "GCP"],',
    indent: 1,
    color: "text-cyan-400",
  },
  {
    text: 'domains: ["Healthcare", "Fintech"],',
    indent: 1,
    color: "text-green-400",
  },
  {
    text: 'approach: "Production first",',
    indent: 1,
    color: "text-yellow-400",
  },
  {
    text: "};",
    indent: 0,
    color: "text-purple-400",
  },
  { text: '', indent: 0, color: "text-purple-400" },
  {
    text: 'engineer.ship("Reliable systems"); // ✓ Production ready',
    indent: 0,
    color: "text-primary",
  },
];

export function TerminalCode() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) return prev;
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass glow-primary overflow-hidden rounded-xl pt-3">
      <div className="flex items-center gap-2 border-b border-border px-4 pb-3">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          portfolio.ts
        </span>
      </div>
      <div className="grid items-stretch md:grid-cols-2">
        {/* Terminal */}
        <div className="p-4 pr-0 font-mono text-sm leading-relaxed">
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`${line.color}`}
              style={{ paddingLeft: `${line.indent * 1.3}rem` }}
            >
              {line.text || "\u00A0"}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block h-4 w-2 bg-primary"
          />
        </div>

        {/* Photo */}
        <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-3 m-3 ml-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
            <Image
              src={siteConfig.profileImage}
              alt="Luis Navarro"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold">
              Massachusetts, USA
            </p>

            <p className="text-xs text-muted-foreground">
              Available for remote projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
