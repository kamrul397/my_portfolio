"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { fireConfetti } from "@/utils/confetti";

const projectsData = [
  {
    id: 1,
    title: "FitPass",
    subtitle: "Full-Stack SaaS Gym Subscription Platform",
    badge: "Featured SaaS & TypeScript",
    category: ["typescript", "nextjs", "mern", "fullstack"],
    glowColor: "from-sky-400/60 via-blue-500/50 to-indigo-500/60",
    demoCredentials: {
      admin: "admin@fitpass.com / admin123",
      member: "member@fitpass.com / member123",
    },
    description:
      "FitPass is a production-grade full-stack SaaS gym membership platform engineered with strict TypeScript. It features complete Stripe Checkout subscriptions, webhook raw-body signature verification, smart plan proration calculation, hybrid Firebase & HTTP-Only JWT authentication, and an Admin Control Center for real-time analytics.",
    highlights: [
      "Strict End-to-End TypeScript Architecture & Zod Schema Validation",
      "Stripe Subscription Engine & Smart Plan Proration Logic",
      "Hybrid Firebase Auth + Secure HTTP-Only JWT Cookie Verification",
      "Admin Control Center (Real-time Revenue, Subscribers & Role RBAC)",
      "TanStack Query v5 Caching & Next.js 16 Edge Route Protection",
    ],
    tags: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe API",
      "TanStack Query v5",
      "Firebase Auth",
      "Tailwind CSS v4",
    ],
    liveLink: "https://fit-pass-omega.vercel.app",
    githubLink: "https://github.com/kamrul397/FitPass-Gym-Membership-Management-Application-Client",
    image: "/fitpass.png",
  },
  {
    id: 2,
    title: "Mini Kanban",
    subtitle: "Real-Time Collaborative Workflow & Board Management Platform",
    badge: "Next.js 16 • PostgreSQL • Prisma",
    category: ["typescript", "nextjs", "postgresql", "fullstack"],
    glowColor: "from-indigo-500/60 via-purple-500/50 to-cyan-500/60",
    demoCredentials: {
      account: "kamal123@gmail.com / Piyel123",
    },
    description:
      "Mini Kanban is a full-stack real-time collaborative task management platform engineered with Next.js 16, TypeScript, PostgreSQL, and Prisma ORM. It features optimistic drag-and-drop task workflows, mathematical fractional indexing for collision-free ordering, role-based board collaboration (Owner, Editor, Viewer), and touch-optimized mobile accordion stacks.",
    highlights: [
      "PostgreSQL & Prisma ORM Relational Architecture with Docker Compose Orchestration",
      "Mathematical Fractional Indexing Algorithm for Zero-Collision Task Reordering",
      "Granular 3-Tier Access Control: Board Owner, Team Editor, and Read-Only Stakeholder Viewer",
      "Optimistic Drag-and-Drop Task Updates with 0ms UI Latency & Resilient Background Sync",
      "Mobile-First Responsive Accordion Workflow with 1-Tap Stage Advancement & Multi-Row Desktop Wrap",
    ],
    tags: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "PostgreSQL",
      "Prisma ORM",
      "Node.js",
      "Express.js",
      "TanStack Query",
      "Docker",
      "Tailwind CSS v4",
    ],
    liveLink: "https://mini-kanban-board-rho.vercel.app",
    githubLink: "https://github.com/kamrul397/mini-kanban-board",
    image: "/kanban.png",
  },
  {
    id: 3,
    title: "CareerConnect",
    subtitle: "Full-Stack Recruitment & Career Management Platform",
    badge: "Recruitment & MongoDB Aggregations",
    category: ["nextjs", "mern", "fullstack"],
    glowColor: "from-emerald-400/60 via-teal-500/50 to-cyan-500/60",
    demoCredentials: {
      candidate: "candidate@careerconnect.com / candidate123",
      recruiter: "recruiter@careerconnect.com / recruiter123",
    },
    description:
      "CareerConnect is a feature-rich job search & recruitment platform built to solve real-world hiring workflows. Candidates can search and apply for jobs with PDF resume uploads, Recruiters can post listings and evaluate applicants, and Admins can manage site content, approve postings, and manage company profiles.",
    highlights: [
      "Next.js 16 App Router & React 19 Frontend with Smooth Route Interception",
      "Three-Tier Role Architecture (Candidate, Recruiter, Admin)",
      "Cloudinary PDF Resume Upload & MongoDB Aggregation Pipelines",
      "Secure JWT Authentication via HTTP-Only Cookies",
      "Real-Time Application Status Pipeline (Applied → Reviewing → Accepted)",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Cloudinary API",
      "Tailwind CSS v4",
    ],
    liveLink: "https://career-connect-iota-pied.vercel.app",
    githubLink: "https://github.com/kamrul397/job-hunting-client",
    image: "/project1.png",
  },
  {
    id: 4,
    title: "ClubSphere",
    subtitle: "University Extracurricular & Event Management Platform",
    badge: "Event System & Role Dashboard",
    category: ["mern", "fullstack"],
    glowColor: "from-purple-400/60 via-violet-500/50 to-indigo-500/60",
    demoCredentials: {
      admin: "admin@clubsphere.com / admin123",
      clubManager: "manager@clubsphere.com / manager123",
    },
    description:
      "ClubSphere is a centralized activity management system designed for university campuses. It streamlines club creation, membership enrollment, event ticketing with Stripe payment integration, and dynamic role management across Students, Club Managers, and University Admins.",
    highlights: [
      "Full Role-Based Dashboards for Admins, Club Managers, and Members",
      "Stripe Checkout for Paid Club Event Registrations & Membership Dues",
      "Firebase Authentication with Custom Role Sync to MongoDB",
      "Cloudinary Image Uploads for Club Banners and Event Posters",
      "Dynamic Membership Application & Approval Workflow",
    ],
    tags: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Stripe API",
      "TanStack Query",
      "Tailwind CSS",
    ],
    liveLink: "https://clubspere-firebase.web.app",
    githubLink: "https://github.com/kamrul397/ClubSphere-Client",
    image: "/project2.png",
  },
];

