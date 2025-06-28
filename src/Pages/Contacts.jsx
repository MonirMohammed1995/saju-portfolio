import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-10">
        📞 <span className="text-blue-600">Get In</span>{" "}
        <span className="text-cyan-500">Touch</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p>monirmdnayemsaju42@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p>+880 1794-231642</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold">Location</h4>
              <p>Sylhet, Bangladesh</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a href="https://www.facebook.com/monirmdnayemsaju42" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a href="https://www.linkedin.com/in/monir-mohammed-nayem-b17915169/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a href="https://github.com/MonirMohammed1995" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl transition" />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-base-200 rounded-3xl p-6 sm:p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;