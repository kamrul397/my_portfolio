"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fireConfetti } from "@/utils/confetti";
import { toast } from "react-toastify";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commandItems = [
    // Navigation
    {
      id: "nav-home",
      title: "Go to Home",
      subtitle: "Welcome banner & summary",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      action: () => scrollToSection("home"),
    },
    {
      id: "nav-about",
      title: "About & Engineering Philosophy",
      subtitle: "Full-Stack Bio, Core Focus & GitHub Metrics",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-skills",
      title: "Expertise & Skills",
      subtitle: "TypeScript, Next.js 16, React 19, MongoDB, Stripe",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      action: () => scrollToSection("skills"),
    },
    {
      id: "nav-experience",
      title: "Developer Timeline",
      subtitle: "Career journey & learning timeline",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      action: () => scrollToSection("experience"),
    },
    {
      id: "nav-projects",
      title: "Explore Featured Projects",
      subtitle: "Mini Kanban, FitPass, CareerConnect & ClubSphere",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-contact",
      title: "Contact & Hire Me",
      subtitle: "Send a direct message or hire for roles",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: () => scrollToSection("contact"),
    },

    // Actions
    {
      id: "action-resume-pdf",
      title: "Download PDF Resume",
      subtitle: "Download official resume (Kamrul_Resume.pdf)",
      category: "Actions",
      icon: (
        <svg className="w-4 h-4 text-[#bef264]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      action: () => {
        const link = document.createElement("a");
        link.href = "/Kamrul_Islam_CV.pdf";
        link.download = "Kamrul_Islam_CV.pdf";
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
        <svg className="w-4 h-4 text-[#bef264]" fill="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      title: "FitPass — SaaS Gym Platform",
      subtitle: "TypeScript • Stripe Subscriptions • Next.js 16",
      category: "Projects",
      icon: (
        <span className="w-5 h-5 rounded-md bg-[#121826] border border-[#1e2a3e] text-[#38bdf8] text-[10px] font-mono font-bold flex items-center justify-center">
          FP
        </span>
      ),
      action: () => {
        scrollToSection("projects");
        window.open("https://fit-pass-omega.vercel.app", "_blank");
      },
    },
    {
      id: "project-kanban",
      title: "Mini Kanban — Workflow Platform",
      subtitle: "Next.js 16 • PostgreSQL • Prisma • DND",
      category: "Projects",
      icon: (
        <span className="w-5 h-5 rounded-md bg-[#121826] border border-[#1e2a3e] text-[#38bdf8] text-[10px] font-mono font-bold flex items-center justify-center">
          KB
        </span>
      ),
      action: () => {
        scrollToSection("projects");
        window.open("https://mini-kanban-board-rho.vercel.app", "_blank");
      },
    },
    {
      id: "project-careerconnect",
      title: "CareerConnect — Recruitment Platform",
      subtitle: "Next.js 16 • MongoDB Aggregations • PDF Uploads",
      category: "Projects",
      icon: (
        <span className="w-5 h-5 rounded-md bg-[#121826] border border-[#1e2a3e] text-[#38bdf8] text-[10px] font-mono font-bold flex items-center justify-center">
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
      subtitle: "React • Firebase Auth • Cloudinary • Stripe",
      category: "Projects",
      icon: (
        <span className="w-5 h-5 rounded-md bg-[#121826] border border-[#1e2a3e] text-[#38bdf8] text-[10px] font-mono font-bold flex items-center justify-center">
          CS
        </span>
      ),
      action: () => {
        scrollToSection("projects");
        window.open("https://clubspere-firebase.web.app", "_blank");
      },
    },
  ];

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  }

  const filteredItems = commandItems.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Spotlight Shortcut Pill */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0b101c]/90 backdrop-blur-md border border-[#1d273a] shadow-xl text-gray-300 hover:text-[#38bdf8] hover:border-sky-500/40 transition-all cursor-pointer group"
        aria-label="Open Command Palette (Ctrl+K)"
        title="Open Command Palette (Ctrl+K)"
      >
        <svg className="w-4 h-4 text-[#38bdf8] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-xs font-mono font-semibold hidden sm:inline">Commands</span>
        <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-bold text-gray-400 bg-[#121826] rounded border border-[#1e2a3e]">
          Ctrl K
        </kbd>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-full max-w-xl bg-[#090e18] border border-[#1d273a] rounded-2xl shadow-2xl overflow-hidden z-10 font-mono"
              role="dialog"
              aria-modal="true"
            >
              {/* Search Bar Input */}
              <div className="flex items-center px-4 py-3.5 border-b border-[#1d273a] gap-3">
                <svg className="w-5 h-5 text-[#38bdf8] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search commands, projects, or sections..."
                  className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="text-xs text-gray-400 hover:text-white px-1.5 py-0.5 rounded cursor-pointer"
                  >
                    Clear
                  </button>
                )}
                <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] text-gray-400 bg-[#121826] rounded border border-[#1e2a3e]">
                  ESC
                </kbd>
              </div>

              {/* Command List Results */}
              <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#1d273a]/50">
                {filteredItems.length === 0 ? (
                  <div className="py-10 text-center text-sm text-gray-500">
                    No matching commands for &ldquo;<span className="font-semibold text-gray-200">{search}</span>&rdquo;
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
                            ? "bg-[#142036] text-[#38bdf8] border border-sky-500/30"
                            : "text-gray-300 hover:bg-[#121826] hover:text-white border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[#121826] border border-[#1e2a3e]">
                            {item.icon}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-sm font-semibold leading-tight">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-gray-400 font-normal leading-tight mt-0.5">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#121826] border border-[#1e2a3e] shrink-0 ml-2">
                          {item.category}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer Helper */}
              <div className="px-4 py-2.5 bg-[#06080d] border-t border-[#1d273a] flex items-center justify-between text-[11px] text-gray-500">
                <div className="flex items-center gap-3">
                  <span>
                    <kbd className="bg-[#121826] px-1.5 py-0.5 rounded border border-[#1e2a3e]">↑↓</kbd> Navigate
                  </span>
                  <span>
                    <kbd className="bg-[#121826] px-1.5 py-0.5 rounded border border-[#1e2a3e]">↵</kbd> Select
                  </span>
                </div>
                <span className="text-[#38bdf8]">kamrul.live</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
