import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaServer, FaUserShield, FaTools, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const roles = [
  { label: "Full Stack Web Developer", icon: FaLaptopCode, color: "from-purple-400 to-indigo-500" },
  { label: "Software Engineer", icon: FaServer, color: "from-cyan-400 to-blue-500" },
  { label: "IT Officer", icon: FaUserShield, color: "from-green-400 to-emerald-500" },
  { label: "OS Maintenance Expert", icon: FaTools, color: "from-yellow-400 to-orange-500" },
  { label: "Banking Professional", icon: FaUniversity, color: "from-pink-400 to-red-500" },
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { label, icon: Icon, color } = roles[index];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-white space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Monir Mohammed Nayem
            </span>
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-gray-300">
            A passionate Full Stack MERN Developer, skilled in building responsive, scalable, and secure web applications with clean code and modern technologies.
          </p>

          {/* Rotating Role */}
          <div
            className={`flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl font-semibold transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`p-3 rounded-full bg-gradient-to-br ${color} text-white shadow-lg`}>
              <Icon />
            </div>
            <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
              {label}
            </span>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="/resume/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-2xl"></div>
          <img
            src="https://i.postimg.cc/HsKXqBGw/banner.jpg"
            alt="Profile"
            className="w-72 sm:w-80 lg:w-[400px] xl:w-[450px] rounded-full shadow-2xl border-4 border-white/20 relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
