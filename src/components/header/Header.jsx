"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import ResumeModal from "@/components/ResumeModal";

const links = [
  {
    id: "home",
    label: "Home",
    description: "Welcome & intro",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    description: "Full-stack apps & demos",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    description: "Tech stack & tools",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    description: "Background & journey",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    description: "Let's collaborate",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active section scroll tracking
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

  // Close mobile menu on Escape key press or window resize to desktop
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

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
    <header className="relative">
      {/* ========================================================================= */}
      {/* 1. DESKTOP NAVIGATION PILL (Screens >= 768px / md:)                         */}
      {/* ========================================================================= */}
      <nav
        aria-label="Desktop Navigation"
        className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md rounded-full shadow-lg shadow-slate-900/5 dark:shadow-slate-950/50 border border-slate-200/80 dark:border-slate-800 px-4 py-2 transition-all"
      >
        <div className="flex items-center gap-2 lg:gap-3">
          {/* Navigation Links */}
          <ul className="flex items-center gap-1 text-sm font-medium">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id} className="relative">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`relative z-10 px-3.5 py-1.5 rounded-full inline-block transition-colors duration-200 ${
                      isActive
                        ? "text-blue-600 dark:text-sky-400 font-bold"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>

                  {/* Smooth Animated Active Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavDesktop"
                      className="absolute inset-0 bg-blue-50/90 dark:bg-slate-800 rounded-full -z-0 border border-blue-200/50 dark:border-slate-700/60"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="h-5 w-px bg-slate-200 dark:bg-slate-700 mx-1" />

          {/* Interactive Realistic Resume Button */}
          <button
            onClick={() => setIsResumeOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            title="View Interactive Realistic Resume"
          >
            <svg
              className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Resume</span>
          </button>

          {/* Dark Mode Toggle Button */}
          <ThemeToggle />
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 2. MOBILE FLOATING HEADER BAR (Screens < 768px / md:)                       */}
      {/* ========================================================================= */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed top-3 left-3 right-3 z-50 max-w-lg mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-lg shadow-slate-900/5 dark:shadow-slate-950/40 border border-slate-200/80 dark:border-slate-800 px-3.5 py-2 transition-all"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-xs group-hover:scale-105 transition-transform">
              K.
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Kamrul Islam
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 leading-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </span>
            </div>
          </a>

          {/* Right Action Buttons Cluster */}
          <div className="flex items-center gap-1.5">
            {/* Quick Resume Button */}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold text-blue-600 dark:text-sky-400 bg-blue-50/80 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-750 transition-all cursor-pointer border border-blue-200/60 dark:border-slate-700/80"
              title="Open Resume"
              aria-label="Open Interactive Resume"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Resume</span>
            </button>

            {/* Dark Mode Toggle */}
            <ThemeToggle className="w-8 h-8 sm:w-8 sm:h-8" />

            {/* Animated Hamburger / Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative inline-flex items-center justify-center w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-200/80 dark:hover:bg-slate-700 transition-all cursor-pointer border border-slate-200/80 dark:border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle Menu</span>
              <div className="w-4 h-4 flex flex-col justify-center items-center relative">
                <span
                  className={`block h-0.5 w-4 bg-current rounded-full transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 bg-current rounded-full transition-opacity duration-200 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 bg-current rounded-full transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. ANIMATED MOBILE MENU DRAWER & BACKDROP OVERLAY                          */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-40"
              aria-hidden="true"
            />

            {/* Mobile Dropdown Card */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="md:hidden fixed top-[4.25rem] left-3 right-3 z-50 max-w-lg mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden p-3.5"
            >
              {/* Section Navigation Items */}
              <div className="space-y-1">
                {links.map((link, index) => {
                  const isActive = active === link.id;
                  return (
                    <motion.a
                      key={link.id}
                      href={`#${link.id}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-blue-50 dark:bg-slate-800/90 text-blue-600 dark:text-sky-400 font-bold border border-blue-200/60 dark:border-slate-700"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                            isActive
                              ? "bg-blue-600 text-white dark:bg-sky-500"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          {link.icon}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-semibold leading-tight">
                            {link.label}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-tight">
                            {link.description}
                          </span>
                        </div>
                      </div>

                      {/* Active Indicator dot or arrow */}
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-sky-400 shadow-xs" />
                      ) : (
                        <svg
                          className="w-4 h-4 text-slate-400 dark:text-slate-500 opacity-60"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </motion.a>
                  );
                })}
              </div>

              {/* Bottom Quick Action Card */}
              <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 space-y-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsResumeOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Open Interactive Resume</span>
                </button>

                <div className="flex items-center justify-between px-2 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <span>kamrulislam25262800@gmail.com</span>
                  <a
                    href="https://github.com/kamrul397"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-sky-400 font-semibold hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </header>
  );
}

