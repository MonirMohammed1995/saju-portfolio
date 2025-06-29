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
    <div
      className="bg-cyan-700 min-h-screen bg-center px-4 lg:px-20 mt-24"
    >
      {/* Overlay */}

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 min-h-screen">
        {/* Text Content */}
        <div className="text-white space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Hello, I'm <br />
            <span className="text-accent">
              Monir Mohammed
              <br />
              Nayem
            </span>
          </h1>

          <p className="max-w-xl">
            A passionate Full Stack MERN Developer, skilled in building responsive, scalable, and secure web applications with clean code and modern technologies.
          </p>

          <div
            className={`flex items-center justify-center lg:justify-start gap-3 text-2xl font-semibold transition-opacity duration-500 ${
              fade ? 'opacity-100' : 'opacity-0'
            } ${color}`}
          >
            <Icon className="text-3xl" />
            <span>{label}</span>
          </div>

          <a
                href="/resume/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition"
              >
                Resume
              </a>
        </div>

        {/* Profile Image */}
        <div>
          <img
            src="https://i.postimg.cc/HsKXqBGw/banner.jpg"
            alt="Profile"
            className="max-w-xs lg:max-w-md rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;