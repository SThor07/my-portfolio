"use client";

import { motion } from "framer-motion";

import { education } from "@/data/portfolio";

import { AnimatedSection } from "./animated-section";
import { cardReveal, lineReveal, staggerContainer, viewportOnce } from "./motion-system";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-7xl px-5 py-28 sm:px-6 lg:px-8">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Education"
          title="Academic grounding in computer science, data systems, and applied machine learning."
        />
      </AnimatedSection>

      <motion.div
        variants={staggerContainer(0.08, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="border-soft space-y-8 border-t pt-8"
      >
        {education.map((item, index) => (
          <AnimatedSection
            key={item.school}
            delay={index * 0.08}
            className={`grid gap-4 py-4 lg:grid-cols-[1fr_auto] lg:items-center ${index !== 0 ? "border-soft border-t pt-8" : ""}`}
          >
            <motion.div variants={cardReveal}>
              <h3 className="text-primary font-display text-2xl font-semibold">{item.school}</h3>
              <p className="text-secondary mt-2 text-base">{item.degree}</p>
            </motion.div>
            <motion.p variants={lineReveal} className="text-accent origin-left text-sm uppercase tracking-[0.26em]">
              {item.period}
            </motion.p>
          </AnimatedSection>
        ))}
      </motion.div>
    </section>
  );
}
