import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptop,
  FaServer,
  FaShieldAlt,
  FaUniversity,
} from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const skills = [
  { icon: <FaLaptop />, label: "Full Stack Development", color: "from-purple-400 to-indigo-500" },
  { icon: <FaCode />, label: "Software Engineering", color: "from-cyan-400 to-blue-500" },
  { icon: <FaShieldAlt />, label: "IT & Security", color: "from-green-400 to-emerald-500" },
  { icon: <FaServer />, label: "System Maintenance", color: "from-yellow-400 to-orange-500" },
  { icon: <FaUniversity />, label: "Banking Experience", color: "from-red-400 to-pink-500" },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-blue-500 mb-16"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-lg opacity-30" />
            <img
              src="https://i.postimg.cc/7Z3ZN5b0/011642-copy-removebg-preview.png"
              alt="Monir Mohammed Nayem"
              className="w-4/5 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-lg"
            />
          </motion.div>

          {/* Text & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-base-content text-lg leading-relaxed space-y-6"
          >
            <p>
              Hello! I’m{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Monir Mohammed Nayem
              </span>
              , a dedicated software professional passionate about coding and
              technology. I enjoy diving deep into development and managing
              operating systems — coding never bores me.
            </p>

            <p>
              Outside of tech, I maintain a healthy lifestyle by avoiding junk
              food and sweets, preferring homemade meals. I’m an avid badminton
              player and love listening to music in my free time. Gaming is also
              a fun way I relax and challenge myself.
            </p>

            <p>
              My diverse experiences in OS management and software development
              fuel my enthusiasm to create clean, efficient, and scalable
              solutions. I thrive on solving problems and continuously learning
              new skills.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 pt-6">
              {skills.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center group relative cursor-pointer"
                  data-tooltip-id={`tooltip-${idx}`}
                  data-tooltip-content={item.label}
                >
                  <div
                    className={`text-3xl p-4 rounded-full shadow-lg bg-gradient-to-br ${item.color} text-white`}
                  >
                    {item.icon}
                  </div>
                  <Tooltip id={`tooltip-${idx}`} place="top" className="z-50 text-sm" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
