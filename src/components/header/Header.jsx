export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-100 px-6 sm:px-12 md:px-24 py-4 flex justify-between items-center">
      <a
        href="#"
        className="font-extrabold text-xl tracking-tight text-blue-600"
      >
        KAMRUL ISLAM
      </a>

      <nav className="flex gap-6 font-medium text-sm text-slate-600">
        {/* Links with gradient underline animations */}
        <a
          href="#projects"
          className="relative py-1 group hover:text-blue-600 transition-colors duration-200"
        >
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
        </a>

        <a
          href="#about"
          className="relative py-1 group hover:text-blue-600 transition-colors duration-200"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
        </a>

        <a
          href="#contact"
          className="relative py-1 group hover:text-blue-600 transition-colors duration-200"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
        </a>
      </nav>
    </header>
  );
}