const filterCategories = [
  { label: "All Projects", value: "all" },
  { label: "TypeScript", value: "typescript" },
  { label: "Next.js", value: "nextjs" },
  { label: "PostgreSQL & Prisma", value: "postgresql" },
  { label: "MERN Stack", value: "mern" },
  { label: "Full-Stack", value: "fullstack" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(activeFilter)
        );

  const copyCredentials = (creds, projectTitle) => {
    navigator.clipboard.writeText(creds);
    fireConfetti({ particleCount: 30 });
    toast.success(`Copied ${projectTitle} Demo Credentials!`);
  };

  return (
    <section id="projects" className="w-full relative z-10 py-12 sm:py-16 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header with Numbered Monospace Tag */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase font-mono">
            03 <span className="text-gray-600">/</span> FEATURED PROJECTS
          </span>
          <hr className="border-t border-gray-800 mt-3 w-full" />
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Production <span className="text-[#38bdf8]">Showcase</span>
            </h2>
            <p className="mt-3 text-[#8e9cb0] text-sm sm:text-base max-w-2xl font-normal">
              Full-stack platforms engineered with Next.js 16, strict TypeScript, PostgreSQL & Prisma ORM, Stripe subscription workflows, and real-time MongoDB aggregations.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-start mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0b101c] border border-[#1b2538]">
            {filterCategories.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-black bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative flex flex-col rounded-3xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Neon Glow Border Effect on Hover */}
                <div
                  className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${project.glowColor} opacity-30 blur-[2px] group-hover:opacity-90 transition-opacity duration-300`}
                />

                {/* Card Container */}
                <div className="relative flex flex-col h-full bg-[#0a0f19]/95 backdrop-blur-md border border-[#1b2538] rounded-3xl overflow-hidden shadow-2xl shadow-black/60 group-hover:border-sky-500/40 transition-colors">
                  {/* Banner Image */}
                  <div className="relative w-full h-52 sm:h-60 bg-[#06080e] overflow-hidden shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f19] via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/85 backdrop-blur-md text-white text-[11px] font-mono font-semibold px-3 py-1 rounded-lg border border-white/10 shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                        <span>{project.badge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <span className="text-xs font-mono font-medium text-[#38bdf8]">
                          {project.subtitle}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-[#8e9cb0] text-sm leading-relaxed flex-grow font-normal">
                      {project.description}
                    </p>

                    {/* Demo Login Credentials Pill */}
                    {project.demoCredentials && (
                      <div className="mt-4 p-3 rounded-xl bg-[#0c121e] border border-[#1b263a] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                        <div className="flex items-center gap-1.5 text-gray-300">
                          <span className="text-[#bef264]">🔑</span>
                          <span className="font-semibold text-gray-200">Demo Login:</span>
                          <code className="px-1.5 py-0.5 rounded bg-[#121826] text-[11px] text-[#38bdf8]">
                            {Object.values(project.demoCredentials)[0]}
                          </code>
                        </div>
                        <button
                          onClick={() => copyCredentials(Object.values(project.demoCredentials)[0], project.title)}
                          className="text-xs font-bold text-[#38bdf8] hover:underline cursor-pointer"
                        >
                          Copy
                        </button>
                      </div>
                    )}

                    {/* Key Highlights */}
                    {project.highlights && (
                      <div className="mt-4 pt-3 border-t border-[#1a2538]">
                        <h4 className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-2">
                          Key Highlights
                        </h4>
                        <ul className="space-y-1.5">
                          {project.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs font-mono text-gray-300">
                              <span className="text-[#38bdf8] font-bold">›</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#121826] text-gray-300 text-xs font-mono px-2.5 py-1 rounded-md border border-[#1e2a3e]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="mt-6 pt-4 border-t border-[#1a2538] flex flex-wrap items-center gap-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#38bdf8] hover:bg-[#22d3ee] text-black text-xs sm:text-sm font-mono font-bold px-4 py-2.5 rounded-xl shadow-[0_0_15px_rgba(56,189,248,0.25)] active:scale-[0.98] transition-all"
                      >
                        <span>Live Demo</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 bg-[#121826] hover:bg-[#182236] border border-[#1e2a3e] hover:border-sky-500/40 text-gray-200 text-xs sm:text-sm font-mono px-4 py-2.5 rounded-xl transition-all"
                      >
                        <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
