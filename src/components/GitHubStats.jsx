"use client";

import React from "react";

export default function GitHubStats() {
  const stats = {
    publicRepos: 24,
    followers: 12,
    following: 15,
    commits: "500+",
    languages: [
      { name: "TypeScript", percentage: 48, color: "#38bdf8" },
      { name: "JavaScript", percentage: 32, color: "#f7df1e" },
      { name: "Tailwind CSS", percentage: 12, color: "#a855f7" },
      { name: "HTML / Other", percentage: 8, color: "#bef264" },
    ],
  };

  return (
    <div className="w-full p-5 sm:p-6 rounded-2xl bg-[#090e18]/90 backdrop-blur-md border border-[#1b2538] shadow-xl shadow-black/40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#121826] border border-[#1e2a3e] text-white flex items-center justify-center shrink-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
              <span>GitHub Code Metrics</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] animate-pulse" />
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Live metrics from <a href="https://github.com/kamrul397" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline">@kamrul397</a>
            </p>
          </div>
        </div>

        <a
          href="https://github.com/kamrul397"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono font-bold text-[#38bdf8] hover:text-[#22d3ee] flex items-center gap-1 self-start sm:self-center"
        >
          <span>View Profile</span>
          <span>→</span>
        </a>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="p-3 rounded-xl bg-[#0c121e] border border-[#1b263a] text-center">
          <span className="text-lg sm:text-xl font-bold text-[#38bdf8] font-mono">
            {stats.publicRepos}+
          </span>
          <span className="block text-[10px] font-mono text-gray-400 uppercase mt-1">
            Repositories
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[#0c121e] border border-[#1b263a] text-center">
          <span className="text-lg sm:text-xl font-bold text-white font-mono">
            100%
          </span>
          <span className="block text-[10px] font-mono text-gray-400 uppercase mt-1">
            Open Source
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[#0c121e] border border-[#1b263a] text-center">
          <span className="text-lg sm:text-xl font-bold text-[#bef264] font-mono">
            {stats.commits}
          </span>
          <span className="block text-[10px] font-mono text-gray-400 uppercase mt-1">
            Annual Commits
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[#0c121e] border border-[#1b263a] text-center">
          <span className="text-lg sm:text-xl font-bold text-indigo-400 font-mono">
            Next.js 16
          </span>
          <span className="block text-[10px] font-mono text-gray-400 uppercase mt-1">
            Core Framework
          </span>
        </div>
      </div>

      {/* Language Distribution Bar */}
      <div>
        <div className="flex items-center justify-between text-xs font-mono text-gray-300 mb-2">
          <span>Top Stack Distribution</span>
          <span className="text-[#38bdf8] text-[11px]">Strict TypeScript Preferred</span>
        </div>

        <div className="h-2 w-full rounded-full bg-[#121826] overflow-hidden flex mb-3">
          {stats.languages.map((lang) => (
            <div
              key={lang.name}
              style={{
                width: `${lang.percentage}%`,
                backgroundColor: lang.color,
              }}
              title={`${lang.name}: ${lang.percentage}%`}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
          {stats.languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: lang.color }}
              />
              <span className="text-gray-300">
                {lang.name}
              </span>
              <span className="text-gray-500 text-[10px]">
                {lang.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
