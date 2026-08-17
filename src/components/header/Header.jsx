"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ResumeModal from "@/components/ResumeModal";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY + windowHeight >= documentHeight - 50) {
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
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md rounded-full shadow-md dark:shadow-slate-950/50 border border-slate-200/80 dark:border-slate-800 px-3 py-1.5 sm:px-5 sm:py-2 max-w-[96vw] sm:max-w-max transition-all">
        <div className="flex items-center gap-1 sm:gap-4">
          {/* Navigation Links */}
          <ul className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`transition-all px-2.5 sm:px-3 py-1.5 rounded-full inline-block ${
                    active === link.id
                      ? "text-blue-600 dark:text-sky-400 bg-blue-50/80 dark:bg-slate-800 font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-750 mx-0.5 sm:mx-1" />

          {/* Interactive Resume Button */}
          <button
            onClick={() => setIsResumeOpen(true)}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
            title="View Interactive Realistic Resume"
          >
            <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="hidden xs:inline">Resume</span>
          </button>

          {/* Dark Mode Toggle Button */}
          <ThemeToggle />
        </div>
      </nav>

      {/* Global Realistic Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
