import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-4">
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Contact />
    </main>
  );
}
