"use client";

import { motion, type MotionProps, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

import { sectionReveal, viewportOnce } from "./motion-system";

type Props = MotionProps & {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({ children, className, delay = 0, ...props }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotion ? undefined : sectionReveal}
      initial={reduceMotion ? { opacity: 1, y: 0 } : "hidden"}
      whileInView={reduceMotion ? { opacity: 1, y: 0 } : "visible"}
      viewport={viewportOnce}
      transition={reduceMotion ? { duration: 0.01 } : { delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
