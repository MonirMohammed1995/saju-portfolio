import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-primary font-semibold'
      : 'hover:text-primary transition';

  return (
    <footer className="w-full bg-base-100 bg-opacity-30 backdrop-blur-md border-t border-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold tracking-tight text-primary">
              <span className="text-accent">Monir Mohammed</span> Portfolio
            </h2>
            <p className="mt-2 text-sm text-base-content/80 leading-relaxed">
              Building impactful digital products with a modern, scalable, and user-centric approach.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className={navLinkStyle}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkStyle}>About</NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className={navLinkStyle}>Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Contact</h3>
            <p className="text-sm mb-1 text-base-content/80">
              Email: monirmdnayemsaju42@gmail.com
            </p>
            <p className="text-sm mb-4 text-base-content/80">
              Phone: +880 1794-231642
            </p>
            <div className="flex gap-4 text-xl">
              <a href="https://www.facebook.com/monirmdnayemsaju42" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/monir-mohammed-nayem-b17915169/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/MonirMohammed1995" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition">
                <FaGithub />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-base-300 pt-4 text-center text-sm text-base-content/60">
          &copy; {new Date().getFullYear()} Monir Mohammed. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;