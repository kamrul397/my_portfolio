"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);
    const formUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-6 sm:px-12 scroll-mt-16 bg-slate-50/60 rounded-3xl my-10 overflow-hidden shadow-xs"
    >
      {/* Eye-catching ambient glow spheres (No borders used) */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Touch
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
          Have an exciting opportunity or project to discuss? Drop me a line
          below!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 text-left space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/40"
        >
          {/* ANTI-SPAM HONEYPOT SHIELD */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            style={{ display: "none" }}
          />

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3.5 rounded-xl border-none bg-slate-100 text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:bg-slate-50 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3.5 rounded-xl border-none bg-slate-100 text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:bg-slate-50 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-xs font-bold uppercase tracking-wider text-slate-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3.5 rounded-xl border-none bg-slate-100 text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:bg-slate-50 focus:ring-2 focus:ring-indigo-500 transition-all duration-200 resize-none leading-relaxed"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold tracking-wide shadow-md shadow-indigo-500/20 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] disabled:opacity-70 transition-all duration-200 cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <div
                className={`px-4 py-2 rounded-xl text-sm font-semibold animate-fade-in ${
                  status.includes("successfully")
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-rose-50 text-rose-700"
                }`}
              >
                {status}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
