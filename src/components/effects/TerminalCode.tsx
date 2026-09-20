"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  { text: 'const developer = {', indent: 0, color: "text-purple-400" },
  { text: '  name: "Luis Navarro",', indent: 1, color: "text-green-400" },
  { text: '  role: "Sr. AI & Backend Developer",', indent: 1, color: "text-green-400" },
  { text: '  focus: ["AI", "Backend"],', indent: 1, color: "text-green-400" },
  { text: '  build: () => secureWebApps()', indent: 1, color: "text-yellow-400" },
  { text: '};', indent: 0, color: "text-purple-400" },
  { text: '', indent: 0, color: "" },
  { text: 'developer.build(); // ✓ Deployed', indent: 0, color: "text-primary" },
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
    <div className="glass glow-primary overflow-hidden rounded-xl">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          portfolio.ts
        </span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`${line.color}`}
            style={{ paddingLeft: `${line.indent * 1.5}rem` }}
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
    </div>
  );
}
