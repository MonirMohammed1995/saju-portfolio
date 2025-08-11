import { NavLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const { pathname } = useLocation();
  const [isHome, setIsHome] = useState(pathname === '/');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Toggle Dark Mode
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Check if on home page
  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', link: 'about' },
    { name: 'Skills', link: 'skills' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contacts', link: 'contacts' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[999] h-[3px] bg-gradient-to-r from-primary to-accent transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-0 z-50 w-full backdrop-blur-xl border-b border-base-300 bg-base-100/70 px-5 lg:px-12 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Monir"
              className="w-14 lg:w-16 rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-lg lg:text-2xl font-semibold tracking-wide">
              <span className="text-accent">Portfolio</span>
            </h1>
          </NavLink>

          {/* Navigation */}
          <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md transition-all duration-200 hover:bg-base-200 hover:text-primary ${
                        isActive ? 'text-primary font-semibold' : 'text-base-content'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : isHome ? (
                  <ScrollLink
                    to={item.link}
                    smooth
                    duration={600}
                    offset={-80}
                    spy
                    activeClass="text-primary font-semibold"
                    className="cursor-pointer px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-all duration-200"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <NavLink
                    to={`/#${item.link}`}
                    className="px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-all duration-200"
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle hover:bg-base-200 transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Resume Button */}
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex px-5 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-100 rounded-xl w-56 border border-base-300 space-y-1"
              >
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.path ? (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-base-200 ${
                            isActive ? 'text-primary font-semibold' : 'text-base-content'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ) : isHome ? (
                      <ScrollLink
                        to={item.link}
                        smooth
                        duration={600}
                        offset={-80}
                        spy
                        activeClass="text-primary font-semibold"
                        className="cursor-pointer block px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </ScrollLink>
                    ) : (
                      <NavLink
                        to={`/#${item.link}`}
                        className="block px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </li>
                ))}
                <div className="pt-3">
                  <a
                    href="/resume/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    Resume
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
