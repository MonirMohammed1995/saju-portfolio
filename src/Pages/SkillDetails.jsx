import React from "react";
import { FaCode, FaDatabase, FaReact, FaNodeJs, FaTools, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiFirebase, SiGithub } from "react-icons/si";

const SkillDetails = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-blue-500 text-3xl" />,
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Figma", "Responsive Design"],
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="text-green-500 text-3xl" />,
      items: ["Node.js", "Express.js", "REST API", "JWT Authentication", "CRUD Operations"],
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase className="text-yellow-500 text-3xl" />,
      items: ["MongoDB", "Firebase", "Mongoose", "Render", "Vercel"],
    },
    {
      title: "Tools & Version Control",
      icon: <FaTools className="text-purple-500 text-3xl" />,
      items: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Postman", "Netlify", "Figma"],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">
        🚀 <span className="text-blue-600">My</span>{" "}
        <span className="text-cyan-500">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-base-200 dark:bg-gray-900 rounded-3xl border border-base-300 shadow-md hover:shadow-xl transition-all p-6 sm:p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              {skill.icon}
              <h3 className="text-2xl font-bold text-cyan-600">{skill.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillDetails;
