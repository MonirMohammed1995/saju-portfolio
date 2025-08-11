import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaLinux,
  FaWindows,
  FaFileWord,
  FaServer,
  FaShieldAlt,
  FaCode,
  FaTools,
  FaApple,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiFigma } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-blue-500 w-8 h-8" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-400" /> },
      { name: "DaisyUI", icon: <FaReact className="text-purple-500" /> },
    ],
    description:
      "Crafting responsive, scalable, and user-centric interfaces using modern frontend technologies.",
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs className="text-green-600 w-8 h-8" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
      { name: "CORS", icon: <FaServer className="text-gray-500" /> },
      { name: "JWT", icon: <FaShieldAlt className="text-yellow-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    ],
    description:
      "Developing secure, high-performance REST APIs with robust data management and authentication.",
  },
  {
    title: "Programming Languages & Databases",
    icon: <FaDatabase className="text-red-500 w-8 h-8" />,
    skills: [
      { name: "C", icon: <FaCode className="text-indigo-500" /> },
      { name: "C++", icon: <FaCode className="text-indigo-700" /> },
      { name: "Java", icon: <FaJava className="text-red-700" /> },
      { name: "MySQLi", icon: <SiMysql className="text-blue-700" /> },
    ],
    description:
      "Proficient in multiple programming paradigms and relational databases.",
  },
  {
    title: "Design & Tools",
    icon: <FaTools className="text-amber-600 w-8 h-8" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-black" /> },
      { name: "MS Word", icon: <FaFileWord className="text-blue-700" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ],
    description:
      "Skilled in version control, collaborative design, and project documentation.",
  },
  {
    title: "Operating Systems & IT",
    icon: <FaLinux className="text-gray-800 w-8 h-8" />,
    skills: [
      { name: "Linux", icon: <FaLinux className="text-gray-800" /> },
      { name: "Windows", icon: <FaWindows className="text-blue-500" /> },
      { name: "macOS", icon: <FaApple className="text-gray-900" /> },
      { name: "System Management", icon: <FaTools className="text-green-600" /> },
      { name: "Networking", icon: <FaServer className="text-cyan-500" /> },
    ],
    description:
      "Expert in OS installation, configuration, and network infrastructure maintenance.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-16">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl p-6 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-cyan-500/20">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <p className="text-sm text-gray-300 mb-5">{category.description}</p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-sm font-medium text-gray-200 hover:scale-105 hover:shadow-md transition-all cursor-default"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
