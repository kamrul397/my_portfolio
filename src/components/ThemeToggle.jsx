"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-xs cursor-pointer ${
        isDark
          ? "bg-slate-800/90 text-amber-300 border border-slate-700/80 hover:bg-slate-750 hover:text-amber-200 hover:border-amber-400/40 hover:shadow-amber-500/10 shadow-md"
          : "bg-white/90 text-slate-700 border border-slate-200/90 hover:bg-slate-100 hover:text-blue-600 hover:border-blue-300 shadow-sm"
      } ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sun Icon (shown in dark mode to switch to light) */}
      <svg
        className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 transform ${
          isDark
            ? "rotate-0 scale-100 opacity-100 text-amber-300"
            : "-rotate-90 scale-0 opacity-0 absolute"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.2" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>

      {/* Moon Icon (shown in light mode to switch to dark) */}
      <svg
        className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 transform ${
          !isDark
            ? "rotate-0 scale-100 opacity-100 text-slate-700 hover:text-indigo-600"
            : "rotate-90 scale-0 opacity-0 absolute"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          fill="currentColor"
          fillOpacity="0.15"
        />
      </svg>
    </button>
  );
}
