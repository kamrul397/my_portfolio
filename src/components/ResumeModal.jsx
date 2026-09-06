"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fireConfetti } from "@/utils/confetti";
import { toast } from "react-toastify";

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const rawResumeText = `KAMRUL ISLAM
Junior Full-Stack Developer | Next.js 16 • React 19 • TypeScript • PostgreSQL • Prisma • Node.js • MongoDB
Netrakona, Bangladesh | Email: kamrulislam25262800@gmail.com | Phone/WhatsApp: +880 1894565173
Portfolio: https://my-portfolio-theta-rose-11.vercel.app/ | GitHub: https://github.com/kamrul397 | LinkedIn: https://www.linkedin.com/in/kamrul397/

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Junior Full-Stack Developer with a genuine passion for continuous learning and quickly adapting to modern technologies. Specializing in TypeScript, Next.js 16 (App Router), React 19, PostgreSQL, Prisma ORM, and Node.js/Express with MongoDB. Proven track record of independently expanding technical knowledge—demonstrated by architecting relational PostgreSQL workflows, implementing mathematical fractional indexing algorithms, and integrating secure Stripe payments and zero-trust authentication. Dedicated to writing clean, maintainable, and type-safe code while eagerly mastering new engineering tools.

================================================================================
TECHNICAL SKILLS
================================================================================
• Languages: TypeScript, JavaScript (ES6+), SQL, HTML5, CSS3, JSON
• Frontend Frameworks: Next.js 16 (App Router, Server Components, Edge Middleware), React 19, Tailwind CSS v4, DaisyUI, Framer Motion
• Backend & APIs: Node.js, Express.js (v5), RESTful APIs, Middleware Auth, Cookie Sessions
• Databases & ORMs: PostgreSQL, Prisma ORM, MongoDB Atlas, Mongoose ORM, Aggregation Pipelines, Database Indexing
• State & Architecture: TanStack Query v5 (React Query), Zod Schema Validation, React Hook Form, Fractional Indexing Logic
• Payments & Security: Stripe Checkout, Webhook Signature Verification, RBAC (Owner/Editor/Viewer), Firebase Auth, HTTP-Only JWT, CORS
• DevOps & Cloud Tools: Docker, Docker Compose, Git, GitHub, Vercel, Render, Cloudinary API, Postman, VS Code

================================================================================
TECHNICAL PROJECTS
================================================================================

1. Mini Kanban — Real-Time Collaborative Workflow Platform
Live: https://mini-kanban-board-rho.vercel.app | GitHub: https://github.com/kamrul397/mini-kanban-board
Tech: Next.js 16, React 19, TypeScript, PostgreSQL, Prisma ORM, Node.js, Express, TanStack Query, Docker, Tailwind CSS
Overview: A full-stack collaborative Kanban board featuring normalized PostgreSQL models with Prisma ORM, continuous mathematical fractional indexing for 0ms drag-and-drop reordering, 3-tier RBAC access control (Owner, Editor, Viewer), and mobile-responsive collapsible accordion stacks.

2. CareerConnect — Full-Stack Job Search & Recruitment Portal
Live: https://career-connect-iota-pied.vercel.app | GitHub: https://github.com/kamrul397/careerConnect
Tech: Next.js 16, React 19, Node.js, Express, MongoDB, TanStack Query v5, Firebase Auth, Cloudinary API, Tailwind CSS
Overview: A comprehensive full-stack job portal connecting candidates, recruiters, and administrators with role-protected workspaces, faceted job search powered by MongoDB aggregation pipelines, Cloudinary resume parsing, and TanStack Query optimistic updates.

3. ClubSphere — Full-Stack Extracurricular & Event Platform
Live: https://clubspere-firebase.web.app | GitHub: https://github.com/kamrul397/ClubSphere_Frontend
Tech: React 19, Node.js, Express, MongoDB, Stripe API, Firebase Auth, JWT, TanStack Query, Tailwind CSS
Overview: A community-driven extracurricular platform facilitating student club exploration, event registration with integrated Stripe payment processing, granular role-based permissions for club managers, and dynamic real-time form validation.

================================================================================
WORK EXPERIENCE & EDUCATION
================================================================================
• Web Developer Intern | GOBAADI (2026 – Present)
  - Developing responsive frontend components, modular user interfaces, and integrating RESTful APIs.
• Full-Stack Web Development Trainee | Programming Hero (2024 – Present)
  - Intensive training covering Next.js 16, React 19, TypeScript, PostgreSQL, Prisma ORM, and Node.js.
• Computer Operator & Graphic Designer | Commercial IT & Print Studio (2 Years | 2024 – 2026)
  - Managed computer operations, high-speed document processing, graphics design (Photoshop, Illustrator), and IT support.
• Bachelor of Science in Computer Science and Engineering (B.Sc. CSE) | ISTT (Graduated: 2025)
  - Core computer science coursework in Data Structures, Algorithms, Relational Database Systems (SQL), and Software Engineering.
• Higher Secondary Certificate (HSC) | Netrakona Govt. College (Passing Year: 2020)
  - Intermediate studies with analytical foundation in science & mathematics.`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    fireConfetti({ particleCount: 40 });
    toast.success("Copied ATS Plain Text Resume!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    fireConfetti({ particleCount: 50 });
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Main Modal Container with spring scale/fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 flex flex-col max-h-[92vh] z-10 overflow-hidden"
          >

            {/* Top Sticky Header & Controls Bar */}
            <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                    Kamrul Islam — Resume
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Full-Stack Developer • TypeScript & Next.js Core
                  </p>
                </div>
              </div>

              {/* Center Tabs: Visual Preview vs ATS Plain Text */}
              <div className="flex items-center bg-slate-200/70 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === "preview"
                      ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-sky-300 shadow-xs font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  📄 Visual Document
                </button>
                <button
                  onClick={() => setActiveTab("text")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === "text"
                      ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-sky-300 shadow-xs font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  📋 ATS Plain Text
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  title="Print or Save as PDF"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-98"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span>Print / PDF</span>
                </button>

                <button
                  onClick={handleCopyText}
                  title="Copy ATS Text"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all active:scale-98 ${copied
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750"
                    }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>{copied ? "Copied!" : "Copy Text"}</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body with smooth scrolling */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100 dark:bg-slate-950">

              {activeTab === "preview" ? (
                /* Visual A4 Document Card */
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl shadow-xl p-6 sm:p-10 md:p-12 text-slate-800 dark:text-slate-200 font-sans">

                  {/* Header Section */}
                  <div className="border-b-2 border-slate-900 dark:border-slate-700 pb-5 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                          Kamrul Islam
                        </h1>
                        <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-sky-400 mt-0.5">
                          Junior Full-Stack Developer (MERN & Next.js Core)
                        </p>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 md:text-right">
                        <p className="flex items-center md:justify-end gap-1.5">
                          <span>📍 Netrakona, Bangladesh</span>
                        </p>
                        <p>
                          <a href="mailto:kamrulislam25262800@gmail.com" className="hover:text-blue-600 dark:hover:text-sky-300 underline">
                            kamrulislam25262800@gmail.com
                          </a>{" "}
                          • +880 1894-565173
                        </p>
                        <p className="flex flex-wrap gap-2 md:justify-end">
                          <a href="https://my-portfolio-theta-rose-11.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-sky-400 hover:underline">
                            Portfolio
                          </a>
                          <span>•</span>
                          <a href="https://github.com/kamrul397" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-sky-400 hover:underline">
                            GitHub
                          </a>
                          <span>•</span>
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-sky-400 hover:underline">
                            LinkedIn
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="mb-6">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2.5">
                      Professional Summary
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Junior Full-Stack Developer with a genuine passion for continuous learning and quickly adapting to modern technologies. Specializing in <strong className="font-bold text-slate-900 dark:text-white">TypeScript</strong>, <strong className="font-bold text-slate-900 dark:text-white">Next.js 16 (App Router)</strong>, <strong className="font-bold text-slate-900 dark:text-white">React 19</strong>, <strong className="font-bold text-slate-900 dark:text-white">PostgreSQL</strong>, <strong className="font-bold text-slate-900 dark:text-white">Prisma ORM</strong>, and <strong className="font-bold text-slate-900 dark:text-white">Node.js/Express</strong> with <strong className="font-bold text-slate-900 dark:text-white">MongoDB Atlas</strong>. Proven ability to independently master new paradigms—from relational schemas and fractional indexing algorithms to zero-trust auth and reactive state caching.
                    </p>
                  </div>

                  {/* Technical Skills */}
                  <div className="mb-6">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2.5">
                      Technical Skills
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">Languages & Core:</span>{" "}
                        <span className="text-slate-600 dark:text-slate-300">TypeScript, JavaScript (ES6+), SQL, HTML5, CSS3</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">Frontend Frameworks:</span>{" "}
                        <span className="text-slate-600 dark:text-slate-300">Next.js 16 (App Router), React 19, Tailwind CSS v4</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">Backend & Database:</span>{" "}
                        <span className="text-slate-600 dark:text-slate-300">Node.js, Express.js (v5), PostgreSQL, Prisma ORM, MongoDB, Mongoose</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">State & Validation:</span>{" "}
                        <span className="text-slate-600 dark:text-slate-300">TanStack Query v5, Zod, React Hook Form</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">Payments & Security:</span>{" "}
                        <span className="text-slate-600 dark:text-slate-300">Stripe SDK (Webhooks, Proration), JWT, Firebase Auth</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">DevOps & Cloud:</span>{" "}
                        <span className="text-slate-600 dark:text-slate-300">Docker, Git, GitHub, Vercel, Render, Cloudinary</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical Projects */}
                  <div className="mb-6">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
                      Technical Projects
                    </h3>

                    {/* Project 1: Mini Kanban Board */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          Mini Kanban — Real-Time Collaborative Workflow Platform
                        </h4>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          [<a href="https://mini-kanban-board-rho.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">Demo</a> • <a href="https://github.com/kamrul397/mini-kanban-board" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">GitHub</a>]
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                        Next.js 16, React 19, TypeScript, PostgreSQL, Prisma ORM, Node.js, Express, TanStack Query, Docker, Tailwind CSS
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        A full-stack collaborative Kanban board featuring normalized PostgreSQL models with Prisma ORM, continuous mathematical fractional indexing for 0ms drag-and-drop reordering, 3-tier RBAC access control (Owner, Editor, Viewer), and mobile-responsive collapsible accordion stacks.
                      </p>
                    </div>

                    {/* Project 2: CareerConnect */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          CareerConnect — Full-Stack Job Search & Recruitment Portal
                        </h4>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          [<a href="https://career-connect-iota-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">Demo</a> • <a href="https://github.com/kamrul397/careerConnect" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">GitHub</a>]
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                        Next.js 16, React 19, Express.js, MongoDB, TanStack Query v5, Firebase Auth, Cloudinary API, Tailwind CSS
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        A comprehensive full-stack job portal connecting candidates, recruiters, and administrators with role-protected workspaces, faceted job search powered by MongoDB aggregation pipelines, Cloudinary resume parsing, and TanStack Query optimistic updates.
                      </p>
                    </div>

                    {/* Project 3: ClubSphere */}
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          ClubSphere — Full-Stack Extracurricular & Event Platform
                        </h4>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          [<a href="https://clubspere-firebase.web.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">Demo</a> • <a href="https://github.com/kamrul397/ClubSphere_Frontend" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">GitHub</a>]
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                        React 19, Node.js, Express.js, MongoDB, Stripe API, Firebase Auth, JWT, TanStack Query, Tailwind CSS
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        A community-driven extracurricular platform facilitating student club exploration, event registration with integrated Stripe payment processing, granular role-based permissions for club managers, and dynamic real-time form validation.
                      </p>
                    </div>
                  </div>

                  {/* Experience & Education */}
                  <div className="mb-6">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2.5">
                      Experience & Education
                    </h3>
                    <div className="space-y-2.5 text-xs sm:text-sm">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <span className="font-bold text-slate-900 dark:text-white">Web Developer Intern — GOBAADI</span>
                        <span className="text-xs font-mono text-blue-600 dark:text-sky-400 font-semibold">2026 — Present</span>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <span className="font-bold text-slate-900 dark:text-white">Full-Stack Web Development Trainee — Programming Hero</span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">2024 — Present</span>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <span className="font-bold text-slate-900 dark:text-white">Computer Operator & Graphic Designer — Commercial IT & Print Studio</span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">2 Years (2024 — 2026)</span>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <span className="font-bold text-slate-900 dark:text-white">Bachelor of Science in Computer Science & Engineering (B.Sc. CSE) — ISTT</span>
                        <span className="text-xs font-mono text-blue-600 dark:text-sky-400 font-semibold">Graduated: 2025</span>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <span className="font-bold text-slate-900 dark:text-white">Higher Secondary Certificate (HSC / Intermediate) — Netrakona Govt. College</span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">Passing Year: 2020</span>
                      </div>
                    </div>
                  </div>

                  {/* Architectural Strengths */}
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
                      Key Competencies & Engineering Philosophy
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                        <span className="font-bold block text-slate-900 dark:text-white">Strict TypeScript</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">End-to-End Safety</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                        <span className="font-bold block text-slate-900 dark:text-white">Stripe Webhooks</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">Idempotent Orders</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                        <span className="font-bold block text-slate-900 dark:text-white">TanStack Query</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">Optimistic UI</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                        <span className="font-bold block text-slate-900 dark:text-white">RBAC Security</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">Edge & API Guards</span>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                /* ATS Plain Text Editor / Code View */
                <div className="max-w-4xl mx-auto bg-slate-900 text-slate-200 rounded-2xl p-4 sm:p-6 font-mono text-xs sm:text-sm border border-slate-800 relative">
                  <div className="flex justify-between items-center pb-3 mb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-slate-400">Plain Text (Standard ATS Ready)</span>
                    <button
                      onClick={handleCopyText}
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold"
                    >
                      {copied ? "Copied to Clipboard!" : "Copy Full Text"}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed font-mono select-all">
                    {rawResumeText}
                  </pre>
                </div>
              )}

            </div>

            {/* Footer info banner */}
            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
              <p>💡 Tip: Click <strong>Print / PDF</strong> to generate a clean A4 PDF file using your browser print engine.</p>
              <button
                onClick={onClose}
                className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:underline"
              >
                Close Viewer
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
