"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers2, Sparkles } from "lucide-react";

import { projects } from "@/data/portfolio";

import { AnimatedSection } from "./animated-section";
import {
  cardReveal,
  hoverLift,
  imageReveal,
  motionEase,
  splitRevealLeft,
  splitRevealRight,
  staggerContainer,
  textReveal,
  viewportOnce
} from "./motion-system";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-5 py-32 sm:px-6 lg:px-8">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Selected Work"
          title="Product case studies, not project tiles."
          description="Built to communicate shipped thinking, technical seriousness, and measurable outcomes within a few seconds."
        />
      </AnimatedSection>

      <div className="space-y-10">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1;
          const Icon = index === 0 ? Layers2 : Sparkles;

          return (
            <AnimatedSection key={project.id} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="bg-section border-soft surface-transition overflow-hidden rounded-[2.5rem] border shadow-panel"
              >
                <div className={`grid gap-0 xl:grid-cols-[0.92fr_1.08fr] ${reversed ? "xl:[&>*:first-child]:order-2 xl:[&>*:last-child]:order-1" : ""}`}>
                  <motion.div
                    variants={reversed ? splitRevealRight : splitRevealLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="bg-section border-soft border-b p-8 xl:border-b-0 xl:border-r"
                  >
                    <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="visible" viewport={viewportOnce} className="max-w-none">
                      <div className="flex items-center justify-between">
                        <motion.p variants={textReveal} className="text-accent text-xs uppercase tracking-[0.3em]" style={{ color: "rgb(var(--text-muted))" }}>
                          {project.category}
                        </motion.p>
                        <motion.span
                          variants={cardReveal}
                          whileHover={{ rotate: 4, scale: 1.04 }}
                          className="bg-card border-soft text-accent inline-flex h-12 w-12 items-center justify-center rounded-2xl border"
                        >
                          <Icon className="h-5 w-5" />
                        </motion.span>
                      </div>

                      <motion.h3
                        variants={cardReveal}
                        className="text-primary mt-6 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
                        style={{ color: "rgb(var(--text-primary))" }}
                      >
                        {project.name}
                      </motion.h3>
                      <motion.p
                        variants={cardReveal}
                        className="text-secondary mt-5 max-w-2xl text-base leading-8"
                        style={{ color: "rgb(var(--text-secondary))" }}
                      >
                        {project.summary}
                      </motion.p>

                      <div className="mt-7 space-y-5">
                        <motion.div variants={cardReveal}>
                          <p className="text-muted text-xs uppercase tracking-[0.24em]" style={{ color: "rgb(var(--text-muted))" }}>
                            Problem
                          </p>
                          <p
                            className="text-secondary mt-2.5 max-w-2xl text-sm leading-7"
                            style={{ color: "rgb(var(--text-secondary))" }}
                          >
                            {project.problem}
                          </p>
                        </motion.div>
                        <motion.div variants={cardReveal}>
                          <p className="text-muted text-xs uppercase tracking-[0.24em]" style={{ color: "rgb(var(--text-muted))" }}>
                            Implementation
                          </p>
                          <p
                            className="text-secondary mt-2.5 max-w-2xl text-sm leading-7"
                            style={{ color: "rgb(var(--text-secondary))" }}
                          >
                            {project.solution}
                          </p>
                        </motion.div>
                      </div>

                      <motion.div variants={cardReveal} className="mt-7">
                        <p className="text-muted text-xs uppercase tracking-[0.24em]" style={{ color: "rgb(var(--text-muted))" }}>
                          Stack
                        </p>
                        <motion.div variants={staggerContainer(0.04, 0.04)} className="mt-3 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <motion.span
                              key={tech}
                              variants={cardReveal}
                              whileHover={{ y: -2, scale: 1.02 }}
                              className="bg-card border-soft text-secondary rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em]"
                              style={{ color: "rgb(var(--text-secondary))" }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={reversed ? splitRevealLeft : splitRevealRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="bg-section relative overflow-hidden p-8"
                  >
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      animate={{ opacity: [0.5, 0.9, 0.6], scale: [1, 1.04, 1] }}
                      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        background:
                          index === 0
                            ? "radial-gradient(circle at 78% 18%, rgb(var(--accent-soft) / 0.12), transparent 22%), radial-gradient(circle at 18% 82%, rgb(var(--accent) / 0.1), transparent 24%)"
                            : "radial-gradient(circle at 18% 18%, rgb(var(--accent) / 0.12), transparent 22%), radial-gradient(circle at 84% 78%, rgb(var(--accent-soft) / 0.1), transparent 24%)"
                      }}
                    />
                    <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative z-10">
                      <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
                        <motion.div variants={imageReveal} className="bg-card border-soft rounded-[2rem] border p-6 shadow-panel">
                          <p className="text-accent text-xs uppercase tracking-[0.3em]" style={{ color: "rgb(var(--text-muted))" }}>
                            Impact
                          </p>
                          <motion.div variants={staggerContainer(0.07, 0.08)} className="mt-5 grid gap-3">
                            {project.impact.map((item, itemIndex) => (
                              <motion.div
                                key={item}
                                variants={cardReveal}
                                transition={{ duration: 0.55, delay: itemIndex * 0.04, ease: motionEase }}
                                className="bg-panel border-soft surface-transition rounded-[1.5rem] border px-5 py-4 hover:-translate-y-0.5 hover:border-accent/30"
                                whileHover={{ y: -4, scale: 1.01, boxShadow: "0 20px 50px rgba(0,0,0,0.14)" }}
                              >
                                <p className="text-primary text-sm leading-7" style={{ color: "rgb(var(--text-primary))" }}>
                                  {item}
                                </p>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>

                        <div className="grid gap-4">
                          <motion.div
                            variants={imageReveal}
                            {...hoverLift}
                            className="bg-card border-soft rounded-[1.9rem] border p-6 shadow-panel"
                          >
                            <p className="text-muted text-xs uppercase tracking-[0.28em]" style={{ color: "rgb(var(--text-muted))" }}>
                              Mock surface
                            </p>
                            <div className="mt-5 space-y-3">
                              <div className="bg-panel border-soft surface-transition rounded-[1.3rem] border px-4 py-3 hover:-translate-y-0.5">
                                <p className="text-primary text-sm font-medium" style={{ color: "rgb(var(--text-primary))" }}>
                                  {index === 0 ? "Recommendation engine live" : "Guided hint engine active"}
                                </p>
                                <p className="text-muted mt-1 text-xs uppercase tracking-[0.2em]" style={{ color: "rgb(var(--text-muted))" }}>
                                  {index === 0 ? "Contextual filtering · scoring · state sync" : "Prompt control · overlays · on-device inference"}
                                </p>
                              </div>
                              <div className="bg-panel border-soft surface-transition rounded-[1.3rem] border px-4 py-3 hover:-translate-y-0.5">
                                <p className="text-primary text-sm font-medium" style={{ color: "rgb(var(--text-primary))" }}>
                                  {index === 0 ? "Fast query flow" : "Low-friction learning flow"}
                                </p>
                                <p className="text-muted mt-1 text-xs uppercase tracking-[0.2em]" style={{ color: "rgb(var(--text-muted))" }}>
                                  {index === 0 ? "Indexed data model · sub-300ms reads" : "Hints without solution dumping"}
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            variants={imageReveal}
                            {...hoverLift}
                            className="bg-card border-soft flex flex-col justify-between rounded-[1.9rem] border p-6 shadow-panel"
                          >
                            <div>
                              <p className="text-muted text-xs uppercase tracking-[0.28em]" style={{ color: "rgb(var(--text-muted))" }}>
                                Actions
                              </p>
                              <div className="mt-5 flex flex-wrap gap-3">
                                {project.href ? (
                                  <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="surface-transition inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-on-accent hover:-translate-y-0.5"
                                  >
                                    <Github className="h-4 w-4" />
                                    GitHub
                                  </a>
                                ) : (
                                  <span className="bg-panel border-soft text-secondary inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium">
                                    Private repository
                                  </span>
                                )}
                                <a
                                  href={project.demoHref ?? "#contact"}
                                  className="bg-panel border-soft text-primary surface-transition inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 hover:border-accent/35"
                                >
                                  <ArrowUpRight className="h-4 w-4" />
                                  {project.demoHref ? "Live Demo" : "Request Walkthrough"}
                                </a>
                              </div>
                            </div>

                            <div className="bg-panel border-soft mt-8 rounded-[1.5rem] border px-4 py-4">
                              <p className="text-muted text-xs uppercase tracking-[0.24em]" style={{ color: "rgb(var(--text-muted))" }}>
                                Product framing
                              </p>
                              <p
                                className="text-secondary mt-3 text-sm leading-7"
                                style={{ color: "rgb(var(--text-secondary))" }}
                              >
                                {index === 0
                                  ? "Built like a recommendation product, not just a mobile app demo."
                                  : "Built like a focused AI workflow tool, not just another coding assistant."}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
