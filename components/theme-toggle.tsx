"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "./theme-provider";
import { motionEase } from "./motion-system";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="surface-transition relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-soft text-primary hover:border-soft hover:bg-panel/40"
    >
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow:
            resolvedTheme === "dark"
              ? "0 0 0 1px rgba(255,255,255,0.08), 0 12px 32px rgba(124,198,254,0.12)"
              : "0 0 0 1px rgba(15,23,42,0.08), 0 12px 32px rgba(59,130,246,0.12)"
        }}
        transition={{ duration: 0.45, ease: motionEase }}
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={resolvedTheme}
          initial={{ opacity: 0, rotate: -24, scale: 0.75, y: 2 }}
          animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
          exit={{ opacity: 0, rotate: 24, scale: 0.75, y: -2 }}
          transition={{ duration: 0.3, ease: motionEase }}
          className="relative inline-flex"
        >
          {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
