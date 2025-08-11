import React from "react";
import { motion } from "framer-motion";
import { Banknote, MonitorSmartphone } from "lucide-react";

const experiences = [
  {
    title: "Trainee Junior Officer",
    company: "NRB Commercial Bank",
    duration: "2019 - 2021",
    description:
      "Handled ERP systems, customer support, and financial documentation workflows for core banking operations.",
    tech: ["Banking ERP", "IT Support", "Data Entry", "Account Opening", "Credit & EGP"],
    icon: <Banknote className="w-6 h-6 text-white" />,
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Lecturer ICT",
    company: "Kushiara Degree College",
    duration: "2018 - 2019",
    description:
      "Taught computer science, designed curriculum, and mentored students in software development and networking.",
    tech: ["C", "HTML", "JavaScript", "React", "Node.js", "Database Management"],
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    color: "from-blue-400 to-cyan-500",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-16">
          My <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="relative border-l-4 border-cyan-400">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >
              {/* Timeline Icon */}
              <div
                className={`absolute -left-8 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
              >
                {exp.icon}
              </div>

              {/* Experience Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">{exp.title}</h3>
                    <p className="text-sm font-medium text-gray-300">{exp.company}</p>
                  </div>
                  <time className="text-xs font-medium text-gray-400">{exp.duration}</time>
                </div>

                <p className="mt-4 text-gray-300 leading-relaxed">{exp.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
