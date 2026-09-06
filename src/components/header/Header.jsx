"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Expertise" },
  { id: "experience", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY + windowHeight >= documentHeight - 60) {
        setActive("contact");
        return;
      }

      const sectionElements = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      setActive(id);
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <header className="w-full relative z-30 pt-4 px-4 sm:px-8">
      {/* Desktop Header Navigation */}
      <div className="max-w-7xl mx-auto py-3 px-6 rounded-2xl bg-[#090e18]/80 backdrop-blur-xl border border-[#1d273a] shadow-lg shadow-black/40 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] group-hover:scale-125 transition-transform" />
          <span className="font-mono text-sm text-gray-200 font-semibold tracking-wide">
            kamrul<span className="text-[#38bdf8]">.live</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative font-medium transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_8px_#38bdf8]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Cluster */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Kamrul_Islam_CV.pdf"
            download="Kamrul_Islam_CV.pdf"
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-gray-300 bg-[#121826] border border-[#1e2a3e] hover:border-sky-500/50 hover:text-white transition-all"
            title="Download Official Resume"
          >
            📄 Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="bg-[#38bdf8] hover:bg-[#22d3ee] text-black font-semibold text-xs px-5 py-2.5 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_28px_rgba(56,189,248,0.45)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[#121826] border border-[#1e2a3e] text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 p-4 rounded-2xl bg-[#0a0f19]/95 backdrop-blur-xl border border-[#1d273a] shadow-2xl space-y-2"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === link.id
                    ? "bg-[#142036] text-[#38bdf8] font-bold border border-sky-500/30"
                    : "text-gray-300 hover:bg-[#121826] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#1d273a] flex flex-col gap-2">
              <a
                href="/Kamrul_Islam_CV.pdf"
                download="Kamrul_Islam_CV.pdf"
                className="w-full text-center py-2.5 rounded-xl text-xs font-mono font-bold text-gray-200 bg-[#121826] border border-[#1e2a3e]"
              >
                Download PDF Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="w-full text-center py-2.5 rounded-xl text-xs font-bold text-black bg-[#38bdf8]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
