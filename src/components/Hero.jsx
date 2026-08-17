import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="py-8 md:py-12 flex items-center min-h-[60vh] px-6 sm:px-12 mt-8 scroll-mt-16">
      {/* 1. Main Responsive Grid Container */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
        {/* 2. LEFT SIDE: The Content Column */}
        <div className="md:col-span-7 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
          {/* Availability Badge */}
          <div className="mb-4 flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for{" "}
              <span className="font-bold text-emerald-700 dark:text-emerald-300">
                Intern / Junior
              </span>{" "}
              Roles
            </span>
          </div>

          {/* Main Title Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-300">
              Kamrul Islam
            </span>
            ,
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-200 mt-2">
              a passionate Full-Stack Developer.
            </span>
          </h1>

          {/* Subdescription */}
          <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mx-auto md:mx-0 font-normal">
            I build fast, responsive, and highly functional web applications
            using{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">TypeScript</strong>,{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">Next.js</strong>,{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">React</strong>,
            and modern full-stack ecosystems. Focused on writing clean,
            maintainable code.
          </p>

          {/* Interactive Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] transition-all duration-200"
            >
              View My Work
            </a>
            <Link
              href="#contact"
              className="border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide active:scale-[0.98] transition-all duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* 3. RIGHT SIDE: Profile Column */}
        <div className="md:col-span-5 flex flex-col justify-center items-center order-1 md:order-2 gap-4">
          <div className="relative group p-2 flex justify-center items-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-600/20 dark:to-indigo-600/20 rounded-full blur-2xl opacity-60 dark:opacity-40 group-hover:opacity-80 transition-opacity"></div>

            {/* Profile Image Container */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-[8px] border-white dark:border-slate-800 shadow-xl shadow-blue-500/5 dark:shadow-slate-950/50">
              <Image
                src="/kamrul-islam.png"
                alt="Kamrul Islam, Full-Stack Developer"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* External subtle ring */}
            <div className="absolute inset-0 rounded-full border border-blue-100/50 dark:border-slate-700/50 pointer-events-none"></div>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-nowrap items-center justify-center gap-2 mt-2 w-full max-w-[340px] sm:max-w-none">
            <Link
              href="https://github.com/kamrul397"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 shadow-xs transition whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 hover:border-blue-300 dark:hover:border-slate-600 shadow-xs transition whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </Link>

            <Link
              href="https://wa.me/8801894565173"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-300 dark:hover:border-slate-600 shadow-xs transition whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.855.001-2.633-1.02-5.107-2.875-6.964C16.547 1.928 14.08 .87 11.438.87 6.005.87 1.58 5.289 1.577 10.725c-.001 1.672.435 3.3 1.262 4.73L1.87 19.91l4.777-1.254z" />
              </svg>
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
