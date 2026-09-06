"use client";

import React from "react";
import GitHubStats from "@/components/GitHubStats";

export default function About() {
  return (
    <section id="about" className="w-full relative z-10 py-12 sm:py-16 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header with Numbered Monospace Tag */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase font-mono">
            02 <span className="text-gray-600">/</span> ABOUT
          </span>
          <hr className="border-t border-gray-800 mt-3 w-full" />
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bio / Information */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Kamrul Islam
            </h2>

            <p className="text-[#8e9cb0] text-sm sm:text-base leading-relaxed">
              <strong className="text-white font-semibold">Full-Stack Web Developer</strong> &amp; Web Developer Intern at <strong className="text-[#38bdf8] font-semibold">GOBAADI</strong>, passionate about building high-performance web applications with strict type safety, modern architectures, and clean maintainable code.
            </p>

            <p className="text-[#8e9cb0] text-sm sm:text-base leading-relaxed">
              My foundation built with modern JavaScript has grown into engineering full-stack production systems using <strong className="text-white font-medium">TypeScript</strong>, <strong className="text-white font-medium">Next.js 16 (App Router)</strong>, <strong className="text-white font-medium">React 19</strong>, <strong className="text-white font-medium">PostgreSQL</strong>, <strong className="text-white font-medium">Prisma ORM</strong>, and <strong className="text-white font-medium">MongoDB</strong>.
            </p>

            <p className="text-[#8e9cb0] text-sm sm:text-base leading-relaxed">
              I specialize in end-to-end type safety with Zod schemas, role-based access control (RBAC), relational & NoSQL data modeling, Stripe subscription workflows, and zero-delay UI state caching using TanStack Query v5.
            </p>

            {/* Resume Download Action */}
            <div className="pt-2">
              <a
                href="/Kamrul_Islam_CV.pdf"
                download="Kamrul_Islam_CV.pdf"
                className="inline-flex items-center gap-2.5 bg-[#121826] hover:bg-[#182236] border border-[#1e2a3e] hover:border-sky-500/50 text-gray-200 px-5 py-3 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all shadow-md active:scale-98"
              >
                <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Metric Cards Grid */}
          <div className="lg:col-span-6 relative">
            {/* Radiant Cyan Ambient Glow directly behind center of the 4 cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#38bdf8]/15 rounded-full blur-[85px] pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10">
              {/* Card 1: 6+ Full-Stack Apps */}
              <div className="bg-[#0b101c]/90 backdrop-blur-md border border-[#1d273a] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-center text-center min-h-[160px] shadow-lg shadow-black/40 hover:border-sky-500/40 hover:bg-[#0e1524] transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline leading-none">
                  <span>6</span>
                  <span className="text-[#38bdf8] text-2xl sm:text-3xl font-bold ml-1">+</span>
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-gray-400 uppercase mt-4">
                  FULL-STACK APPS
                </div>
              </div>

              {/* Card 2: 100% Type-Safe */}
              <div className="bg-[#0b101c]/90 backdrop-blur-md border border-[#1d273a] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-center text-center min-h-[160px] shadow-lg shadow-black/40 hover:border-sky-500/40 hover:bg-[#0e1524] transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline leading-none">
                  <span>100</span>
                  <span className="text-[#38bdf8] text-2xl sm:text-3xl font-bold ml-1">%</span>
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-gray-400 uppercase mt-4">
                  TYPESCRIPT & NEXT.JS
                </div>
              </div>

              {/* Card 3: 500+ Annual Commits */}
              <div className="bg-[#0b101c]/90 backdrop-blur-md border border-[#1d273a] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-center text-center min-h-[160px] shadow-lg shadow-black/40 hover:border-sky-500/40 hover:bg-[#0e1524] transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline leading-none">
                  <span>500</span>
                  <span className="text-[#bef264] text-2xl sm:text-3xl font-bold ml-1">+</span>
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-gray-400 uppercase mt-4">
                  GITHUB COMMITS
                </div>
              </div>

              {/* Card 4: 0-Delay State Caching */}
              <div className="bg-[#0b101c]/90 backdrop-blur-md border border-[#1d273a] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-center text-center min-h-[160px] shadow-lg shadow-black/40 hover:border-sky-500/40 hover:bg-[#0e1524] transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none font-mono">
                  TanStack
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-[#38bdf8] uppercase mt-4">
                  QUERY V5 CACHING
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight Quote Callout */}
        <div className="mt-8 sm:mt-10 bg-[#090e18]/90 border border-[#182336] rounded-xl p-5 sm:p-6 flex items-start sm:items-center gap-4 sm:gap-5 shadow-lg shadow-black/30">
          <div className="w-1 self-stretch bg-[#38bdf8] rounded-full shrink-0 min-h-[24px] shadow-[0_0_8px_#38bdf8]" />
          <p className="font-mono text-xs sm:text-sm text-gray-300 leading-relaxed">
            I build web applications with strict attention to type safety, clean API design, and intuitive UX —{" "}
            <span className="text-[#38bdf8] font-semibold">turning complex backend logic into zero-latency user experiences</span>.
          </p>
        </div>

        {/* Live GitHub Stats Row */}
        <div className="mt-10">
          <GitHubStats />
        </div>
      </div>
    </section>
  );
}
