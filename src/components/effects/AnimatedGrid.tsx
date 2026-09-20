"use client";

import { motion } from "framer-motion";

export function AnimatedGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <motion.div
        className="absolute -top-1/2 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="network"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="50" cy="50" r="1.5" fill="#00b4ff" />
            <line
              x1="50"
              y1="50"
              x2="100"
              y2="0"
              stroke="#00b4ff"
              strokeWidth="0.5"
            />
            <line
              x1="50"
              y1="50"
              x2="0"
              y2="100"
              stroke="#00b4ff"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>
    </div>
  );
}
