import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-primary font-semibold'
      : 'hover:text-primary transition-colors duration-300';

  return (
    <footer className="w-full bg-gradient-to-b from-base-100 via-base-200 to-base-300 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              <span className="text-accent">Monir Mohammed</span> Portfolio
            </h2>
            <p className="mt-3 text-sm text-base-content/80 leading-relaxed max-w-xs">
              Crafting modern, scalable, and impactful digital products with a focus on exceptional user experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink to="/" className={navLinkStyle}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact-page" className={navLinkStyle}>Contact Page</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Get in Touch</h3>
            <p className="text-sm mb-1 text-base-content/80">Email: <a href="mailto:monirmdnayemsaju42@gmail.com" className="hover:text-primary transition">monirmdnayemsaju42@gmail.com</a></p>
            <p className="text-sm mb-4 text-base-content/80">Phone: <a href="tel:+8801794231642" className="hover:text-primary transition">+880 1794-231642</a></p>
            <div className="flex gap-5 text-lg">
              <a href="https://www.facebook.com/monirmdnayemsaju42" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full bg-base-100 hover:bg-primary hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/monir-mohammed-nayem-b17915169/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-base-100 hover:bg-primary hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/MonirMohammed1995" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full bg-base-100 hover:bg-primary hover:text-white transition">
                <FaGithub />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-base-300 pt-5 text-center text-sm text-base-content/60">
          &copy; {new Date().getFullYear()} Monir Mohammed. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
