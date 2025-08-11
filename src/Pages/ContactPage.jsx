import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 mt-24">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center tracking-tight mb-14 text-gradient"
        style={{
          background:
            "linear-gradient(90deg, #2563eb, #0891b2)", // blue to cyan
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        aria-label="Contact Me"
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 flex flex-col justify-center"
          aria-labelledby="contact-info-heading"
        >
          <h3
            id="contact-info-heading"
            className="text-3xl font-semibold text-cyan-600"
          >
            Let's Connect!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-md">
            Feel free to reach out for collaborations or queries. Contact me
            directly on WhatsApp or submit the form to send a message to my
            inbox.
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/8801794231642"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-400 focus:outline-none text-white px-6 py-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="text-lg font-medium">Chat on WhatsApp</span>
          </a>

          {/* Social Media Icons */}
          <div
            className="flex gap-8 text-4xl mt-6"
            role="list"
            aria-label="Social media links"
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              role="listitem"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              role="listitem"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              role="listitem"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/8801794231642"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors"
              role="listitem"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl p-10 max-w-lg mx-auto"
          aria-label="Contact form"
        >
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdHLHNkl0EA7nVQgJD_1QC2I-LQ5hQRmmbWxJP4L1bBaDOO3A/formResponse"
            method="POST"
            target="_blank"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200"
              >
                Name
              </label>
              <input
                id="name"
                name="entry.YOUR_NAME_ENTRY_ID"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-blue-500 transition"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
              <input
                id="email"
                name="entry.YOUR_EMAIL_ENTRY_ID"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-blue-500 transition"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="entry.YOUR_MESSAGE_ENTRY_ID"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                aria-required="true"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400"
              aria-label="Send message"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
