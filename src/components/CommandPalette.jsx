"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { fireConfetti } from "@/utils/confetti";
import { toast } from "react-toastify";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const inputRef = useRef(null);

  const commandItems = [
    // Navigation
    {
      id: "nav-home",
      title: "Go to Home",
      subtitle: "Welcome banner & summary",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      action: () => scrollToSection("home"),
    },
    {
      id: "nav-projects",
      title: "Explore Projects",
      subtitle: "FitPass, CareerConnect, ClubSphere & Revenio",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-skills",
      title: "View Skills & Tech Stack",
      subtitle: "Next.js 16, React 19, TypeScript, Express, MongoDB",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      action: () => scrollToSection("skills"),
    },
    {
      id: "nav-about",
      title: "About & Engineering Philosophy",
      subtitle: "Architecture principles, RBAC, Caching & Pipelines",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-contact",
      title: "Contact & Hire Me",
      subtitle: "Direct message, email, or meeting setup",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: () => scrollToSection("contact"),
    },

    // Actions
    {
      id: "action-theme",
      title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      subtitle: "Toggle dark/light visual theme",
      category: "Actions",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      action: () => {
        toggleTheme();
        toast.info(`Switched to ${theme === "dark" ? "Light" : "Dark"} theme!`);
      },
    },
    {
      id: "action-resume-pdf",
      title: "Download PDF Resume",
      subtitle: "Download official resume (Kamrul_Resume.pdf)",
      category: "Actions",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      action: () => {
        const link = document.createElement("a");
        link.href = "/my resume 23 August.pdf";
        link.download = "Kamrul_Islam_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        fireConfetti({ particleCount: 50 });
        toast.success("Resume download started!");
      },
    },
    {
      id: "action-whatsapp",
      title: "Chat on WhatsApp",
      subtitle: "+880 1894-565173 (Direct message)",
      category: "Actions",
      icon: (
        <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.181-.076.355.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
        </svg>
      ),
      action: () => {
        window.open("https://wa.me/8801894565173?text=Hi%20Kamrul,%20I%20saw%20your%20portfolio!", "_blank");
      },
    },
    {
      id: "action-copy-email",
      title: "Copy Email Address",
      subtitle: "kamrulislam25262800@gmail.com",
      category: "Actions",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      action: () => {
        navigator.clipboard.writeText("kamrulislam25262800@gmail.com");
        fireConfetti({ particleCount: 35 });
        toast.success("Email copied to clipboard!");
      },
    },

    // Projects Jump
    {
      id: "project-fitpass",
      title: "FitPass — SaaS Gym Subscription",
      subtitle: "TypeScript • Stripe Webhooks • Proration • Next.js 16",
      category: "Projects",
      icon: (
        <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
          FP
        </span>
      ),
      action: () => {
        scrollToSection("projects");
        window.open("https://fit-pass-omega.vercel.app", "_blank");
      },
    },
    {
      id: "project-careerconnect",
      title: "CareerConnect — Recruitment Platform",
      subtitle: "Next.js 16 • MongoDB Aggregations • PDF Uploads • RBAC",
      category: "Projects",
      icon: (
        <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
          CC
        </span>
      ),
      action: () => {
        scrollToSection("projects");
        window.open("https://career-connect-iota-pied.vercel.app", "_blank");
      },
    },
    {
      id: "project-clubsphere",
      title: "ClubSphere — University Activity Hub",
      subtitle: "React • Firebase Auth • Cloudinary • Stripe Checkout",
      category: "Projects",
      icon: (
        <span className="w-4 h-4 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center">
          CS
        </span>
      ),
      action: () => {
        scrollToSection("projects");
        window.open("https://clubspere-firebase.web.app", "_blank");
      },
    },
    {
      id: "project-revenio",
      title: "Revenio Store — E-Commerce Engine",
      subtitle: "React 19 • Tailwind CSS • MongoDB • RESTful APIs",
      category: "Projects",
      icon: (
        <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
          RS
        </span>
      ),
      action: () => {
        scrollToSection("projects");
        window.open("https://revenio-client.vercel.app", "_blank");
      },
    },

    // External Profiles
    {
      id: "social-github",
      title: "GitHub Profile (@kamrul397)",
      subtitle: "Explore repositories, commits, and open-source code",
      category: "Social Links",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      action: () => window.open("https://github.com/kamrul397", "_blank"),
    },
    {
      id: "social-linkedin",
      title: "LinkedIn Profile",
      subtitle: "Connect professionally on LinkedIn",
      category: "Social Links",
      icon: (
        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      action: () => window.open("https://linkedin.com", "_blank"),
    },
  ];

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  }

  // Filter items based on search query
  const filteredItems = commandItems.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Global Keydown Listeners: Cmd+K, Ctrl+K, /, Escape, Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle palette with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Open palette with "/" when not in an input
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setIsOpen(true);
      }

      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }

      // Arrow navigation
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1));
        } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
          e.preventDefault();
          filteredItems[selectedIndex].action();
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Spotlight Shortcut Pill (Visible on both Mobile & Desktop) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-slate-900/10 dark:shadow-slate-950/50 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300 dark:hover:border-slate-700 transition-all cursor-pointer group"
        aria-label="Open Command Palette (Ctrl+K)"
        title="Open Command Palette (Ctrl+K)"
      >
        <svg className="w-4 h-4 text-blue-600 dark:text-sky-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-xs font-semibold hidden sm:inline">Commands</span>
        <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
          Ctrl K
        </kbd>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Palette Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10"
              role="dialog"
              aria-modal="true"
            >
              {/* Search Bar Input */}
              <div className="flex items-center px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 gap-3">
                <svg className="w-5 h-5 text-blue-600 dark:text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command, search project, or jump to section..."
                  className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-1.5 py-0.5 rounded cursor-pointer"
                  >
                    Clear
                  </button>
                )}
                <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  ESC
                </kbd>
              </div>

              {/* Command List Results */}
              <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/50">
                {filteredItems.length === 0 ? (
                  <div className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                    No matching commands found for &ldquo;<span className="font-semibold text-slate-800 dark:text-slate-200">{search}</span>&rdquo;
                  </div>
                ) : (
                  filteredItems.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          item.action();
                          setIsOpen(false);
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                          isSelected
                            ? "bg-blue-50 dark:bg-slate-800/90 text-blue-600 dark:text-sky-400"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "bg-blue-600 text-white dark:bg-sky-500"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-sm font-semibold leading-tight">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-tight mt-0.5">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 shrink-0 ml-2">
                          {item.category}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer Helper */}
              <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <span>
                    <kbd className="font-mono bg-white dark:bg-slate-700 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-600">↑↓</kbd> Navigate
                  </span>
                  <span>
                    <kbd className="font-mono bg-white dark:bg-slate-700 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-600">↵</kbd> Select
                  </span>
                </div>
                <span>Kamrul Islam Portfolio</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
