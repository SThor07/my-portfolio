"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { cardReveal, motionEase, navbarReveal, staggerContainer } from "./motion-system";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Impact", href: "#impact" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  const sectionIds = useMemo(
    () => ["hero", "projects", "impact", "about", "experience", "skills", "education", "contact"],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.45, 0.7]
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <motion.header
      variants={navbarReveal}
      initial="hidden"
      animate="visible"
      className="bg-base/78 sticky top-0 z-50 border-b border-soft backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <motion.a
          href="#hero"
          className="text-primary font-display text-sm font-semibold tracking-tight sm:text-base"
          style={{ color: "rgb(var(--text-primary))" }}
          whileHover={{ y: -1 }}
        >
          Shrivatsasingh Rathore
        </motion.a>

        <motion.button
          type="button"
          className="border-soft text-primary inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          whileTap={{ scale: 0.96 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
              transition={{ duration: 0.24, ease: motionEase }}
              className="inline-flex"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <motion.div
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-1 lg:flex"
        >
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                variants={cardReveal}
                whileHover={{ y: -1 }}
                className={`relative rounded-full px-4 py-2 text-sm transition ${
                  isActive ? "text-primary" : "text-muted hover:text-primary"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="bg-panel/35 border-soft absolute inset-0 -z-10 rounded-full border"
                    transition={{ type: "spring", stiffness: 360, damping: 30, mass: 0.9 }}
                  />
                ) : null}
                {link.label}
              </motion.a>
            );
          })}
          <ThemeToggle />
          <motion.a
            href="/files/Shrivatsasingh_Rathore_Resume.pdf"
            download
            variants={cardReveal}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="border-soft text-primary ml-3 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-panel/35"
          >
            Resume
          </motion.a>
        </motion.div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.42, ease: motionEase }}
            className="bg-base/95 border-soft overflow-hidden border-t px-5 py-4 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              variants={staggerContainer(0.06, 0.04)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mx-auto flex max-w-7xl flex-col gap-2"
            >
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={cardReveal}
                  className="text-muted rounded-2xl px-4 py-3 text-sm transition hover:bg-panel/35 hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={cardReveal} className="mt-2 flex items-center justify-center">
                <ThemeToggle />
              </motion.div>
              <motion.a
                href="/files/Shrivatsasingh_Rathore_Resume.pdf"
                download
                variants={cardReveal}
                className="border-soft text-primary mt-2 inline-flex items-center justify-center rounded-2xl border px-4 py-3 text-sm font-medium"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
