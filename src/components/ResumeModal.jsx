"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
Junior Full-Stack Developer | Next.js 16 • React 19 • TypeScript • Node.js • MongoDB
Netrakona, Bangladesh | Email: kamrulislam25262800@gmail.com | Phone/WhatsApp: +880 1894-565173
Portfolio: https://my-portfolio-theta-rose-11.vercel.app/ | GitHub: https://github.com/kamrul397 | LinkedIn: https://linkedin.com

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Passionate Full-Stack Developer specializing in TypeScript, Next.js 16 (App Router), React 19, Node.js, Express.js, and MongoDB. Experienced in engineering production-grade web applications with secure Stripe subscription engines, smart proration algorithms, TanStack Query v5 state caching, and zero-trust authentication (Firebase OAuth + HTTP-Only JWTs). Focused on writing clean, maintainable, and type-safe code.

================================================================================
TECHNICAL SKILLS
================================================================================
• Languages & Core: TypeScript, JavaScript (ES6+), HTML5, CSS3, JSON
• Frontend Frameworks: Next.js 16 (App Router, Server Components, Edge Middleware), React 19
• Backend & APIs: Node.js, Express.js (v5), RESTful APIs, JWT Authentication, Cookie Sessions
• Databases & ORMs: MongoDB Atlas, Mongoose ORM, Database Aggregation Pipelines
• Payments & Security: Stripe Node SDK (Checkout, Webhooks, Proration), Role-Based Access Control (RBAC), CORS Whitelisting
• State & Caching: TanStack Query v5 (React Query), React Hook Form, Zod Schema Validation, Context API
• Styling & Animation: Tailwind CSS v4, DaisyUI, Framer Motion, Lucide Icons, Responsive UI/UX
• Cloud & Tools: Git, GitHub, Vercel, Render, Firebase Client SDK, Cloudinary API, Postman

================================================================================
FEATURED PROJECTS
================================================================================

1. FitPass – Full-Stack SaaS Gym Subscription Platform
Live: https://fit-pass-omega.vercel.app | GitHub: https://github.com/kamrul397/fitPass
Tech: TypeScript, Next.js 16, React 19, Node.js, Express.js, MongoDB, Stripe API, TanStack Query v5, Zod, Tailwind CSS v4
• End-to-End TypeScript Architecture: Engineered a full-stack codebase in strict TypeScript, establishing shared interfaces, strongly-typed API response contracts, and runtime schema validation with Zod + React Hook Form to eliminate runtime type errors.
• Stripe Subscription & Proration Engine: Developed an end-to-end Stripe Checkout payment workflow using the Stripe TypeScript SDK; implemented an asynchronous webhook listener (/api/payments/webhook) with raw-body cryptographic signature verification for idempotent order fulfillment, and built a custom proration algorithm calculating unused plan credits during mid-cycle tier changes.
• Hybrid Security & Type-Safe Middleware: Architected a zero-trust auth pipeline combining Firebase Client SDK (Email & Google OAuth) with custom Express JWT verification, issuing secure HttpOnly, SameSite: "None" cookie sessions and enforcing route-level access control via Next.js 16 Edge Middleware and typed Express Request handlers.
• Admin Control Center & Analytics: Designed an administrative dashboard with strictly typed Mongoose aggregation pipelines to calculate real-time platform metrics (Total Revenue, Active Subscribers, Monthly Recurring Revenue) alongside role and status management controls.
• Optimistic State Management & Caching: Leveraged TanStack Query v5 with TypeScript generics for type-safe query caching, background revalidation, loading skeletons, and optimistic UI mutations.

2. CareerConnect – Full-Stack Job Search & Recruitment Portal
Live: https://career-connect-iota-pied.vercel.app | GitHub: https://github.com/kamrul397/careerConnect
Tech: Next.js 16, React 19, Node.js, Express.js, MongoDB, TanStack Query v5, Firebase Auth, Cloudinary, Tailwind CSS
• Multi-Role Portal Architecture: Built a comprehensive recruitment platform supporting Candidates (job search, PDF application uploads), Recruiters (job creation, candidate vetting), and Admins (site verification and analytics).
• Zero-Delay Query Invalidation: Utilized TanStack Query v5 for optimistic state updates, background cache syncing, and automatic revalidation upon application submission.
• Aggregation Pipelines & Resume Cloud Storage: Implemented MongoDB multi-stage aggregation pipelines for faceted search, category count indexing, and Cloudinary PDF resume parsing.

3. ClubSphere – Full-Stack MERN Club Management Platform
Live: https://clubspere-firebase.web.app | GitHub: https://github.com/kamrul397/ClubSphere_Frontend
Tech: React, Node.js, Express.js, MongoDB, Tailwind CSS, TanStack Query, React Hook Form, JWT
• Membership & Event Operations: Developed a dynamic club portal enabling members to explore local clubs, join memberships, and register for community events.
• Role-Based Access Guards: Integrated granular RBAC for Club Managers (event scheduling, member approvals) and Admins with protected routes.

