"use client";

import { useState } from "react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "CareerConnect",
    subtitle: "Full-Stack Job Search & Recruitment Portal",
    badge: "Featured Next.js & MERN",
    category: ["nextjs", "mern", "fullstack"],
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
      "Tailwind CSS",
    ],
    liveLink: "https://career-connect-iota-pied.vercel.app",
    githubLink: "https://github.com/kamrul397/careerConnect",
    image: "/project4.png",
  },
  {
    id: 2,
    title: "ClubSphere",
    badge: "Featured MERN Platform",
    category: ["mern", "fullstack"],
    description:
      "ClubSphere is a full-stack MERN web application for discovering, joining, and managing local clubs. Members can browse approved clubs, join clubs through membership, and register for free events. Club Managers can create and manage clubs and events, while Admins can review applications, manage users, and monitor platform activity.",
    highlights: [
      "Role-Based Access Control (Admin, Manager, Member)",
      "JWT Authentication & Protected Routes",
      "TanStack Query for Optimistic UI Updates",
    ],
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "JWT Authentication",
    ],
    liveLink: "https://clubspere-firebase.web.app",
    githubLink: "https://github.com/kamrul397/ClubSphere_Frontend",
    image: "/project1.png",
  },
  {
    id: 3,
    title: "TechNova Store",
    badge: "Full-Stack E-Commerce",
    category: ["nextjs", "fullstack"],
    description:
      "TechNova Store is a modern full-stack e-commerce platform built with Next.js and Express.js. It features Firebase Authentication (Email & Google Sign-In), secure protected routes, complete product CRUD operations, Cloudinary image uploads, advanced search and filtering, responsive UI, and deployment on Vercel and Render.",
    highlights: [
      "Firebase Email & Google OAuth",
      "Cloudinary Image Upload & Product CRUD",
      "Real-time Search & Multi-criteria Filtering",
    ],
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Cloudinary",
      "Tailwind CSS",
      "DaisyUI",
    ],
    liveLink: "https://revenio-client.vercel.app",
    githubLink: "https://github.com/kamrul397/revenio-store",
    image: "/project2.png",
  },
  {
    id: 4,
    title: "Care.xyz",
    subtitle: "On-Demand Home Care Services Platform",
    badge: "Healthcare & Services",
    category: ["nextjs", "fullstack"],
    description:
      "Care.xyz is a responsive full-stack web application built with Next.js (App Router) and MongoDB. The platform enables users to book professional home care services—including baby care, elderly care, babysitting, and patient support—through an intuitive, mobile-friendly interface.",
    highlights: [
      "Next.js App Router Architecture",
      "On-Demand Booking & Service Schedules",
      "Responsive Touch-Optimized UX",
    ],
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Firebase"],
    liveLink: "https://care-flow-lyart.vercel.app/",
    githubLink: "https://github.com/kamrul397/CareFlow",
    image: "/project3.png",
  },
];

const filterOptions = [
  { label: "All Projects", value: "all" },
  { label: "Next.js", value: "nextjs" },
  { label: "MERN Stack", value: "mern" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-12 px-4 sm:px-8 lg:px-12 scroll-mt-10">
      {/* Header Section */}
      <div className="mb-12 bg-gradient-to-r from-blue-50 via-indigo-50/70 to-slate-50 border border-blue-100/80 p-6 sm:p-10 rounded-3xl md:max-w-4xl text-center mx-auto shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold tracking-wide mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          PORTFOLIO SHOWCASE
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Web Applications</span>
        </h2>
        <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Explore production-ready full-stack applications built with modern frontend frameworks, scalable backends, and robust security patterns.
        </p>

        {/* Interactive Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {filterOptions.map((option) => {
            const count =
              option.value === "all"
                ? projectsData.length
                : projectsData.filter((p) => p.category.includes(option.value)).length;
            const isActive = activeFilter === option.value;

            return (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 hover:text-slate-900"
                }`}
              >
                <span>{option.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white font-bold"
                      : "bg-slate-100 text-slate-500 font-medium"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Project Image Wrapper */}
            <div className="relative w-full h-52 sm:h-64 bg-slate-100 overflow-hidden shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={project.id === 1}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Category Badge Pill over Image */}
              <div className="absolute top-4 left-4">
                <span className="bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
                  {project.badge}
                </span>
              </div>
            </div>

            {/* Project Details Content */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <span className="text-xs font-medium text-indigo-600">
                    {project.subtitle}
                  </span>
                )}
              </div>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Key Architecture Highlights */}
              {project.highlights && (
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <svg
                          className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies / Tags */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98] transition-all"
                >
                  <span>Live Demo</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-slate-800" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
