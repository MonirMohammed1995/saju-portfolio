import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const Education = () => {
  const institutes = [
    {
      icon: <GraduationCap className="text-cyan-400" size={40} />,
      degree: "🎓 C.S.E (Computer Science & Engineering)",
      institute: "Sylhet International University, Bangladesh",
      duration: "2014 - 2017",
      passingYear: "2018",
      board: "N/A",
      group: "Department of CSE",
      description:
        "Studied core and advanced topics in computer science, including algorithms, programming, data structures, networking, and AI. Built problem-solving skills and developed industry-grade projects.",
    },
    {
      icon: <School className="text-green-400" size={40} />,
      degree: "🏫 HSC (Higher Secondary Certificate)",
      institute: "Dharmaghar College",
      duration: "2011 - 2012",
      passingYear: "2013",
      board: "Sylhet Board",
      group: "Science",
      description:
        "Focused on Physics, Chemistry, Biology, and Mathematics, developing strong analytical and scientific reasoning skills.",
    },
    {
      icon: <BookOpen className="text-yellow-400" size={40} />,
      degree: "🏫 SSC (Secondary School Certificate)",
      institute: "Mofazzil Ali High School",
      duration: "2010",
      passingYear: "2011",
      board: "Sylhet Board",
      group: "Science",
      description:
        "Built foundational knowledge in core science subjects with consistent academic excellence.",
    },
  ];

  return (
    <section id="educations" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
        Educational <span className="text-cyan-400">Journey</span>
      </h2>

      <div className="relative border-l-4 border-cyan-400">
        {institutes.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 ml-8"
          >
            <div className="absolute -left-8 flex items-center justify-center w-16 h-16 rounded-full bg-base-200 shadow-lg">
              {edu.icon}
            </div>
            <div className="bg-base-200 rounded-2xl shadow-lg hover:shadow-xl transition-all p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-cyan-500">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-400">{edu.institute}</p>
                </div>
                <p className="text-green-400 font-semibold mt-2 sm:mt-0">
                  {edu.duration}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-3 text-sm">
                <span>
                  <span className="font-semibold text-cyan-500">Passing Year:</span>{" "}
                  {edu.passingYear}
                </span>
                <span>
                  <span className="font-semibold">Board:</span> {edu.board}
                </span>
                <span>
                  <span className="font-semibold">Faculty:</span> {edu.group}
                </span>
              </div>

              <p className="mt-3 text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
