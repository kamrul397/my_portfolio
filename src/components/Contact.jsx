"use client";

import { useState } from "react";
import Link from "next/link";
import { fireConfetti } from "@/utils/confetti";
import { toast } from "react-toastify";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const formUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/xbldwypg";

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        fireConfetti({ particleCount: 80 });
        toast.success("Message sent! I will respond to your email shortly.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        toast.error("Failed to send message via form. Please email directly.");
      }
    } catch (error) {
      setStatus("error");
      toast.error("An error occurred. Please email directly.");
    }
  };

  return (
    <section id="contact" className="w-full relative z-10 py-12 sm:py-16 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header with Numbered Monospace Tag */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase font-mono">
            06 <span className="text-gray-600">/</span> CONTACT
          </span>
          <hr className="border-t border-gray-800 mt-3 w-full" />
        </div>

        {/* Section Title */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in <span className="text-[#38bdf8]">Touch</span>
          </h2>
          <p className="mt-3 text-[#8e9cb0] text-sm sm:text-base font-normal">
            Have a project in mind, an open role, or just want to connect? Send a direct message below.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Kamrul Islam"
                className="w-full bg-[#080d17]/90 border border-[#1b263a] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all font-mono shadow-inner shadow-black/40"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@example.com"
                className="w-full bg-[#080d17]/90 border border-[#1b263a] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all font-mono shadow-inner shadow-black/40"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Kamrul, let's discuss a full-stack developer opportunity..."
                className="w-full bg-[#080d17]/90 border border-[#1b263a] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all font-mono resize-none shadow-inner shadow-black/40"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#38bdf8] hover:bg-[#22d3ee] active:scale-[0.98] text-black text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_24px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] transition-all duration-200 cursor-pointer"
              >
                <span>
                  {status === "sending"
                    ? "SENDING..."
                    : status === "success"
                    ? "MESSAGE SENT! 🚀"
                    : "SEND MESSAGE"}
                </span>
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>

          {/* Right Column: Direct Reach Contact Information */}
          <div className="lg:col-span-6 lg:pl-10 space-y-7 sm:space-y-8">
            <div className="font-mono text-xs font-bold text-[#bef264] tracking-widest uppercase">
              OR REACH ME DIRECTLY
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <div className="font-mono text-xs font-bold text-[#38bdf8] tracking-widest uppercase">
                EMAIL
              </div>
              <div>
                <a
                  href="mailto:kamrulislam25262800@gmail.com"
                  className="text-base sm:text-lg font-bold text-gray-200 hover:text-white hover:underline transition-colors font-mono"
                >
                  kamrulislam25262800@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="space-y-1.5">
              <div className="font-mono text-xs font-bold text-[#38bdf8] tracking-widest uppercase">
                WHATSAPP
              </div>
              <div>
                <a
                  href="https://wa.me/8801894565173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-gray-200 hover:text-white hover:underline transition-colors font-mono"
                >
                  +880 1894 565173
                </a>
              </div>
            </div>

            {/* GitHub & LinkedIn */}
            <div className="space-y-1.5">
              <div className="font-mono text-xs font-bold text-[#38bdf8] tracking-widest uppercase">
                PROFILES & REPOSITORIES
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
                <Link
                  href="https://github.com/kamrul397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#0c121e] border border-[#1b263a] text-gray-300 hover:text-white hover:border-sky-500/50 transition-colors flex items-center gap-2"
                >
                  <span>🐙 GitHub Profile</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#0c121e] border border-[#1b263a] text-gray-300 hover:text-white hover:border-sky-500/50 transition-colors flex items-center gap-2"
                >
                  <span>💼 LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
