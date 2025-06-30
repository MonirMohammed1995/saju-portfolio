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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        <span className="text-blue-600">Contact</span>{" "}
        <span className="text-cyan-500">Me</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-cyan-600">Let's Connect!</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to reach out for collaborations or queries. Contact me
            directly on WhatsApp or submit the form to send a message to my
            inbox.
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/8801794231642"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl shadow-md transition"
          >
            <FaWhatsapp className="text-xl" /> Chat on WhatsApp
          </a>

          {/* Social Media */}
          <div className="flex gap-6 text-3xl mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/8801794231642"
              target="_blank"
              className="hover:text-green-600 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-gray-800 rounded-3xl shadow-xl p-8"
        >
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdHLHNkl0EA7nVQgJD_1QC2I-LQ5hQRmmbWxJP4L1bBaDOO3A/formResponse"
            method="POST"
            target="_blank"
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-1">
                Name
              </label>
              <input
                name="entry.YOUR_NAME_ENTRY_ID"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl bg-white/70 dark:bg-gray-900/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Email
              </label>
              <input
                name="entry.YOUR_EMAIL_ENTRY_ID"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl bg-white/70 dark:bg-gray-900/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                name="entry.YOUR_MESSAGE_ENTRY_ID"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl bg-white/70 dark:bg-gray-900/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-2.5 rounded-xl shadow-md transition"
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