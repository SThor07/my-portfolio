import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { StatsStrip } from "@/components/stats-strip";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 15% 12%, rgb(var(--accent) / 0.12), transparent 22%), radial-gradient(circle at 85% 18%, rgb(var(--accent-soft) / 0.08), transparent 18%), linear-gradient(180deg, rgb(var(--bg)) 0%, rgb(var(--bg)) 100%)"
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />

      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <StatsStrip />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
