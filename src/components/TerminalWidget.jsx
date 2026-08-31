"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { fireConfetti } from "@/utils/confetti";
import { toast } from "react-toastify";

export default function TerminalWidget({ onOpenResume }) {
  const [input, setInput] = useState("");
  const { theme, toggleTheme } = useTheme();
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "⚡ Kamrul Islam Developer Terminal v2.4 (Next.js 16 / TypeScript / Node.js)",
    },
    {
      type: "system",
      text: "Type 'help' or click any command pill below to explore.",
    },
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    // Add user prompt to history
    const newHistory = [...history, { type: "user", text: `kamrul@portfolio:~$ ${cmdStr}` }];

    switch (cleanCmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available Commands:
  • skills     - Display full-stack technical competencies
  • projects   - List flagship applications with live links
  • about      - View engineering background & architectural focus
  • resume     - Open interactive realistic ATS resume modal
  • contact    - Display email, WhatsApp (+880 1894-565173), and GitHub
  • theme      - Toggle between Dark and Light mode
  • confetti   - Trigger a celebratory confetti shower
  • clear      - Clear terminal screen history
  • whoami     - Display recruiter / visitor session identity`,
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `🛠️ CORE SKILLS & CAPABILITIES:
  • Frontend : Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion
  • Backend  : Node.js, Express.js (v5), RESTful APIs, JWT, Cookie Sessions, Middleware Auth
  • Database : MongoDB Atlas, Mongoose ORM, Aggregation Pipelines, Indexes
  • Payments : Stripe Checkout, Webhooks, Signature Verification, Plan Proration Math
  • State    : TanStack Query v5 (React Query), Context API, React Hook Form, Zod`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `🚀 FEATURED PROJECTS:
  1. FitPass      - Gym SaaS with Stripe Subscriptions & TypeScript [Live: fit-pass-omega.vercel.app]
  2. CareerConnect- Recruitment Portal with MongoDB Aggregations [Live: career-connect-iota-pied.vercel.app]
  3. ClubSphere   - University Club Hub with Firebase Auth [Live: clubspere-firebase.web.app]
  4. Revenio Store- High-Performance E-Commerce Engine [Live: revenio-client.vercel.app]`,
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          text: `👨‍💻 ABOUT KAMRUL ISLAM:
  Passionate Full-Stack Developer specializing in TypeScript, Next.js 16, and Node.js.
  Location: Netrakona, Bangladesh
  Status: Available for Intern / Junior Full-Stack Developer Roles.`,
        });
        break;

      case "resume":
        newHistory.push({
          type: "output",
          text: "Opening interactive ATS Resume Modal...",
        });
        if (onOpenResume) {
          onOpenResume();
        } else {
          const btn = document.querySelector('button[title*="Resume"]');
          btn?.click();
        }
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `📫 GET IN TOUCH:
  • Email   : kamrulislam25262800@gmail.com
  • WhatsApp: +880 1894-565173
  • GitHub  : https://github.com/kamrul397
  • LinkedIn: https://linkedin.com`,
        });
        break;

      case "theme":
        toggleTheme();
        newHistory.push({
          type: "output",
          text: `Theme switched to ${theme === "dark" ? "Light" : "Dark"} mode!`,
        });
        break;

      case "confetti":
        fireConfetti({ particleCount: 80 });
        newHistory.push({
          type: "output",
          text: "🎉 Confetti launched!",
        });
        break;

      case "whoami":
        newHistory.push({
          type: "output",
          text: "visitor@recruiter-workstation: Full access granted. Ready to hire Kamrul!",
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo":
        newHistory.push({
          type: "output",
          text: "Permission granted! You have root access to review all projects and hire Kamrul immediately.",
        });
        break;

      default:
        newHistory.push({
          type: "error",
          text: `Command not found: '${cleanCmd}'. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  const quickCommands = ["help", "skills", "projects", "resume", "contact", "confetti", "clear"];

  return (
    <div className="w-full bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/90" />
          <div className="w-3 h-3 rounded-full bg-amber-500/90" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
          <span className="text-slate-400 font-sans text-xs ml-2 font-semibold">
            kamrul@dev-terminal:~
          </span>
        </div>

        <div className="text-[11px] text-slate-500 font-sans hidden sm:block">
          Interactive CLI Sandbox
        </div>
      </div>

      {/* Quick Command Pills */}
      <div className="px-4 py-2 bg-slate-900/40 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto">
        <span className="text-[10px] text-slate-500 font-sans shrink-0 uppercase tracking-wider font-bold mr-1">
          Quick:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2.5 py-1 rounded-md bg-slate-800/90 hover:bg-blue-600/30 text-blue-400 hover:text-sky-300 border border-slate-700/60 hover:border-blue-500/50 transition-all text-xs font-mono shrink-0 cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Logs & Output */}
      <div
        className="p-4 sm:p-5 max-h-72 overflow-y-auto space-y-2 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, index) => (
          <div key={index} className="leading-relaxed">
            {entry.type === "system" && (
              <p className="text-slate-400 font-medium">{entry.text}</p>
            )}
            {entry.type === "user" && (
              <p className="text-emerald-400 font-bold">{entry.text}</p>
            )}
            {entry.type === "output" && (
              <pre className="text-slate-200 whitespace-pre-wrap font-mono text-xs sm:text-sm mt-1 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/50">
                {entry.text}
              </pre>
            )}
            {entry.type === "error" && (
              <p className="text-rose-400 font-semibold">{entry.text}</p>
            )}
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 font-bold shrink-0">
            kamrul@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g., skills, projects, resume)..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none font-mono text-xs sm:text-sm"
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
