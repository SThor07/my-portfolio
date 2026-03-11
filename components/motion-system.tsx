"use client";

import { type Variants } from "framer-motion";

export const motionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  once: true,
  amount: 0.2
} as const;

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.985,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: motionEase
    }
  }
};

export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren
    }
  }
});

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: motionEase
    }
  }
};

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: motionEase
    }
  }
};

export const splitRevealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -34,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: motionEase
    }
  }
};

export const splitRevealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 34,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: motionEase
    }
  }
};

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    clipPath: "inset(0% 0% 100% 0% round 1.5rem)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0% round 1.5rem)",
    transition: {
      duration: 0.9,
      ease: motionEase
    }
  }
};

export const metricReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.97
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: motionEase
    }
  }
};

export const navbarReveal: Variants = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: motionEase
    }
  }
};

export const lineReveal: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0.45
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: motionEase
    }
  }
};

export const hoverLift = {
  whileHover: {
    y: -4,
    scale: 1.01,
    transition: {
      duration: 0.28,
      ease: motionEase
    }
  },
  whileTap: {
    scale: 0.992
  }
};
