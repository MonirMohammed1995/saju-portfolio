import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import photo from '../assets/my-image.png';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contacts', path: '/contacts' },
  ];

  return (
    <div className="navbar fixed top-0 z-50 w-full backdrop-blur border-b border-base-300 bg-base-100/60 px-4 lg:px-12 shadow-sm">
      {/* Logo */}
      <div className="flex-1">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={photo}
            alt="Monir"
            className="w-48 shadow-md"
          />
          <h1 className="text-xl lg:text-2xl font-semibold tracking-wide">
            <span className="text-accent">Portfolio</span>
          </h1>
        </NavLink>
      </div>

      {/* Navigation + Buttons */}
      <div className="flex items-center gap-3">
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition duration-200 hover:bg-base-200 hover:text-primary ${
                    isActive ? 'text-primary font-semibold' : 'text-base-content'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle hover:bg-base-200 transition"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Resume Button */}
        <a
          href="../../public/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex px-4 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition"
        >
          Resume
        </a>

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-100 rounded-box w-56 border border-base-300 space-y-1"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md transition hover:bg-base-200 ${
                      isActive ? 'text-primary font-semibold' : 'text-base-content'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <div className="pt-2">
              <a
                href="../../public/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition"
              >
                Resume
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
