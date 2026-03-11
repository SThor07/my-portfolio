"use client";

import { motion } from "framer-motion";

import { skillGroups } from "@/data/portfolio";

import { AnimatedSection } from "./animated-section";
import { cardReveal, lineReveal, staggerContainer, viewportOnce } from "./motion-system";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-5 py-32 sm:px-6 lg:px-8">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Stack"
          title="Capabilities organized with the same clarity I want in the systems themselves."
        />
      </AnimatedSection>

      <motion.div
        variants={staggerContainer(0.06, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-5"
      >
        {skillGroups.map((group, index) => (
          <AnimatedSection key={group.category} delay={index * 0.05}>
            <motion.div variants={staggerContainer(0.06)} whileHover={{ y: -2 }} className="space-y-5">
              <motion.div variants={cardReveal}>
                <p className="text-accent text-xs uppercase tracking-[0.3em]">{group.category}</p>
                <motion.div variants={lineReveal} className="bg-line/100 mt-4 h-px w-full origin-left" />
              </motion.div>
              <motion.div variants={staggerContainer(0.04, 0.04)} className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={cardReveal}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="border-soft text-secondary surface-transition rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] hover:-translate-y-0.5 hover:border-accent/30 hover:text-primary"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </AnimatedSection>
        ))}
      </motion.div>
    </section>
  );
}
