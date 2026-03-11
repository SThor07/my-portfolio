"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FormEvent, useState } from "react";

import { profile } from "@/data/portfolio";

import { AnimatedSection } from "./animated-section";
import { cardReveal, hoverLift, imageReveal, motionEase, staggerContainer, textReveal, viewportOnce } from "./motion-system";

type Status = {
  state: "idle" | "loading" | "success" | "error";
  message: string;
};

export function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({ state: "loading", message: "Sending message..." });

    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus({ state: "success", message: "Message sent. I will get back to you soon." });
    } catch {
      setStatus({
        state: "error",
        message: `Message failed to send. Please email me directly at ${profile.email}.`
      });
    }
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-5 py-32 sm:px-6 lg:px-8">
      <AnimatedSection>
        <motion.div
          variants={staggerContainer(0.1, 0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border-soft relative overflow-hidden rounded-[2.8rem] border px-8 py-14 shadow-panel sm:px-10 lg:px-14 lg:py-16"
          style={{
            background:
              "radial-gradient(circle at top left, rgb(var(--accent) / 0.16), transparent 24%), linear-gradient(180deg, rgb(var(--section)) 0%, rgb(var(--bg)) 100%)"
          }}
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:22px_22px]"
            animate={{ y: [0, -10, 0], opacity: [0.03, 0.06, 0.04] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div variants={staggerContainer(0.08)} className="max-w-2xl">
              <motion.p variants={textReveal} className="text-accent text-xs uppercase tracking-[0.32em]">
                Contact
              </motion.p>
              <motion.h2 variants={textReveal} className="text-primary mt-6 font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Let&apos;s build something meaningful.
              </motion.h2>
              <motion.p variants={textReveal} className="text-secondary mt-6 max-w-xl text-base leading-8">
                Open to software engineering, AI product, backend, and systems-oriented opportunities where technical depth and product quality both matter.
              </motion.p>

              <motion.div variants={staggerContainer(0.06, 0.08)} className="text-secondary mt-10 flex flex-wrap gap-4">
                <motion.a
                  href={`mailto:${profile.email}`}
                  variants={cardReveal}
                  {...hoverLift}
                  className="border-soft surface-transition inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm hover:border-accent/35 hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </motion.a>
                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  variants={cardReveal}
                  {...hoverLift}
                  className="border-soft surface-transition inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm hover:border-accent/35 hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </motion.a>
                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  variants={cardReveal}
                  {...hoverLift}
                  className="border-soft surface-transition inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm hover:border-accent/35 hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              variants={imageReveal}
              className="bg-section/85 border-soft rounded-[2rem] border p-6 sm:p-8"
            >
              <p className="text-accent text-xs uppercase tracking-[0.28em]">Send a message</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <label className="text-secondary grid gap-2 text-sm">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    className="border-soft text-primary rounded-2xl border bg-transparent px-4 py-3 outline-none transition focus:border-accent/50"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-secondary grid gap-2 text-sm">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="border-soft text-primary rounded-2xl border bg-transparent px-4 py-3 outline-none transition focus:border-accent/50"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="text-secondary mt-4 grid gap-2 text-sm">
                Subject
                <input
                  type="text"
                  name="_subject"
                  className="border-soft text-primary rounded-2xl border bg-transparent px-4 py-3 outline-none transition focus:border-accent/50"
                  placeholder="Role, project, or collaboration"
                />
              </label>

              <label className="text-secondary mt-4 grid gap-2 text-sm">
                Message
                <textarea
                  name="message"
                  required
                  minLength={10}
                  rows={6}
                  className="border-soft text-primary rounded-[1.5rem] border bg-transparent px-4 py-3 outline-none transition focus:border-accent/50"
                  placeholder="Tell me about the opportunity, team, or product."
                />
              </label>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="surface-transition bg-accent text-on-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status.state === "loading"}
                >
                  {status.state === "loading" ? "Sending..." : "Send Message"}
                  <motion.span
                    animate={status.state === "loading" ? { x: [0, 4, 0] } : undefined}
                    transition={{ duration: 0.9, repeat: Infinity, ease: motionEase }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </button>
                <p
                  className={`text-sm ${
                    status.state === "success"
                      ? "text-accent"
                      : status.state === "error"
                        ? "text-red-300"
                        : "text-secondary"
                }`}
                >
                  {status.message}
                </p>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
