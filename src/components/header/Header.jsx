"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 md:top-4 md:left-1/2 md:-translate-x-1/2 lg:top-6 lg:right-6 lg:left-auto lg:translate-x-0 z-50 bg-white/80 backdrop-blur-lg rounded-full shadow-lg px-4 py-2 md:px-5 md:py-2 lg:px-6 lg:py-3">
      <ul className="flex items-center gap-6">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`transition font-medium ${
                active === link.id
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
