import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--bg) / <alpha-value>)",
        section: "rgb(var(--section) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        elevated: "rgb(var(--panel) / <alpha-value>)",
        line: "rgba(var(--border) / <alpha-value>)",
        ink: "rgb(var(--text-primary) / <alpha-value>)",
        body: "rgb(var(--text-secondary) / <alpha-value>)",
        secondary: "rgb(var(--text-secondary) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent-soft) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["Manrope", "Avenir Next", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Sora", "Avenir Next", "Segoe UI", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 32px 100px rgba(0, 0, 0, 0.36)",
        panel: "0 12px 40px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)"
      },
      animation: {
        "float-slow": "floatSlow 12s ease-in-out infinite",
        "float-slower": "floatSlow 18s ease-in-out infinite",
        "marquee": "marquee 26s linear infinite"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-12px,0)" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
