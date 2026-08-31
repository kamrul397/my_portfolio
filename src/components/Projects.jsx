"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCaseStudyModal from "@/components/ProjectCaseStudyModal";
import { toast } from "react-toastify";
import { fireConfetti } from "@/utils/confetti";

const projectsData = [
  {
    id: 1,
    title: "FitPass",
    subtitle: "Full-Stack SaaS Gym Subscription Platform",
    badge: "Featured SaaS & TypeScript",
    category: ["typescript", "nextjs", "mern", "fullstack"],
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
      "Framer Motion",
    ],
    liveLink: "https://fit-pass-omega.vercel.app",
    githubLink: "https://github.com/kamrul397/fitPass",
    image: "/fitpass.png",
  },
  {
    id: 2,
    title: "CareerConnect",
    subtitle: "Full-Stack Job Search & Recruitment Portal",
    badge: "Featured Next.js & MERN",
    category: ["nextjs", "mern", "fullstack"],
    demoCredentials: {
      recruiter: "recruiter@careerconnect.com / recruit123",
      candidate: "candidate@careerconnect.com / cand123",
    },
    description:
      "CareerConnect is a feature-rich job search & recruitment platform built to solve real-world hiring workflows. Candidates can search and apply for jobs with PDF resume uploads, Recruiters can post listings and evaluate applicants, and Admins can manage site content, approve postings, and manage company profiles.",
    highlights: [
      "Role-Based Access Control (Candidate, Recruiter, Admin)",
      "TanStack Query v5 Caching & Automatic Cache Invalidation",
      "Firebase Auth + Custom Express Server JWT Verification",
      "Cloudinary PDF Resume Upload & MongoDB Aggregation Pipelines",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TanStack Query v5",
      "Firebase Auth",
      "Cloudinary API",
      "Tailwind CSS v4",
    ],
    liveLink: "https://career-connect-iota-pied.vercel.app",
    githubLink: "https://github.com/kamrul397/careerConnect",
    image: "/project1.png",
  },
  {
    id: 3,
    title: "ClubSphere",
    subtitle: "University Club & Event Management Platform",
    badge: "Featured React & Firebase",
    category: ["react", "mern", "fullstack"],
    demoCredentials: {
      admin: "admin@clubsphere.com / club123",
    },
    description:
      "ClubSphere is a centralized platform designed to streamline student club discovery, membership management, and campus event organizing. Features interactive event booking with Stripe payments, club membership workflows, and rich admin management tools.",
    highlights: [
      "Stripe Payment Gateway for Paid Event Registrations",
      "Multi-Role Permission System (Student, Club Leader, Admin)",
      "Cloudinary Image Management & Real-time Event Slots",
      "Responsive Dashboard with Analytics & Revenue Tracking",
    ],
    tags: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Stripe Checkout",
      "Cloudinary",
      "Tailwind CSS v4",
    ],
    liveLink: "https://clubspere-firebase.web.app",
    githubLink: "https://github.com/kamrul397/ClubSphere_Frontend",
    image: "/project2.png",
  },
  {
    id: 4,
    title: "Revenio Store",
    subtitle: "Modern Full-Stack E-Commerce Platform",
    badge: "Featured E-Commerce",
    category: ["react", "mern", "fullstack"],
    description:
      "A fast, responsive full-stack e-commerce web application featuring dynamic catalog browsing, instant multi-filter search, a shopping cart with local state persistence, and a complete order management workflow with MongoDB Atlas.",
    highlights: [
      "Multi-Filter Product Catalog & Debounced Live Search",
      "Cart & Checkout Flow with Persistent State",
      "RESTful API Architecture with Express & MongoDB Atlas",
      "Mobile-First Responsive Design with Tailwind CSS",
    ],
    tags: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "Tailwind CSS v4",
    ],
    liveLink: "https://revenio-client.vercel.app",
    githubLink: "https://github.com/kamrul397/revenio-store",
    image: "/project3.png",
  },
];

const filterOptions = [
  { label: "All Projects", value: "all" },
  { label: "TypeScript", value: "typescript" },
  { label: "Next.js", value: "nextjs" },
  { label: "MERN Stack", value: "mern" },
  { label: "Full-Stack", value: "fullstack" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

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
    <section id="projects" className="py-12 px-4 sm:px-8 lg:px-12 scroll-mt-10">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
          <span>💼</span>
          <span>Featured Engineering Works</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Production-Grade{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-300">
            Web Applications
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
          Explore full-stack platforms engineered with Next.js 16, strict TypeScript, Stripe subscription workflows, and real-time MongoDB aggregations.
        </p>
      </div>

      <motion.div layout className="flex justify-center mb-10 sm:mb-12">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-inner">
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.value;
            const count =
              option.value === "all"
                ? projectsData.length
                : projectsData.filter((p) => p.category.includes(option.value))
                    .length;

            return (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${isActive ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-sky-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
              >
                {option.label} ({count})
              </button>
            );
          })}
        </div>
      </motion.div>

      <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative w-full h-52 sm:h-64 bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
                    {project.badge}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-xs font-bold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 shadow-md transition cursor-pointer"
                >
                  <span>🏗️ View Architecture</span>
                </button>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <span className="text-xs font-medium text-indigo-600 dark:text-sky-400">
                      {project.subtitle}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow font-normal">
                  {project.description}
                </p>

                {project.demoCredentials && (
                  <div className="mt-4 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
                      <span className="text-amber-500">🔑</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">Demo Login:</span>
                      <code className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 text-[11px] font-mono">
                        {Object.values(project.demoCredentials)[0]}
                      </code>
                    </div>
                    <button
                      onClick={() => copyCredentials(Object.values(project.demoCredentials)[0], project.title)}
                      className="text-xs font-bold text-blue-600 dark:text-sky-400 hover:underline cursor-pointer"
                    >
                      Copy Creds
                    </button>
                  </div>
                )}

                {project.highlights && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium px-2.5 py-1 rounded-md hover:bg-blue-50 dark:hover:bg-slate-750 hover:text-blue-700 dark:hover:text-sky-400 transition-colors border border-transparent dark:border-slate-750">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2.5">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98] transition-all">
                    <span>Live Demo</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                  <button onClick={() => setSelectedCaseStudy(project)} className="inline-flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold px-3.5 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-750 transition-all cursor-pointer border border-slate-200/80 dark:border-slate-750" title="View Architectural Case Study">
                    <span>Case Study</span>
                  </button>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold px-3.5 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    <svg className="w-4 h-4 fill-current text-slate-800 dark:text-slate-200" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
