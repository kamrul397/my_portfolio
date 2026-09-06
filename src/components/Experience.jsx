"use client";

import React, { useState } from "react";

const timelineData = [
  {
    period: "2026 - Present",
    duration: "Internship",
    role: "Web Developer Intern",
    company: "GOBAADI",
    location: "Remote / Hybrid",
    dates: "2026 — Present",
    glowColor: "from-sky-400/60 via-blue-500/50 to-indigo-500/60",
    details: [
      "Contributing as a Web Developer Intern at GOBAADI, building responsive user interface components and integrating RESTful APIs.",
      "Collaborating on modern web applications with clean component modularity, state management, and cross-browser testing.",
      "Translating product requirements into performant, accessible UI/UX layouts.",
    ],
  },
  {
    period: "2024 - Present",
    duration: "Full-Stack Dev",
    role: "Full-Stack Web Developer (Training & Projects)",
    company: "Programming Hero & Open Source",
    location: "Online / Self-Driven",
    dates: "2024 — Present",
    glowColor: "from-emerald-400/60 via-teal-500/50 to-cyan-500/60",
    details: [
      "Mastered modern full-stack web development with Programming Hero from 2024, specializing in Next.js 16, React 19, TypeScript, Node.js, Express, and PostgreSQL.",
      "Engineered production-grade web applications including Mini Kanban (PostgreSQL, Prisma ORM, Docker), CareerConnect (Recruitment Platform), and ClubSphere (Extracurricular & Event Platform).",
      "Modeled relational database schemas with Prisma ORM migrations alongside MongoDB multi-stage aggregation pipelines.",
      "Implemented continuous fractional order indexing algorithms, TanStack Query v5 state caching, and zero-trust JWT authentication.",
    ],
  },
  {
    period: "2024 - 2026",
    duration: "IT & Design",
    role: "Computer Operator & Graphic Designer",
    company: "Commercial IT & Print Studio",
    location: "Netrakona, Bangladesh",
    dates: "2024 — 2026",
    glowColor: "from-purple-400/60 via-violet-500/50 to-indigo-500/60",
    details: [
      "Managed end-to-end computer operations, digital document processing, client layouts, and commercial printing workflows.",
      "Designed marketing graphics, banners, branding assets, and promotional materials with pixel-perfect visual hierarchy.",
      "Delivered computer troubleshooting, software support, and digital asset management for local clients.",
    ],
  },
  {
    period: "2021 - 2025",
    duration: "B.Sc. in CSE",
    role: "B.Sc. in Computer Science & Engineering",
    company: "Institute of Science Trade & Technology (ISTT)",
    location: "Bangladesh",
    dates: "Graduated: 2025",
    glowColor: "from-blue-400/60 via-indigo-500/50 to-violet-500/60",
    details: [
      "Graduated with Bachelor of Science in Computer Science & Engineering (B.Sc. CSE) from ISTT in 2025.",
      "Rigorous coursework in Data Structures, Algorithms, Relational Database Systems (SQL), OOP, and Software Engineering.",
    ],
  },
  {
    period: "2018 - 2020",
    duration: "HSC / Intermediate",
    role: "Higher Secondary Certificate (HSC)",
    company: "Netrakona Govt. College",
    location: "Netrakona, Bangladesh",
    dates: "Passing Year: 2020",
    glowColor: "from-amber-400/60 via-orange-500/50 to-rose-500/60",
    details: [
      "Completed Higher Secondary Certificate (Intermediate) education from Netrakona Govt. College (Class of 2020).",
      "Demonstrated strong dedication to analytical problem-solving, digital skills, and computer technologies.",
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleItem = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="w-full relative z-10 py-12 sm:py-16 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header with Numbered Monospace Tag */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase font-mono">
            05 <span className="text-gray-600">/</span> CAREER & EDUCATION TIMELINE
          </span>
          <hr className="border-t border-gray-800 mt-3 w-full" />
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-12 sm:mb-16">
          Developer <span className="text-[#38bdf8]">Journey</span>
        </h2>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Continuous Vertical Glowing Line on desktop */}
          <div className="hidden md:block absolute left-[225px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#38bdf8] via-[#0284c7] to-[#0369a1] shadow-[0_0_12px_#38bdf8]" />

          <div className="space-y-6 sm:space-y-8">
            {timelineData.map((item, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-start md:items-center group"
                >
                  {/* Left Column: Period & Duration Pill */}
                  <div className="w-full md:w-[200px] flex md:flex-col items-center md:items-end justify-between md:justify-center md:pr-6 shrink-0 mb-3 md:mb-0">
                    <div className="font-mono text-base sm:text-lg font-bold text-gray-100">
                      {item.period}
                    </div>
                    <div className="px-3 py-0.5 rounded-full text-[11px] font-mono font-medium text-[#38bdf8] bg-[#0c1a2e] border border-[#1e3a5f] mt-1 shadow-[0_0_8px_rgba(56,189,248,0.15)]">
                      {item.duration}
                    </div>
                  </div>

                  {/* Center Connector Branch Line (Desktop only) */}
                  <div className="hidden md:flex items-center w-[50px] shrink-0 relative">
                    <div className="w-full h-[2px] bg-[#38bdf8]/80 shadow-[0_0_8px_#38bdf8]" />
                  </div>

                  {/* Right Column: Interactive Card */}
                  <div
                    onClick={() => toggleItem(idx)}
                    className="w-full relative cursor-pointer rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
                  >
                    {/* Colored Glow Edge / Border Effect on Card */}
                    <div
                      className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${item.glowColor} opacity-50 blur-[2px] group-hover:opacity-90 transition-opacity`}
                    />

                    {/* Main Card Surface */}
                    <div className="relative bg-[#0a0f19]/95 backdrop-blur-md border border-[#1d273a] rounded-2xl p-5 sm:p-6 shadow-xl shadow-black/50 hover:border-sky-500/40 hover:bg-[#0e1524] transition-colors">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-gray-100 transition-colors">
                            {item.role}
                          </h3>
                          <div className="text-xs sm:text-sm font-mono text-gray-400 mt-1">
                            <span>{item.dates}</span>
                            <span className="text-gray-600 mx-2">·</span>
                            <span className="text-[#38bdf8]">{item.company}</span>
                            <span className="text-gray-600 mx-1.5">//</span>
                            <span className="text-gray-400">{item.location}</span>
                          </div>
                        </div>

                        {/* Chevron Icon */}
                        <div className="shrink-0 p-1.5 rounded-lg text-gray-400 group-hover:text-white transition-colors">
                          <svg
                            className={`w-5 h-5 transform transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-[#38bdf8]" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Expandable Details */}
                      {isExpanded && item.details && (
                        <div className="mt-4 pt-4 border-t border-[#1a2538] space-y-2">
                          {item.details.map((detail, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed font-mono"
                            >
                              <span className="text-[#38bdf8] font-bold">›</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
