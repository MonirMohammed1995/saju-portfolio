import React from 'react';
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
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiFigma,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FaReact className="text-blue-600 w-7 h-7" />,
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React.js', icon: <FaReact className="text-blue-600" /> },
      { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-teal-400" /> },
      { name: 'DaisyUI', icon: <FaReact className="text-purple-500" /> },
    ],
    description:
      'Building responsive, scalable UI using modern frameworks and utility-first CSS.',
  },
  {
    title: 'Backend Development',
    icon: <FaNodeJs className="text-green-600 w-7 h-7" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
      { name: 'CORS', icon: <FaServer className="text-gray-600" /> },
      { name: 'JWT', icon: <FaShieldAlt className="text-yellow-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    ],
    description:
      'Creating secure and performant REST APIs with authentication and data management.',
  },
  {
    title: 'Programming Languages & DB',
    icon: <FaDatabase className="text-red-600 w-7 h-7" />,
    skills: [
      { name: 'C', icon: <FaCode className="text-indigo-600" /> },
      { name: 'C++', icon: <FaCode className="text-indigo-800" /> },
      { name: 'Java', icon: <FaJava className="text-red-700" /> },
      { name: 'MySQLi', icon: <SiMysql className="text-blue-700" /> },
    ],
    description: 'Experienced with core programming languages and relational databases.',
  },
  {
    title: 'Design & Tools',
    icon: <FaTools className="text-amber-600 w-7 h-7" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
      { name: 'GitHub', icon: <FaGithub className="text-black" /> },
      { name: 'MS Word', icon: <FaFileWord className="text-blue-700" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-600" /> },
    ],
    description:
      'Proficient in version control, design, prototyping and documentation tools.',
  },
  {
    title: 'Operating Systems & IT',
    icon: <FaLinux className="text-gray-800 w-7 h-7" />,
    skills: [
      { name: 'Linux (Ubuntu/CentOS)', icon: <FaLinux className="text-gray-800" /> },
      { name: 'Windows OS', icon: <FaWindows className="text-blue-600" /> },
      { name: 'macOS', icon: <FaApple className="text-gray-900" /> },
      { name: 'OS Installation & Management', icon: <FaTools className="text-green-600" /> },
      { name: 'Networking', icon: <FaServer className="text-cyan-600" /> },
    ],
    description:
      'Experienced in installation, configuration, and maintenance of operating systems and network infrastructure.',
  },
];

const Skills = () => {
  return (
    <section id='skills' className="bg-base-100 py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
        My <span className="text-cyan-400">Skills</span>
      </h2>

        <div className="flex flex-col gap-10">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-base-200 border border-base-300 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-full text-primary w-12 h-12 flex justify-center items-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-base-content">{category.title}</h3>
              </div>

              <p className="text-base-content/80 mb-6">{category.description}</p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 bg-base-300 px-4 py-2 rounded-full text-sm font-medium text-base-content transition-transform hover:scale-105 cursor-default select-none"
                  >
                    <span className="w-5 h-5">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;