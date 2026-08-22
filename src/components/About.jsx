"use client";

import React, { useState } from "react";
import ResumeModal from "@/components/ResumeModal";

const philosophyPillars = [
  {
    title: "Role-Based Security (RBAC)",
    badge: "Security & Auth",
    description:
      "Engineered multi-role authentication pipelines (Member, Manager, Admin) with HTTP-Only JWT verification, Next.js Edge Middleware, and Firebase OAuth.",
    icon: (
      <svg className="w-5 h-5 text-indigo-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Zero-Delay UI State Caching",
    badge: "Performance",
    description:
      "Implemented TanStack Query v5 with TypeScript generics for automatic client-side caching, background refetching (`staleTime`), and optimistic UI mutations.",
    icon: (
      <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "MongoDB Aggregation Pipelines",
    badge: "Data Architecture",
    description:
      "Architected complex MongoDB aggregation queries for multi-filter search, live job category counters, candidate status tracking, and revenue analytics dashboards.",
    icon: (
      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Responsive Touch-First UX",
    badge: "User Experience",
    description:
      "Designed pixel-perfect, mobile-friendly user interfaces using Tailwind CSS v4, custom drawers, glassmorphism overlays, and accessible ARIA states.",
    icon: (
      <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className="py-16 px-6 sm:px-10 lg:px-14 scroll-mt-16 bg-white dark:bg-slate-900 rounded-3xl my-12 border border-slate-200/80 dark:border-slate-800 shadow-xs relative overflow-hidden transition-colors"
      >
        {/* Decorative ambient background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-transparent dark:from-blue-600/10 dark:via-indigo-600/10 rounded-full blur-3xl pointer-events-none -mt-20 -mr-20"></div>

        <div className="grid md:grid-cols-12 gap-12 items-start relative z-10">
          {/* Left Side: Biography & Key Stats */}
          <div className="md:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Status & Location Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-sky-400 text-xs font-bold tracking-wider uppercase border border-blue-200/60 dark:border-slate-700">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-sky-400 animate-pulse"></span>
                  ABOUT ME
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-transparent dark:border-slate-750">
                  <span>📍 Netrakona, Bangladesh</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                Engineering Scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-300">
                  Full-Stack Systems
                </span>
              </h2>

              <p className="mt-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                I am a junior developer deeply passionate about building modern web applications. My foundation built with core JavaScript has naturally grown into engineering full-stack production architectures using <strong className="text-slate-900 dark:text-white font-semibold">TypeScript</strong>, <strong className="text-slate-900 dark:text-white font-semibold">Next.js 16 (App Router)</strong>, <strong className="text-slate-900 dark:text-white font-semibold">React 19</strong>, <strong className="text-slate-900 dark:text-white font-semibold">Node.js</strong>, and <strong className="text-slate-900 dark:text-white font-semibold">MongoDB</strong>.
              </p>

              <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed font-normal">
                I focus heavily on end-to-end type safety, clean component modularity, role-based security (RBAC), and zero-delay UI state caching using <strong className="text-slate-900 dark:text-white font-semibold">TanStack Query v5</strong>.
              </p>

              {/* Key Developer Stats Counter */}
              <div className="mt-8 grid grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-750">
                <div className="text-center sm:text-left">
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-sky-400">5+</span>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">Full-Stack Apps</p>
                </div>
                <div className="text-center sm:text-left border-x border-slate-200 dark:border-slate-700 px-2 sm:px-4">
                  <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">TypeScript</span>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">+ Next.js Core</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">100%</span>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">Responsive UX</p>
                </div>
              </div>
            </div>

            {/* DUAL RESUME ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2.5 bg-slate-950 dark:bg-blue-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:bg-slate-800 dark:hover:bg-blue-700 transition duration-200 group active:scale-98 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-slate-300 dark:text-white group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Interactive Resume</span>
              </button>

              <a
                href="/Kamrul_Resume.pdf"
                download="Kamrul_Resume.pdf"
                className="inline-flex items-center gap-2 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm px-5 py-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition duration-200 active:scale-98"
              >
                <svg
                  className="w-4 h-4 text-slate-600 dark:text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Right Side: Engineering Philosophy & Focus Pillars */}
          <div className="md:col-span-6 space-y-4">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-2">
              <span className="text-xs font-bold text-indigo-600 dark:text-sky-400 uppercase tracking-wider">CORE FOCUS</span>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                Engineering Philosophy & Architecture
              </h3>
            </div>

            <div className="space-y-3.5">
              {philosophyPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-750 hover:bg-white dark:hover:bg-slate-800 hover:border-indigo-200 dark:hover:border-slate-600 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                        {pillar.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {pillar.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-bold text-indigo-600 dark:text-sky-300 bg-indigo-50 dark:bg-indigo-950/70 px-2.5 py-1 rounded-md border border-indigo-100 dark:border-indigo-900/60">
                      {pillar.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-10">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
