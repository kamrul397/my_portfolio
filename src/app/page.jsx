import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 sm:px-12 md:px-24">
      {/* Structural section wrappers */}
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
