import Image from "next/image";

// 1. Array of your 2 projects with dummy details
const projectsData = [
  {
    id: 1,
    title: "ClubSphere ",
    description:
      "ClubSphere is a full-stack MERN web application for discovering, joining, and managing local clubs. Members can browse approved clubs, join clubs through membership, and register for free events. Club Managers can create and manage clubs and events, while Admins can review applications, manage users, and monitor platform activity.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "JWT Authentication",
    ],
    liveLink: "https://clubspere-firebase.web.app",
    githubLink: "https://github.com/kamrul397/ClubSphere_Frontend.git",
    image: "/project1.png", // Replace with your project screenshot later
  },
  {
    id: 2,
    title: "Care.xyz - On-Demand Home Care Services Platform",
    description: `Care.xyz is a responsive, full-stack web application built using Next.js (App Router) and MongoDB. The platform allows users to book customized, professional home care services—ranging from baby care and babysitting to elderly support and sick patient care—across major structural areas in Dhaka and Chattogram.

  `,
    tags: ["Next.js", "MongoDB ", "Tailwind CSS"],
    liveLink: "https://care-flow-lyart.vercel.app/",
    githubLink: "https://github.com/kamrul397/CareFlow.git",
    image: "/project2.png", // Replace with your project screenshot later
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 sm:px-12 scroll-mt-10">
      {/* Section Title */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Completed <span className="text-blue-600">Projects</span>
        </h2>
        <p className="mt-3 text-lg text-slate-600 max-w-xl">
          Here are the core applications I have engineered to solve real-world
          problems.
        </p>
      </div>

      {/* 2. Responsive Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300"
          >
            {/* Project Image Wrapper with explicit constraints */}
            <div className="relative w-full h-48 sm:h-64 bg-slate-100 overflow-hidden">
              {/* Dummy Image Placeholder Box (Removes next/image constraint if file doesn't exist yet) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-slate-400 font-semibold text-lg group-hover:scale-105 transition-transform duration-300">
                {project.title} Screenshot
              </div>
            </div>

            {/* Project Details Content */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              <p className="mt-3 text-slate-600 text-base leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Technologies / Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Source/Demo Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href={project.liveLink}
                  className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  className="border-2 border-slate-200 text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-50 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
