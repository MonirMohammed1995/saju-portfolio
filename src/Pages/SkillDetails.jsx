import React from "react";
import { FaCode, FaDatabase, FaNodeJs, FaTools } from "react-icons/fa";

const SkillDetails = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-blue-500 text-4xl" />,
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Figma", "Responsive Design"],
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="text-green-500 text-4xl" />,
      items: ["Node.js", "Express.js", "REST API", "JWT Authentication", "CRUD Operations"],
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase className="text-yellow-500 text-4xl" />,
      items: ["MongoDB", "Firebase", "Mongoose", "Render", "Vercel"],
    },
    {
      title: "Tools & Version Control",
      icon: <FaTools className="text-purple-500 text-4xl" />,
      items: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Postman", "Netlify", "Figma"],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16" aria-label="Skills section">
      <h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 select-none"
        style={{
          background: "linear-gradient(90deg, #2563eb, #0891b2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        🚀 My <span className="text-cyan-400">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {skills.map((skill, index) => (
          <article
            key={index}
            tabIndex={0}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col"
            aria-labelledby={`skill-title-${index}`}
          >
            <header className="flex items-center gap-5 mb-6">
              {skill.icon}
              <h3
                id={`skill-title-${index}`}
                className="text-3xl font-semibold text-gray-900 dark:text-white"
              >
                {skill.title}
              </h3>
            </header>

            <ul className="flex flex-wrap gap-4">
              {skill.items.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900
                             text-blue-900 dark:text-cyan-300 font-medium text-sm rounded-full px-4 py-2
                             shadow-sm hover:from-blue-200 hover:to-cyan-200 dark:hover:from-blue-800 dark:hover:to-cyan-700
                             cursor-default transition-colors select-none"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillDetails;
