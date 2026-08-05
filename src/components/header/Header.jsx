"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset below fixed header
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Special case: If user scrolled to the bottom of the page, activate last item ("contact")
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        setActive("contact");
        return;
      }

      const sectionElements = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(section.id);
          break;
        }
      }
    };

    // Run initial check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      setActive(id);
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/85 backdrop-blur-md rounded-full shadow-md border border-slate-200/80 px-3.5 py-1.5 sm:px-6 sm:py-2.5 max-w-[92vw] sm:max-w-max">
      <ul className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm font-semibold">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`transition-all px-3 py-1.5 rounded-full inline-block ${
                active === link.id
                  ? "text-blue-600 bg-blue-50/80 font-bold"
                  : "text-slate-600 hover:text-slate-900"
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
