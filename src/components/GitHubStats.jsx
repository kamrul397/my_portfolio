"use client";

import React, { useState, useEffect } from "react";

export default function GitHubStats() {
  const [stats, setStats] = useState({
    publicRepos: 24,
    followers: 12,
    following: 15,
    stars: 18,
    languages: [
      { name: "TypeScript", percentage: 48, color: "#3178c6" },
      { name: "JavaScript", percentage: 32, color: "#f7df1e" },
      { name: "CSS / Tailwind", percentage: 12, color: "#38bdf8" },
      { name: "HTML / Other", percentage: 8, color: "#e34f26" },
    ],
    loaded: false,
  });

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const userRes = await fetch("https://api.github.com/users/kamrul397");
        if (userRes.ok) {
          const userData = await userRes.json();
          setStats((prev) => ({
            ...prev,
            publicRepos: userData.public_repos || prev.publicRepos,
            followers: userData.followers || prev.followers,
            following: userData.following || prev.following,
            loaded: true,
          }));
        }
      } catch (err) {
        // Fallback gracefully to default stats
        setStats((prev) => ({ ...prev, loaded: true }));
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <div className="w-full p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>GitHub Activity & Code Metrics</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Live metrics from <a href="https://github.com/kamrul397" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-sky-400 hover:underline">@kamrul397</a>
            </p>
          </div>
        </div>

        <a
          href="https://github.com/kamrul397"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 flex items-center gap-1"
        >
          <span>View Profile</span>
          <span>→</span>
        </a>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
          <span className="text-lg sm:text-xl font-black text-blue-600 dark:text-sky-400">
            {stats.publicRepos}+
          </span>
          <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Repositories
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
          <span className="text-lg sm:text-xl font-black text-indigo-600 dark:text-indigo-400">
            100%
          </span>
          <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Open Source
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
          <span className="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400">
            500+
          </span>
          <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Annual Commits
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
          <span className="text-lg sm:text-xl font-black text-violet-600 dark:text-violet-400">
            Next.js 16
          </span>
          <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            Primary Stack
          </span>
        </div>
      </div>

      {/* Language Distribution Bar */}
      <div>
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
          <span>Top Language Distribution</span>
          <span className="text-slate-400 text-[11px]">Strict TypeScript Preferred</span>
        </div>

        {/* Progress Bar Multi-Segment */}
        <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex mb-3">
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

        {/* Language Legend */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
          {stats.languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: lang.color }}
              />
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {lang.name}
              </span>
              <span className="text-slate-400 text-[11px]">
                {lang.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
