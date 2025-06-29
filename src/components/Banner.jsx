import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaLaptopCode,
  FaServer,
  FaUserShield,
  FaTools,
  FaUniversity,
} from 'react-icons/fa';

// Title Items Configuration
const roles = [
  {
    label: 'Full Stack Web Developer',
    icon: FaLaptopCode,
    color: 'text-primary',
  },
  {
    label: 'Software Engineer',
    icon: FaServer,
    color: 'text-secondary',
  },
  {
    label: 'IT Officer',
    icon: FaUserShield,
    color: 'text-accent',
  },
  {
    label: 'OS Maintenance Expert',
    icon: FaTools,
    color: 'text-info',
  },
  {
    label: 'Banking Professional',
    icon: FaUniversity,
    color: 'text-success',
  },
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
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { label, icon: Icon, color } = roles[index];

  return (
    <div className="bg-cyan-800 min-h-[90vh] md:min-h-screen py-8 px-4 lg:px-16 xl:px-28 pt-30">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
        
        {/* Text Section */}
        <div className="text-white flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hello, I'm <br />
            <span className="text-accent">
              Monir Mohammed
              <br /> Nayem
            </span>
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg">
            A passionate Full Stack MERN Developer, skilled in building responsive, scalable, and secure web applications with clean code and modern technologies.
          </p>

          <div
            className={`flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl font-semibold transition-opacity duration-500 ${
              fade ? 'opacity-100' : 'opacity-0'
            } ${color}`}
          >
            <Icon className="text-3xl" />
            <span>{label}</span>
          </div>

          <div className="flex justify-center lg:justify-start">
            <a
              href="/resume/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.postimg.cc/HsKXqBGw/banner.jpg"
            alt="Profile"
            className="w-64 sm:w-72 md:w-80 lg:w-[400px] xl:w-[450px] rounded-full shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