4. TechNova Store – Modern Full-Stack E-Commerce Platform
Live: https://revenio-client.vercel.app | GitHub: https://github.com/kamrul397/revenio-store
Tech: Next.js, Express.js, MongoDB, Firebase Auth, Cloudinary, Tailwind CSS, DaisyUI
• Full Catalog & Cloud Media: Built an e-commerce catalog featuring real-time product search, multi-criteria filtering, and Cloudinary image upload workflows.

================================================================================
CORE ARCHITECTURAL COMPETENCIES
================================================================================
• End-to-End Type Safety & Data Integrity (TypeScript + Zod)
• Cryptographic Webhook Security & Idempotent Payment Processing
• Cookie-Based JWT Session Management & Edge Route Protection
• High-Performance UI State Caching & Background Revalidation
• Modern Responsive & Accessible Interface Design`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
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
                      Results-driven Full-Stack Developer specializing in <strong className="font-bold text-slate-900 dark:text-white">TypeScript</strong>, <strong className="font-bold text-slate-900 dark:text-white">Next.js 16 (App Router)</strong>, <strong className="font-bold text-slate-900 dark:text-white">React 19</strong>, <strong className="font-bold text-slate-900 dark:text-white">Node.js</strong>, <strong className="font-bold text-slate-900 dark:text-white">Express.js</strong>, and <strong className="font-bold text-slate-900 dark:text-white">MongoDB Atlas</strong>. Proven track record of architecting scalable web applications with complete Stripe subscription & smart proration engines, TanStack Query v5 state caching, and secure HTTP-Only JWT authentication.
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
                        <span className="text-slate-600 dark:text-slate-300">TypeScript, JavaScript (ES6+), HTML5, CSS3</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">Frontend Frameworks:</span>{" "}
                        <span className="text-slate-600 dark:text-slate-300">Next.js 16 (App Router), React 19, Tailwind CSS v4</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">Backend & Database:</span>{" "}
                        <span className="text-slate-600 dark:text-slate-300">Node.js, Express.js (v5), MongoDB Atlas, Mongoose</span>
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
                        <span className="text-slate-600 dark:text-slate-300">Git, GitHub, Vercel, Render, Cloudinary</span>
                      </div>
                    </div>
                  </div>

                  {/* Featured Projects */}
                  <div className="mb-6">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
                      Featured Full-Stack Projects
                    </h3>

                    {/* Project 1: FitPass */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          FitPass – Full-Stack SaaS Gym Subscription Platform
                        </h4>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          [<a href="https://fit-pass-omega.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">Demo</a> • <a href="https://github.com/kamrul397/fitPass" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">GitHub</a>]
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                        TypeScript, Next.js 16, React 19, Node.js, Express.js (v5), MongoDB, Stripe API, TanStack Query v5, Zod, Tailwind CSS v4
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        <li><strong className="font-semibold text-slate-800 dark:text-slate-200">End-to-End TypeScript:</strong> Engineered strict full-stack TypeScript architecture with shared interfaces and Zod runtime schema validation.</li>
                        <li><strong className="font-semibold text-slate-800 dark:text-slate-200">Stripe & Proration Engine:</strong> Implemented Stripe Checkout, webhook signature verification (`/api/payments/webhook`), and smart proration credit algorithms.</li>
                        <li><strong className="font-semibold text-slate-800 dark:text-slate-200">Hybrid Security Pipeline:</strong> Combined Firebase Client SDK with custom Express JWT verification issuing secure `HttpOnly`, `SameSite: "None"` cookie sessions.</li>
                        <li><strong className="font-semibold text-slate-800 dark:text-slate-200">Admin Control Center:</strong> Built real-time analytics for revenue and active subscribers with MongoDB aggregation pipelines.</li>
                        <li><strong className="font-semibold text-slate-800 dark:text-slate-200">State Caching:</strong> Integrated TanStack Query v5 with generics for optimistic UI updates and zero-latency caching.</li>
                      </ul>
                    </div>

                    {/* Project 2: CareerConnect */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          CareerConnect – Job Search & Recruitment Portal
                        </h4>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          [<a href="https://career-connect-iota-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">Demo</a> • <a href="https://github.com/kamrul397/careerConnect" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">GitHub</a>]
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                        Next.js 16, React 19, Express.js, MongoDB, TanStack Query v5, Firebase Auth, Cloudinary, Tailwind CSS
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        <li>Engineered multi-tier RBAC for Candidates, Recruiters, and Admins with protected routes and server JWT verification.</li>
                        <li>Implemented TanStack Query v5 background cache invalidation and Cloudinary PDF resume parsing pipelines.</li>
                      </ul>
                    </div>

                    {/* Project 3: ClubSphere */}
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          ClubSphere – Full-Stack Club Management Platform
                        </h4>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          [<a href="https://clubspere-firebase.web.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">Demo</a> • <a href="https://github.com/kamrul397/ClubSphere_Frontend" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-sky-400 hover:underline">GitHub</a>]
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                        React, Node.js, Express.js, MongoDB, TanStack Query, React Hook Form, JWT, Tailwind CSS
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        <li>Developed membership subscription and community event registration with role guards and real-time state feedback.</li>
                      </ul>
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
