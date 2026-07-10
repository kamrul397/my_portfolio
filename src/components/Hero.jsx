import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // Reduced padding and minimum screen height for a more compact, structured layout
    <section className="py-8 md:py-12 flex items-center min-h-[60vh] px-6 sm:px-12">
      {/* 1. The Main Responsive Grid Container */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
        {/* 2. LEFT SIDE: The Content Column */}
        <div className="md:col-span-7 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
          {/* Re-designed Availability Badge: No ugly linebreaks, clean dot indicator */}
          <div className="mb-4 flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full border border-emerald-200 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for
              <span className="font-bold text-emerald-700">
                Intern / Junior
              </span>{" "}
              Roles
            </span>
          </div>

          {/* Main Title Heading (Slightly scaled down text sizes for tighter spacing) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Kamrul Islam
            </span>
            ,
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 mt-2">
              a passionate junior Frontend Developer.
            </span>
          </h1>

          {/* Subdescription (Tighter margins and spacing) */}
          <p className="mt-5 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed mx-auto md:mx-0">
            I build fast, responsive, and highly functional web applications
            using **React**, **Next.js**, and modern frontend ecosystems.
          </p>

          {/* Interactive Action Buttons (Slightly more compact padding) */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] transition-all duration-200"
            >
              View My Work
            </a>
            <Link
              href="#contact"
              className="border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-slate-100 hover:border-slate-300 active:scale-[0.98] transition-all duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* 3. RIGHT SIDE: The Pic Column (Scaled down to look balanced with smaller content) */}
        <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
          <div className="relative group p-2 flex justify-center items-center">
            {/* Pulsing Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

            {/* Compact Image Size Container */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-[8px] border-white shadow-xl shadow-blue-500/5">
              <Image
                src="/kamrul-islam.png"
                alt="Kamrul Islam, Junior Frontend Developer"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              />
            </div>

            {/* Subtle external border ring */}
            <div className="absolute inset-0 rounded-full border border-blue-100/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
