"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border-2 border-transparent border-t-primary border-r-primary/50"
          />
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
            <Shield className="h-8 w-8 text-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="font-semibold">Luis Navarro</p>
          <p className="text-sm text-muted-foreground">Loading portfolio...</p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="h-0.5 w-32 origin-left bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
}
