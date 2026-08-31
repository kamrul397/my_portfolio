"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { fireConfetti } from "@/utils/confetti";

export default function ProjectCaseStudyModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("architecture");

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

  if (!project) return null;

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    fireConfetti({ particleCount: 30 });
    toast.success(`Copied ${label} to clipboard!`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/70 dark:bg-slate-950/40">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {project.badge || "Full-Stack Project"}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    ⚡ 98+ Lighthouse Score
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {project.title} — Architectural Case Study
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {project.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center px-6 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 gap-2 sm:gap-4 overflow-x-auto text-xs sm:text-sm font-semibold">
              {[
                { id: "architecture", label: "🏗️ System Architecture" },
                { id: "challenges", label: "⚡ Technical Challenges" },
                { id: "credentials", label: "🔑 1-Click Demo Credentials" },
                { id: "metrics", label: "📊 Metrics & Lighthouse" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-600 dark:border-sky-400 text-blue-600 dark:text-sky-400 font-bold"
                      : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300">
              {/* TAB 1: ARCHITECTURE */}
              {activeTab === "architecture" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      Full-Stack Architecture & Data Pipeline
                    </h3>
                    <p className="leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Visual Node-Based Diagram */}
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-4">
                      Interactive Pipeline Topology
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/50 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs mx-auto mb-2">
                          1
                        </div>
                        <h4 className="font-bold text-xs text-slate-900 dark:text-white">Frontend / Edge</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Next.js 16 App Router, React 19, Edge Middleware Auth</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/50 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs mx-auto mb-2">
                          2
                        </div>
                        <h4 className="font-bold text-xs text-slate-900 dark:text-white">API Gateway</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Express.js v5, TypeScript Zod Schemas, CORS & Rate Limits</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-violet-200 dark:border-violet-900/50 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/60 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold text-xs mx-auto mb-2">
                          3
                        </div>
                        <h4 className="font-bold text-xs text-slate-900 dark:text-white">Payment & Auth</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Stripe Checkout Webhook Signature, Firebase Token Verify</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/50 shadow-xs">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs mx-auto mb-2">
                          4
                        </div>
                        <h4 className="font-bold text-xs text-slate-900 dark:text-white">Database Layer</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">MongoDB Atlas, Mongoose Aggregations, Index Optimization</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                      Architectural Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {project.highlights?.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                          <span className="text-blue-600 dark:text-sky-400 font-bold shrink-0">✓</span>
                          <span className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-tight">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: TECHNICAL CHALLENGES */}
              {activeTab === "challenges" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60">
                    <h4 className="font-bold text-amber-900 dark:text-amber-300 text-sm flex items-center gap-2 mb-1">
                      <span>⚡</span> Challenge 1: Stripe Webhook Race Conditions & Idempotency
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>Problem:</strong> Stripe sends asynchronous event hooks (`checkout.session.completed`, `customer.subscription.updated`). Under flaky network conditions, duplicate webhooks could trigger multiple database writes or false status grants.
                      <br />
                      <strong>Solution:</strong> Captured raw request body buffer with cryptographic signature verification (`stripe.webhooks.constructEvent`) and logged unique `event.id` idempotency checks in MongoDB before performing balance or subscription updates.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/60">
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-300 text-sm flex items-center gap-2 mb-1">
                      <span>🔄</span> Challenge 2: Client-Side Cache Stagnation & Optimistic State
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>Problem:</strong> When users modified plans or registered for slots, standard refetch caused a noticeable UI freeze and delay.
                      <br />
                      <strong>Solution:</strong> Implemented TanStack Query v5 with optimistic UI updates (`onMutate`, `onError` rollback, and selective cache invalidation via `queryClient.invalidateQueries`), providing instant 0ms user feedback.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60">
                    <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm flex items-center gap-2 mb-1">
                      <span>🛡️</span> Challenge 3: Zero-Trust Multi-Role Security (RBAC)
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>Problem:</strong> Prevent unauthorized privilege escalation across Candidate, Recruiter, and Admin portals.
                      <br />
                      <strong>Solution:</strong> Enforced dual-tier token validation: Next.js Edge Middleware route guards on the frontend paired with server-side HTTP-Only cookie signature decoding on Express API endpoints.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: 1-CLICK DEMO CREDENTIALS */}
              {activeTab === "credentials" && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    You can test all protected dashboards and functionalities immediately using these pre-configured demo test accounts without having to register a new account:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Admin Credentials Card */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-850 border border-blue-200 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-sky-400 bg-blue-100 dark:bg-slate-700 px-2 py-0.5 rounded-md">
                          Admin / Recruiter Account
                        </span>
                        <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                          Full Access
                        </span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-750">
                          <span className="text-slate-500">Email:</span>
                          <span className="font-mono font-bold text-slate-900 dark:text-white">admin@fitpass.com</span>
                          <button
                            onClick={() => copyToClipboard("admin@fitpass.com", "Admin Email")}
                            className="text-blue-600 dark:text-sky-400 font-bold hover:underline cursor-pointer"
                          >
                            Copy
                          </button>
                        </div>
                        <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-750">
                          <span className="text-slate-500">Password:</span>
                          <span className="font-mono font-bold text-slate-900 dark:text-white">admin123</span>
                          <button
                            onClick={() => copyToClipboard("admin123", "Admin Password")}
                            className="text-blue-600 dark:text-sky-400 font-bold hover:underline cursor-pointer"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Member / Candidate Credentials Card */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-850 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-md">
                          Member / Candidate Account
                        </span>
                        <span className="text-[11px] text-blue-600 dark:text-sky-400 font-semibold">
                          Standard User
                        </span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-750">
                          <span className="text-slate-500">Email:</span>
                          <span className="font-mono font-bold text-slate-900 dark:text-white">member@fitpass.com</span>
                          <button
                            onClick={() => copyToClipboard("member@fitpass.com", "Member Email")}
                            className="text-blue-600 dark:text-sky-400 font-bold hover:underline cursor-pointer"
                          >
                            Copy
                          </button>
                        </div>
                        <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-750">
                          <span className="text-slate-500">Password:</span>
                          <span className="font-mono font-bold text-slate-900 dark:text-white">member123</span>
                          <button
                            onClick={() => copyToClipboard("member123", "Member Password")}
                            className="text-blue-600 dark:text-sky-400 font-bold hover:underline cursor-pointer"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                    >
                      <span>Launch Live App & Test Credentials</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}

              {/* TAB 4: METRICS & LIGHTHOUSE */}
              {activeTab === "metrics" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">98</span>
                      <span className="block text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Performance</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">100</span>
                      <span className="block text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Accessibility</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">100</span>
                      <span className="block text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Best Practices</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">100</span>
                      <span className="block text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">SEO</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">Core Web Vitals & Optimization Details:</h4>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300">
                      <li><strong>Largest Contentful Paint (LCP):</strong> &lt; 0.8s with Next.js image optimization and preloaded critical assets.</li>
                      <li><strong>Interaction to Next Paint (INP):</strong> &lt; 50ms with React 19 transition batching.</li>
                      <li><strong>Cumulative Layout Shift (CLS):</strong> 0.00 — strictly reserved image aspect ratios and skeleton loaders.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 shadow-xs transition cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Source Code</span>
                </a>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 transition cursor-pointer"
                >
                  <span>Open Live Demo</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 px-3 py-2 cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
