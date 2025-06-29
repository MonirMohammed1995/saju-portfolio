import React from 'react';
import {
  FaCode,
  FaLaptop,
  FaServer,
  FaShieldAlt,
  FaUniversity,
} from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const skills = [
  { icon: <FaLaptop />, label: 'Full Stack Development', color: 'text-secondary' },
  { icon: <FaCode />, label: 'Software Engineering', color: 'text-info' },
  { icon: <FaShieldAlt />, label: 'IT & Security', color: 'text-success' },
  { icon: <FaServer />, label: 'System Maintenance', color: 'text-warning' },
  { icon: <FaUniversity />, label: 'Banking Experience', color: 'text-error' },
];

const About = () => {
  return (
    <section id='about' className="bg-base-100 px-4 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
        About <span className="text-cyan-400">Me</span>
      </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div data-aos="fade-right" className="relative">
            <img
              src='https://i.postimg.cc/7Z3ZN5b0/011642-copy-removebg-preview.png'
              alt="Monir Mohammed Nayem"
              className="w-4/5 rounded-3xl shadow-xl border border-base-300"
            />
          </div>

          {/* Text & Skills */}
          <div data-aos="fade-left" className="text-base-content text-lg leading-relaxed space-y-6">
            <p>
              Hello! I’m <span className="font-bold text-primary">Monir Mohammed Nayem</span>, a dedicated software professional passionate about coding and technology. I enjoy diving deep into development and managing operating systems — coding never bores me.
            </p>

            <p>
              Outside of tech, I maintain a healthy lifestyle by avoiding junk food and sweets, preferring homemade meals. I’m an avid badminton player and love listening to music in my free time. Gaming is also a fun way I relax and challenge myself.
            </p>

            <p>
              My diverse experiences in OS management and software development fuel my enthusiasm to create clean, efficient, and scalable solutions. I thrive on solving problems and continuously learning new skills.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 pt-6">
              {skills.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center group relative"
                  data-tooltip-id={`tooltip-${idx}`}
                  data-tooltip-content={item.label}
                >
                  <div
                    className={`text-3xl p-3 rounded-full shadow-md bg-base-200 hover:scale-110 transition-transform duration-200 ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <Tooltip id={`tooltip-${idx}`} place="top" className="z-50 text-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;