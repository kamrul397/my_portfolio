import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "ClubSphere",
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
    githubLink: "https://github.com/kamrul397/ClubSphere_Frontend",
    image: "/project1.png",
  },
  {
    id: 2,
    title: "TechNova Store",
    description:
      "TechNova Store is a modern full-stack e-commerce platform built with Next.js and Express.js. It features Firebase Authentication (Email & Google Sign-In), secure protected routes, complete product CRUD operations, Cloudinary image uploads, advanced search and filtering, responsive UI, and deployment on Vercel and Render.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Cloudinary",
      "Tailwind CSS",
      "DaisyUI",
    ],
    liveLink: "https://revenio-client.vercel.app",
    githubLink: "https://github.com/kamrul397/revenio-store",
    image: "/project2.png",
  },
  {
    id: 3,
    title: "Care.xyz - On-Demand Home Care Services Platform",
    description:
      "Care.xyz is a responsive full-stack web application built with Next.js (App Router) and MongoDB. The platform enables users to book professional home care services—including baby care, elderly care, babysitting, and patient support—through an intuitive, mobile-friendly interface.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Firebase"],
    liveLink: "https://care-flow-lyart.vercel.app/",
    githubLink: "https://github.com/kamrul397/CareFlow",
    image: "/project3.png",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="py-5 px-6 sm:px-12 scroll-mt-10">
      {/* 🌟 New Section Header Panel with Background Color */}
      <div className="mb-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 border border-blue-100 p-6 sm:p-8 rounded-2xl md:max-w-3xl text-center mx-auto shadow-xs">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-3">
          Completed <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Here are the core applications I have engineered to solve real-world
          problems.
        </p>
      </div>
      {/* 2. Restored 2-Column Responsive Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300"
          >
            {/* Project Image Wrapper */}
            <div className="relative w-full h-48 sm:h-64 bg-slate-50 overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-slate-400 font-semibold text-base px-4 text-center group-hover:scale-105 transition-transform duration-300">
                {project.title} Screenshot
                {/* Un-comment when image files are ready inside public/ folder: */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={project.id === 1}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Details Content */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
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

              {/* Action Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-slate-200 text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-50 transition"
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
