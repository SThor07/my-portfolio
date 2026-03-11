"use client";

import { motion } from "framer-motion";

import { experiences } from "@/data/portfolio";

import { AnimatedSection } from "./animated-section";
import { cardReveal, hoverLift, lineReveal, staggerContainer, textReveal, viewportOnce } from "./motion-system";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-5 py-32 sm:px-6 lg:px-8">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Experience"
          title="A clean timeline of shipping faster systems, stronger infrastructure, and clearer decisions."
          description="Focused on outcomes and system-level impact rather than task lists."
        />
      </AnimatedSection>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="border-soft relative ml-2 border-l pl-8 sm:pl-12"
      >
        {experiences.map((item, index) => (
          <AnimatedSection
            key={item.id}
            delay={index * 0.08}
            className={`relative ${index !== experiences.length - 1 ? "pb-16" : ""}`}
          >
            <motion.span
              variants={lineReveal}
              className="bg-accent absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full shadow-[0_0_24px_rgba(77,163,255,0.45)] sm:-left-[3.05rem]"
            />

            <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
              <motion.div variants={textReveal}>
                <p className="text-accent text-xs uppercase tracking-[0.28em]">{item.period}</p>
                <p className="text-primary mt-4 font-display text-2xl font-semibold tracking-[-0.04em]">{item.company}</p>
                <p className="text-secondary mt-2 text-base">{item.role}</p>
              </motion.div>

              <motion.div variants={staggerContainer(0.08)} className="max-w-3xl">
                <motion.p variants={textReveal} className="text-primary font-display text-2xl font-semibold tracking-[-0.04em]">
                  {item.headline}
                </motion.p>
                <motion.p variants={textReveal} className="text-secondary mt-5 text-base leading-8">
                  {item.description}
                </motion.p>

                <motion.div variants={staggerContainer(0.06, 0.08)} className="mt-8 grid gap-3 lg:grid-cols-3">
                  {item.metrics.map((metric) => (
                    <motion.div
                      key={metric}
                      variants={cardReveal}
                      {...hoverLift}
                      className="bg-section border-soft rounded-[1.35rem] border px-5 py-4"
                    >
                      <p className="text-primary text-sm leading-7">{metric}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={staggerContainer(0.04, 0.04)} className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={cardReveal}
                      whileHover={{ y: -2 }}
                      className="border-soft text-muted rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em]"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        ))}
      </motion.div>
    </section>
  );
}
