import React from "react";

export default function About() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "JavaScript (ES6+)",
        "React.js",
        "Next.js (App Router)",
        "HTML5 & CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend & Architecture",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "TanStack Query",
        "React Hook Form",
        "JWT Authentication",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "Vercel", "Firebase", "VS Code"],
    },
  ];

  return (
    <section
      id="about"
      className="py-16 px-6 sm:px-12 scroll-mt-16 bg-white rounded-3xl my-10 border border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
    >
      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Left Side: Biography */}
        <div className="md:col-span-6 flex flex-col h-full justify-between">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600/90 leading-relaxed font-medium">
              I am a junior developer based in Netrakona, Bangladesh, deeply
              invested in building highly interactive, scalable, and fully clean
              user interfaces. My journey with coding started with core
              JavaScript, which naturally evolved into engineering full-stack
              production architectures with Next.js, React, and MongoDB.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600/90 leading-relaxed font-medium">
              I love breaking down complex states into modular, reusable
              components and focusing on code performance, responsive design,
              and smooth server state synchronization.
            </p>
          </div>

          {/* EYE-CATCHING "SEE RESUME" BUTTON */}
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-slate-950 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:bg-slate-800 transition duration-200 group active:scale-98"
            >
              {/* Clean Eye Icon for "Viewing" */}
              <svg
                className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              View Full Resume
            </a>
          </div>
        </div>

        {/* Right Side: Skill Blocks */}
        <div className="md:col-span-6 space-y-6">
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            Technical Stack Breakdown
          </h3>

          <div className="space-y-4">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="border border-slate-200/50 p-5 rounded-2xl bg-[#fafafa]"
              >
                <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider text-slate-400">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-white border border-slate-200/80 text-slate-700 text-xs font-semibold px-3 py-2 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
