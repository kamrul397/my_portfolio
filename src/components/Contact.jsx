"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xojogpgn", {
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
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 scroll-mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Get In <span className="text-blue-600">Touch</span>
        </h2>

        <p className="mt-3 text-lg text-slate-600">
          Have an exciting opportunity or project to discuss? Drop me a line
          below!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 text-left space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl border"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-green-600 font-medium">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
