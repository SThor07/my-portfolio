"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { heroStats } from "@/data/portfolio";

import { lineReveal, metricReveal, motionEase, staggerContainer, viewportOnce } from "./motion-system";

function AnimatedMetricValue({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduceMotion) {
      setDisplay(value);
      return;
    }

    const match = value.match(/^([<]?)(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, rawNumber, suffix] = match;
    const target = Number(rawNumber);
    const controls = animate(0, target, {
      duration: 1.2,
      ease: motionEase,
      onUpdate(latest) {
        setDisplay(`${prefix}${Math.round(latest)}${suffix}`);
      }
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <p ref={ref} className="text-primary font-display text-6xl font-semibold tracking-[-0.06em] sm:text-7xl">
      {display}
    </p>
  );
}

export function StatsStrip() {
  return (
    <section id="impact" className="bg-section/70 border-y border-soft py-24">
      <motion.div
        variants={staggerContainer(0.08, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-3 lg:px-8"
      >
        {heroStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={metricReveal}
            className="text-center lg:text-left"
          >
            <AnimatedMetricValue value={stat.value} />
            <motion.p
              variants={metricReveal}
              transition={{ duration: 0.6, delay: index * 0.04, ease: motionEase }}
              className="text-secondary mt-4 max-w-[16rem] text-sm uppercase tracking-[0.24em]"
            >
              {stat.label}
            </motion.p>
            <motion.div
              variants={lineReveal}
              className="bg-accent/35 mt-6 h-px w-full origin-left"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
