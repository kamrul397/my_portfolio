"use client";

import React, { useState } from "react";

const skillsData = [
  // Frontend
  {
    name: "TypeScript",
    subtitle: "Typed JavaScript & Schemas",
    category: "frontend",
    level: "Core Stack",
    icon: (
      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm16.71 8.878c.957 0 1.83.275 2.617.825.787.55 1.34 1.34 1.66 2.37l-2.616 1.08c-.18-.55-.49-.97-.93-1.26-.44-.29-1-.44-1.68-.44-.75 0-1.34.2-1.77.6-.43.4-.645.92-.645 1.56 0 .59.195 1.05.585 1.38.39.33 1.02.6 1.89.81l1.41.36c1.4.35 2.455.93 3.165 1.74.71.81 1.065 1.85 1.065 3.12 0 1.44-.51 2.61-1.53 3.51-1.02.9-2.37 1.35-4.05 1.35-1.62 0-2.985-.45-4.095-1.35-1.11-.9-1.725-2.13-1.845-3.69l2.79-.48c.12.87.51 1.54 1.17 2.01.66.47 1.47.7 2.43.7.87 0 1.56-.22 2.07-.66.51-.44.765-.99.765-1.65 0-.57-.2-1.03-.6-1.38-.4-.35-1.05-.63-1.95-.84l-1.35-.33c-1.38-.33-2.4-.89-3.06-1.68-.66-.79-.99-1.78-.99-2.97 0-1.38.495-2.5 1.485-3.36.99-.86 2.28-1.29 3.87-1.29zm-9.36.21v14.43H5.625V9.088H1.68V6.75h10.74v2.338H8.475z" />
      </svg>
    ),
  },
  {
    name: "Next.js 16",
    subtitle: "Full-Stack Framework",
    category: "frontend",
    level: "Core Stack",
    icon: (
      <svg className="w-6 h-6 text-slate-900" viewBox="0 0 180 180" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180ZM134.426 145.474L71.8656 64.7999H58.5V115.2H70.65V78.7845L126.046 150.155C128.983 148.723 131.782 147.155 134.426 145.474ZM121.5 64.7999H109.35V115.2H121.5V64.7999Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "React 19",
    subtitle: "UI Component Library",
    category: "frontend",
    level: "Core Stack",
    icon: (
      <svg className="w-6 h-6 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "JavaScript (ES6+)",
    subtitle: "Core Programming Language",
    category: "frontend",
    level: "Advanced",
    icon: (
      <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm10.72 13.9c.7 0 1.25-.2 1.66-.6.41-.4.62-.97.62-1.7V10.1h-2v4.44c0 .24-.06.42-.18.54-.12.12-.29.18-.5.18-.28 0-.48-.09-.6-.27-.12-.18-.18-.46-.18-.84V10.1H11v4.45c0 .96.25 1.66.75 2.1.5.44 1.16.66 1.97.66zm-5.46 0c.93 0 1.6-.26 2.01-.78.41-.52.62-1.28.62-2.28 0-.82-.16-1.46-.48-1.92-.32-.46-.92-.89-1.8-1.29l-.38-.17c-.45-.2-.76-.38-.93-.54-.17-.16-.26-.35-.26-.57 0-.24.08-.43.24-.57.16-.14.38-.21.66-.21.31 0 .56.09.74.27.18.18.28.46.3.84h1.94c-.05-.88-.34-1.55-.87-2.01-.53-.46-1.23-.69-2.11-.69-.93 0-1.63.24-2.1.72-.47.48-.71 1.14-.71 1.98 0 .73.16 1.32.48 1.77.32.45.9.87 1.74 1.26l.36.16c.51.23.86.43 1.05.6.19.17.29.39.29.66 0 .28-.1.5-.3.66-.2.16-.48.24-.84.24-.4 0-.71-.12-.93-.36-.22-.24-.34-.61-.36-1.11H6c.03 1.01.35 1.76.96 2.25.61.49 1.38.74 2.3.74z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS v4",
    subtitle: "Modern Styling Engine",
    category: "frontend",
    level: "Core Stack",
    icon: (
      <svg className="w-6 h-6 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-3.314 0-6 2.686-6 6 0 1.982 1.066 3.704 2.656 4.678C9.52 17.228 10.71 18 12 18c3.314 0-6-2.686 6-6 0-1.982-1.066-3.704-2.656-4.678C14.48 6.772 13.29 6 12 6zm-5.5 3c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm11 0c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
      </svg>
    ),
  },

  // Backend & Database
  {
    name: "Node.js",
    subtitle: "Server Runtime Environment",
    category: "backend",
    level: "Core Stack",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.2l7.8 4.3v7L12 19.8l-7.8-4.3v-7L12 4.2z" />
      </svg>
    ),
  },
  {
    name: "Express.js",
    subtitle: "RESTful API Framework",
    category: "backend",
    level: "Core Stack",
    icon: (
      <svg className="w-6 h-6 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 20.25c-4.556 0-8.25-3.694-8.25-8.25S7.444 3.75 12 3.75s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "MongoDB Atlas",
    subtitle: "NoSQL Database & Aggregations",
    category: "backend",
    level: "Core Stack",
    icon: (
      <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 4.5 9 4.5 14.5C4.5 18.642 7.858 22 12 22C16.142 22 19.5 18.642 19.5 14.5C19.5 9 12 2 12 2ZM12 20C8.962 20 6.5 17.538 6.5 14.5C6.5 11.23 10.74 5.92 12 4.34C13.26 5.92 17.5 11.23 17.5 14.5C17.5 17.538 15.038 20 12 20Z" />
      </svg>
    ),
  },
  {
    name: "TanStack Query v5",
    subtitle: "State Caching & Invalidation",
    category: "backend",
    level: "Advanced",
    icon: (
      <svg className="w-6 h-6 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },

  // Tools & Platforms
  {
    name: "Firebase Auth",
    subtitle: "Authentication & OAuth",
    category: "tools",
    level: "Proficient",
    icon: (
      <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.89 15.672L6.255 1.155a.82.82 0 011.529-.273l3.226 6.096L3.89 15.672zm16.16-1.745l-2.614-12.7a.82.82 0 00-1.503-.306L12 8.784l2.128 4.02 5.922 1.123zM12.983 9.774l-2.015-3.807-6.9 13.067L12 23l8.02-3.966-7.037-9.26z" />
      </svg>
    ),
  },
  {
    name: "Cloudinary API",
    subtitle: "Cloud Media & Asset Uploads",
    category: "tools",
    level: "Proficient",
    icon: (
      <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    subtitle: "Version Control & Workflows",
    category: "tools",
    level: "Core Stack",
    icon: (
      <svg className="w-6 h-6 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Stripe API",
    subtitle: "Subscriptions & Webhooks",
    category: "tools",
    level: "Core Stack",
    icon: (
      <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.839 3.771 6.552 6.862 7.707 2.298.857 3.328 1.579 3.328 2.583 0 .979-.861 1.554-2.316 1.554-2.168 0-5.187-1.127-7.234-2.417L3.48 22.25c2.09 1.134 5.378 1.75 8.784 1.75 2.66 0 4.845-.632 6.368-1.854 1.611-1.293 2.454-3.147 2.454-5.467 0-5.06-3.882-6.643-7.11-7.529z" />
      </svg>
    ),
  },
  {
    name: "Vercel & Render",
    subtitle: "Cloud Hosting & Deployment",
    category: "tools",
    level: "Proficient",
    icon: (
      <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 22.5L12 1.5 0 22.5h24z" />
      </svg>
    ),
  },
];

const categoryTabs = [
  { label: "All Stack", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend & DB", value: "backend" },
  { label: "Tools & DevOps", value: "tools" },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = skillsData.filter((skill) => {
    if (activeTab === "all") return true;
    return skill.category === activeTab;
  });

  return (
    <section id="skills" className="py-12 px-4 sm:px-8 lg:px-12 scroll-mt-10">
      {/* Header Section */}
      <div className="mb-10 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-6 sm:p-10 rounded-3xl md:max-w-4xl text-center mx-auto shadow-md relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          TECHNICAL CAPABILITIES
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Developer Tools</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
          A comprehensive breakdown of the languages, frameworks, databases, and deployment platforms I utilize to build modern full-stack web applications.
        </p>

        {/* Interactive Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categoryTabs.map((tab) => {
            const count =
              tab.value === "all"
                ? skillsData.length
                : skillsData.filter((s) => s.category === tab.value).length;
            const isActive = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-[1.02]"
                    : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white border border-white/10"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-white/20 text-white font-bold"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Optimized Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-300 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Left Accent Highlight Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex items-center gap-4 min-w-0 pr-2">
              {/* Icon Wrapper */}
              <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/80 dark:from-slate-800 dark:to-slate-850 border border-slate-200/80 dark:border-slate-750 shadow-2xs group-hover:bg-blue-50/70 dark:group-hover:bg-slate-750 group-hover:border-blue-200 group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
                {skill.icon}
              </div>

              {/* Text Container */}
              <div className="min-w-0 flex flex-col justify-center">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors truncate leading-snug">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5 font-medium">
                  {skill.subtitle}
                </p>
              </div>
            </div>

            {/* Level Badge */}
            <span
              className={`shrink-0 text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider transition-colors ${
                skill.level === "Core Stack"
                  ? "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 border border-blue-100/80 dark:border-blue-900/60 group-hover:bg-blue-600 group-hover:text-white"
                  : skill.level === "Advanced"
                  ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100/80 dark:border-indigo-900/60 group-hover:bg-indigo-600 group-hover:text-white"
                  : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-100/80 dark:border-emerald-900/60 group-hover:bg-emerald-600 group-hover:text-white"
              }`}
            >
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
