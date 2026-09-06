import Image from "next/image";
import Link from "next/link";

const tickerItems = [
  "TypeScript",
  "Next.js 16",
  "React 19",
  "PostgreSQL",
  "Prisma ORM",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TanStack Query v5",
  "Stripe Subscriptions",
  "Tailwind CSS v4",
  "Zod Schemas",
  "Docker",
  "REST APIs",
  "Firebase Auth",
];

export default function Hero() {
  return (
    <section id="home" className="w-full relative z-10 pt-10 sm:pt-16 pb-12 sm:pb-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Monospace Identifier Tag */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse shadow-[0_0_8px_#bef264]" />
              <span className="font-mono text-xs text-gray-400 font-semibold tracking-wider uppercase">
                01 <span className="text-gray-600">/</span> FULL-STACK DEVELOPER
              </span>
            </div>

            {/* Main Title Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-sky-300 to-indigo-300">
                Kamrul Islam
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-300 mt-3 font-mono">
              Engineering Scalable Full-Stack Systems
            </h2>

            {/* Subdescription */}
            <p className="mt-5 text-sm sm:text-base text-[#8e9cb0] max-w-xl leading-relaxed mx-auto lg:mx-0 font-normal">
              Specialized in engineering robust production web applications using <strong className="text-white font-semibold">TypeScript</strong>, <strong className="text-white font-semibold">Next.js 16</strong>, <strong className="text-white font-semibold">PostgreSQL</strong>, <strong className="text-white font-semibold">Prisma ORM</strong>, and scalable <strong className="text-white font-semibold">MongoDB</strong> architectures. Focused on end-to-end type safety, collaborative workflows, and zero-delay UI state caching.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start items-center">
              <a
                href="#projects"
                className="bg-[#38bdf8] hover:bg-[#22d3ee] text-black font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_28px_rgba(56,189,248,0.5)] active:scale-[0.98] transition-all duration-200 inline-flex items-center gap-2 font-mono uppercase"
              >
                <span>Explore Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="/Kamrul_Islam_CV.pdf"
                download="Kamrul_Islam_CV.pdf"
                className="bg-[#121826] hover:bg-[#182236] border border-[#1e2a3e] hover:border-sky-500/40 text-gray-200 px-5 py-3 rounded-xl text-xs sm:text-sm font-mono font-semibold tracking-wide active:scale-[0.98] transition-all inline-flex items-center gap-2"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>

              <a
                href="https://wa.me/8801894565173"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0b101c] hover:bg-[#121826] border border-[#1d273a] text-[#bef264] px-4 py-3 rounded-xl text-xs font-mono font-semibold active:scale-[0.98] transition-all inline-flex items-center gap-1.5"
              >
                <span>💬 WhatsApp</span>
              </a>
            </div>

            {/* Quick Command shortcut hint */}
            <div className="mt-5 flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-gray-500">
              <span>Press</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-bold bg-[#121826] text-gray-300 rounded border border-[#1e2a3e]">
                Ctrl + K
              </kbd>
              <span>for spotlight command palette</span>
            </div>
          </div>

          {/* Right Column: Profile & Tech Glow Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center relative">
            {/* Radiant Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#38bdf8]/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative group p-2 flex justify-center items-center">
              {/* Profile Image Container with Cyber Border */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden rounded-full border-[6px] border-[#1d273a] bg-[#0a0f19] shadow-2xl shadow-black/80 group-hover:border-sky-500/50 transition-colors duration-300">
                <Image
                  src="/kamrul_profile_pic.jpg"
                  alt="Kamrul Islam, Full-Stack Developer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>

              {/* Status Badge Over Image */}
              <div className="absolute bottom-2 bg-[#090e18]/90 backdrop-blur-md border border-[#1d273a] px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-gray-200 shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
                <span>Web Developer Intern @ GOBAADI</span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
              <Link
                href="https://github.com/kamrul397"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#0b101c] border border-[#1d273a] px-3.5 py-1.5 rounded-xl text-xs font-mono text-gray-300 hover:text-white hover:border-sky-500/40 transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span>kamrul397</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#0b101c] border border-[#1d273a] px-3.5 py-1.5 rounded-xl text-xs font-mono text-gray-300 hover:text-white hover:border-sky-500/40 transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Ticker */}
      <div className="w-full mt-12 sm:mt-16 border-y border-gray-800/80 bg-[#06080d]/90 py-3.5 overflow-hidden select-none">
        <div className="animate-marquee items-center gap-8 whitespace-nowrap text-xs font-mono font-semibold text-gray-300 tracking-wider">
          {tickerItems.map((item, index) => (
            <span key={`ticker-1-${index}`} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors">{item}</span>
              <span className="text-[#38bdf8] text-sm">✦</span>
            </span>
          ))}
          {tickerItems.map((item, index) => (
            <span key={`ticker-2-${index}`} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors">{item}</span>
              <span className="text-[#38bdf8] text-sm">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
