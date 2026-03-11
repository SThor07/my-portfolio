"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

import { heroStats, profile, quickStats } from "@/data/portfolio";

import {
  cardReveal,
  hoverLift,
  imageReveal,
  motionEase,
  staggerContainer,
  textReveal
} from "./motion-system";

const headlineLines = [
  "I build intelligent products",
  "where AI, backend systems,",
  "and user experience converge."
];

const promptText =
  "Software Engineer | AI & Machine Learning Engineer | Data Scientist | LLM, RAG, Python, AWS, SQL | MS Data Science @ ASU";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [typedPrompt, setTypedPrompt] = useState(reduceMotion ? promptText : "");
  const [promptComplete, setPromptComplete] = useState(reduceMotion);
  const [showHeadline, setShowHeadline] = useState(reduceMotion);
  const [showSupporting, setShowSupporting] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;

    let index = 0;
    let typingTimer: ReturnType<typeof setTimeout> | undefined;
    let revealTimer: ReturnType<typeof setTimeout> | undefined;

    const typeNext = () => {
      index += 1;
      setTypedPrompt(promptText.slice(0, index));

      if (index < promptText.length) {
        typingTimer = setTimeout(typeNext, 24);
        return;
      }

      setPromptComplete(true);
      revealTimer = setTimeout(() => {
        setShowHeadline(true);
      }, 380);
    };

    typingTimer = setTimeout(typeNext, 120);

    return () => {
      if (typingTimer) clearTimeout(typingTimer);
      if (revealTimer) clearTimeout(revealTimer);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !showHeadline) return;

    const timer = setTimeout(() => {
      setShowSupporting(true);
    }, 920);

    return () => clearTimeout(timer);
  }, [reduceMotion, showHeadline]);

  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        animate={reduceMotion ? undefined : { opacity: [0.64, 1, 0.78], scale: [1, 1.05, 1], x: [0, 16, -10, 0] }}
        transition={reduceMotion ? undefined : { duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 18% 24%, rgb(var(--accent) / 0.18), transparent 24%), radial-gradient(circle at 78% 20%, rgb(var(--accent-soft) / 0.12), transparent 18%), linear-gradient(180deg, rgb(var(--text-primary) / 0.018) 0%, transparent 55%)"
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[12%] -z-10 h-[34rem]"
        animate={reduceMotion ? undefined : { x: [0, 20, -18, 0], opacity: [0.22, 0.34, 0.24] }}
        transition={reduceMotion ? undefined : { duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at center, rgb(var(--accent) / 0.16), transparent 34%)"
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl gap-16 px-5 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <motion.div
          variants={reduceMotion ? undefined : staggerContainer(0.12, 0.08)}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="max-w-5xl"
        >
          <motion.p
            variants={reduceMotion ? undefined : textReveal}
            className="text-accent text-xs font-medium uppercase tracking-[0.34em]"
          >
            Shrivatsasingh Rathore
          </motion.p>

          <div className="mt-7 overflow-hidden">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : {
                      opacity: showHeadline ? 0.42 : 1,
                      y: 0
                    }
              }
              transition={reduceMotion ? undefined : { duration: 0.4, delay: 0.08, ease: motionEase }}
              className="text-muted font-mono text-xs tracking-[0.08em] sm:text-sm"
              style={{ color: "rgb(var(--text-muted))" }}
            >
              <span className="text-accent mr-2" aria-hidden>
                &gt;
              </span>
              {typedPrompt}
              {!promptComplete ? (
                <motion.span
                  aria-hidden
                  className="ml-1 inline-block h-[1.05em] w-px bg-current align-[-0.15em]"
                  animate={reduceMotion ? undefined : { opacity: [0, 1, 0] }}
                  transition={reduceMotion ? undefined : { duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                />
              ) : null}
            </motion.p>
          </div>

          <motion.div
            variants={reduceMotion ? undefined : staggerContainer(0.08)}
            initial={reduceMotion ? false : "hidden"}
            animate={showHeadline ? "visible" : "hidden"}
            className="mt-8 space-y-2 sm:space-y-3"
          >
            {headlineLines.map((line, index) => (
              <div key={line} className="overflow-hidden">
                <motion.h1
                  initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(9px)", clipPath: "inset(0 0 100% 0)" }}
                  animate={
                    reduceMotion || showHeadline
                      ? { opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)" }
                      : { opacity: 0, y: 34, filter: "blur(9px)", clipPath: "inset(0 0 100% 0)" }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 0.78,
                          delay: index * 0.11,
                          ease: motionEase
                        }
                  }
                  className={`font-display text-[3.2rem] font-semibold tracking-[-0.06em] sm:text-[4.4rem] lg:text-[6rem] lg:leading-[0.94] ${
                    index === 0 ? "text-primary" : "text-secondary"
                  }`}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={
              reduceMotion || showSupporting
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 18, filter: "blur(6px)" }
            }
            transition={reduceMotion ? undefined : { duration: 0.5, ease: motionEase }}
            className="text-secondary mt-8 max-w-2xl text-base leading-8 sm:text-lg"
          >
            Software engineer focused on product-grade AI tools, scalable backend workflows, and software that feels calm, fast, and deliberate in real use.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion || showSupporting ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={reduceMotion ? undefined : { duration: 0.48, delay: 0.08, ease: motionEase }}
            className="mt-12 flex flex-wrap gap-3"
          >
            <motion.a
              href="#projects"
              {...hoverLift}
              className="surface-transition bg-accent text-on-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:-translate-y-0.5"
            >
              View Work
              <motion.span
                animate={reduceMotion ? undefined : { x: [0, 3, 0] }}
                transition={reduceMotion ? undefined : { duration: 2.8, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.a>
            <motion.a
              href={profile.resume}
              download
              {...hoverLift}
              className="surface-transition border-soft text-primary inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 hover:bg-panel/35"
            >
              <Download className="h-4 w-4" />
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion || showSupporting ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={reduceMotion ? undefined : { duration: 0.48, delay: 0.16, ease: motionEase }}
            className="text-secondary mt-12 flex items-center gap-4"
          >
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              variants={reduceMotion ? undefined : cardReveal}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="surface-transition border-soft inline-flex h-11 w-11 items-center justify-center rounded-full border hover:border-accent/35 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </motion.a>
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              variants={reduceMotion ? undefined : cardReveal}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="surface-transition border-soft inline-flex h-11 w-11 items-center justify-center rounded-full border hover:border-accent/35 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              variants={reduceMotion ? undefined : cardReveal}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="surface-transition border-soft inline-flex h-11 w-11 items-center justify-center rounded-full border hover:border-accent/35 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion || showSupporting ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={reduceMotion ? undefined : { duration: 0.52, delay: 0.24, ease: motionEase }}
            className="mt-14 grid gap-3 sm:max-w-3xl sm:grid-cols-3"
          >
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={reduceMotion ? undefined : cardReveal}
                whileHover={{ y: -3, scale: 1.01 }}
                className="bg-card/80 border-soft rounded-[1.4rem] border px-5 py-4 shadow-panel backdrop-blur-sm"
              >
                <p className="text-primary font-display text-2xl tracking-[-0.05em]">{stat.value}</p>
                <p className="text-muted mt-2 text-[11px] uppercase tracking-[0.22em]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : imageReveal}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="relative hidden lg:block"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 0.6, 0] }}
            transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="ml-auto flex max-w-[30rem] flex-col gap-5 pt-12"
          >
            <motion.div
              variants={reduceMotion ? undefined : staggerContainer(0.08, 0.08)}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              className="bg-section/90 border-soft rounded-[2rem] border p-8 shadow-panel backdrop-blur-sm"
            >
              <p className="text-accent text-[11px] uppercase tracking-[0.32em]">Product frame</p>
              <div className="mt-8 space-y-5">
                <motion.div variants={reduceMotion ? undefined : cardReveal} className="border-soft border-l pl-5">
                  <p className="text-muted text-sm uppercase tracking-[0.22em]">AI systems</p>
                  <p className="text-primary mt-2 text-lg">LLM workflows, recommendation engines, guided tooling.</p>
                </motion.div>
                <motion.div variants={reduceMotion ? undefined : cardReveal} className="border-soft border-l pl-5">
                  <p className="text-muted text-sm uppercase tracking-[0.22em]">Backend</p>
                  <p className="text-primary mt-2 text-lg">APIs, observability, caching, data flow performance.</p>
                </motion.div>
                <motion.div variants={reduceMotion ? undefined : cardReveal} className="border-soft border-l pl-5">
                  <p className="text-muted text-sm uppercase tracking-[0.22em]">Product quality</p>
                  <p className="text-primary mt-2 text-lg">Software that feels polished because the systems underneath are disciplined.</p>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                {...hoverLift}
                className="bg-section/90 border-soft rounded-[1.8rem] border p-6 shadow-panel backdrop-blur-sm"
              >
                <p className="text-muted text-xs uppercase tracking-[0.28em]">Current direction</p>
                <p className="text-primary mt-4 font-display text-2xl font-semibold tracking-[-0.04em]">
                  AI builders need stronger product judgment.
                </p>
              </motion.div>
              <motion.div
                {...hoverLift}
                className="bg-section/90 border-soft rounded-[1.8rem] border p-6 shadow-panel backdrop-blur-sm"
              >
                <p className="text-muted text-xs uppercase tracking-[0.28em]">Focus</p>
                <p className="text-secondary mt-4 text-lg leading-8">Practical software, measured performance, calmer UX.</p>
              </motion.div>
            </div>

            <motion.div
              variants={reduceMotion ? undefined : staggerContainer(0.05)}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              className="flex flex-wrap gap-2"
            >
              {quickStats.map((item) => (
                <motion.span
                  key={item.label}
                  variants={reduceMotion ? undefined : cardReveal}
                  whileHover={{ y: -2 }}
                  className="bg-card/75 border-soft rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-secondary backdrop-blur-sm"
                >
                  {item.value}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
