"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Boxes, Cpu, Sparkles } from "lucide-react";

import { about } from "@/data/portfolio";

import { AnimatedSection } from "./animated-section";
import { cardReveal, hoverLift, imageReveal, staggerContainer, textReveal, viewportOnce } from "./motion-system";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-5 py-32 sm:px-6 lg:px-8">
      <AnimatedSection>
        <SectionHeading
          eyebrow="About / What I Build"
          title="I like building software where systems quality and product clarity reinforce each other."
          description={about.heading}
        />
      </AnimatedSection>

      <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
        <AnimatedSection className="bg-section border-soft relative overflow-hidden rounded-[2.4rem] border p-10 shadow-panel">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative z-10"
          >
            <motion.p variants={textReveal} className="text-accent text-sm uppercase tracking-[0.24em]" style={{ color: "rgb(var(--text-muted))" }}>
              Positioning
            </motion.p>
            <motion.h3
              variants={textReveal}
              className="text-primary mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
              style={{ color: "rgb(var(--text-primary))" }}
            >
              Founder-engineer instincts with backend depth, AI fluency, and product discipline.
            </motion.h3>

            <motion.div variants={staggerContainer(0.08)} className="mt-8 max-w-2xl space-y-6 text-sm leading-8 sm:text-base">
              {about.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph}
                  variants={textReveal}
                  className="text-secondary"
                  style={{ color: "rgb(var(--text-secondary))" }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div variants={staggerContainer(0.07, 0.08)} className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Boxes,
                  label: "Systems",
                  text: "APIs, backend services, and architecture that stay fast as complexity increases."
                },
                {
                  icon: Cpu,
                  label: "AI products",
                  text: "LLM tooling, recommendation flows, and practical ML built around user outcomes."
                },
                {
                  icon: Sparkles,
                  label: "Execution",
                  text: "Shipping polished software with performance, usability, and maintainability in balance."
                }
              ].map(({ icon: Icon, label, text }) => (
                <motion.div key={label} variants={cardReveal} {...hoverLift} className="bg-card border-soft rounded-[1.6rem] border p-5">
                  <Icon className="text-accent h-5 w-5" />
                  <p className="text-primary mt-4 font-display text-lg" style={{ color: "rgb(var(--text-primary))" }}>
                    {label}
                  </p>
                  <p className="text-secondary mt-2 text-sm leading-7" style={{ color: "rgb(var(--text-secondary))" }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="grid gap-6">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-card border-soft rounded-[2.4rem] border p-8 shadow-panel"
          >
            <div className="flex items-start gap-5">
              <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="bg-panel border-soft relative h-24 w-24 flex-none overflow-hidden rounded-[1.6rem] border"
              >
                <Image
                  src="/images/profile-circular.png"
                  alt="Portrait of Shrivatsasingh Rathore"
                  width={240}
                  height={240}
                  className="h-full w-full object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="max-w-sm"
              >
                <p className="text-accent text-xs uppercase tracking-[0.3em]" style={{ color: "rgb(var(--text-muted))" }}>
                  Builder profile
                </p>
                <h3
                  className="text-primary mt-3 font-display text-2xl font-semibold tracking-[-0.03em]"
                  style={{ color: "rgb(var(--text-primary))" }}
                >
                  Software engineer building AI-powered products and backend systems that feel deliberate.
                </h3>
                <p
                  className="text-secondary mt-4 text-sm leading-7"
                  style={{ color: "rgb(var(--text-secondary))" }}
                >
                  Less interested in demos. More interested in useful products, reliable systems, and sharp execution.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-section border-soft rounded-[2.4rem] border p-8 shadow-panel"
          >
            <p className="text-accent text-xs uppercase tracking-[0.32em]" style={{ color: "rgb(var(--text-muted))" }}>
              Capability pillars
            </p>
            <motion.div variants={staggerContainer(0.06, 0.08)} className="mt-5 space-y-3">
              {about.currentlyFocused.map((item) => (
                <motion.div
                  key={item}
                  variants={cardReveal}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="bg-card border-soft text-primary rounded-[1.4rem] border px-5 py-4 text-sm leading-7"
                  style={{ color: "rgb(var(--text-primary))" }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
