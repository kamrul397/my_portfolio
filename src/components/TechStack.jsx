"use client";

import React, { useState } from "react";

const expertiseCards = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and high-performance user interfaces with modern React ecosystems.",
    tags: ["TypeScript", "Next.js 16", "React 19", "Tailwind CSS v4", "Framer Motion", "Zod"],
  },
  {
    title: "Backend & API Architecture",
    description: "Engineering scalable RESTful microservices, authentication middlewares, and webhook integrations.",
    tags: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Edge Middleware", "Nodemailer"],
  },
  {
    title: "Database & Aggregations",
    description: "Architecting relational data models, Prisma ORM schemas, MongoDB aggregation pipelines, and high-performance indexed queries.",
    tags: ["PostgreSQL", "Prisma ORM", "MongoDB", "Mongoose", "Aggregation Pipelines", "Atlas Search", "Indexing"],
  },
  {
    title: "Billing & Subscriptions",
    description: "Implementing end-to-end payment workflows, recurring subscriptions, and webhook signature verification.",
    tags: ["Stripe Checkout", "Customer Portal", "Webhook Signatures", "Proration Engine", "Payment Intents"],
  },
  {
    title: "State Management & Caching",
    description: "Optimizing client runtime latency with intelligent background caching and optimistic UI updates.",
    tags: ["TanStack Query v5", "Cache Invalidation", "Optimistic Mutations", "Zustand", "Context API"],
  },
  {
    title: "DevOps & Cloud Integration",
    description: "Deploying production-ready applications with continuous deployment, Docker containerization, and secure cloud storage.",
    tags: ["Docker", "Vercel", "Git & GitHub", "Cloudinary API", "Firebase OAuth", "Environment Config"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="w-full relative z-10 py-12 sm:py-16 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header with Numbered Monospace Tag */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase font-mono">
            04 <span className="text-gray-600">/</span> EXPERTISE & SKILLS
          </span>
          <hr className="border-t border-gray-800 mt-3 w-full" />
        </div>

        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-[#38bdf8]">Proficiency</span>
          </h2>
          <p className="mt-3 text-[#8e9cb0] text-sm sm:text-base max-w-2xl font-normal">
            A comprehensive breakdown of core capabilities across modern full-stack development, server architectures, database modeling, and third-party integrations.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {expertiseCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#0b101c]/90 backdrop-blur-md border border-[#1b2538] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[250px] shadow-lg shadow-black/40 hover:border-sky-500/40 hover:bg-[#0e1625] transition-all duration-300 group"
            >
              {/* Top info */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5 group-hover:text-sky-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#8e9cb0] text-sm leading-relaxed mb-5 font-normal">
                  {card.description}
                </p>
              </div>

              {/* Tags pill list */}
              <div className="flex flex-wrap gap-2 pt-1">
                {card.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-gray-300 bg-[#121826] border border-[#1e2a3e] hover:border-gray-600 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
