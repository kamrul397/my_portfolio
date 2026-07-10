export default function About() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "HTML5 & CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Ecosystem",
      skills: [
        "Git & GitHub",
        "Vercel",
        "npm / bun",
        "VS Code",
        "Figma (UI/UX)",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-12 scroll-mt-16 bg-white rounded-3xl my-10 border border-slate-100 shadow-sm"
    >
      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Left Side: Biography */}
        <div className="md:col-span-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            I am a frontend developer deeply interested in building highly
            interactive, accessible, and clean user interfaces. My journey with
            coding started with core JavaScript, which naturally evolved into
            working with React and modern production frameworks like Next.js.
          </p>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            I love breaking down complex layouts into modular, reusable
            components and focusing on code performance, responsive design, and
            smooth user experiences.
          </p>
        </div>

        {/* Right Side: Skill Blocks */}
        <div className="md:col-span-6 space-y-8">
          <h3 className="text-2xl font-bold text-slate-900">
            Technical Skills
          </h3>

          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50"
              >
                <h4 className="font-bold text-slate-800 mb-4 text-lg">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-xl shadow-xs"
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
