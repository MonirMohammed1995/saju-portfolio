import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        📞 <span className="text-blue-600">Get In</span>{" "}
        <span className="text-cyan-500">Touch</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="text-base-content">
                monirmdnayemsaju42@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p className="text-base-content">+880 1794-231642</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold">Location</h4>
              <p className="text-base-content">Sylhet, Bangladesh</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://wa.me/8801794231642"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl text-green-600 hover:text-green-700 transition" />
            </a>
            <a
              href="https://www.facebook.com/monirmdnayemsaju42"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/monir-mohammed-nayem-b17915169/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a
              href="https://github.com/MonirMohammed1995"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-gray-700 transition" />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-base-200 rounded-3xl p-6 sm:p-8 shadow-xl">
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSdllyrs8g2PcPiFz-6onHS-yisAjcLv19XyjmlFzuAxrHCTQg/viewform?usp=header"
            method="POST"
            target="_blank"
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="entry.1234567890" // Replace with your form field ID
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-base-300 rounded-lg bg-base-100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="entry.0987654321" // Replace with your form field ID
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-base-300 rounded-lg bg-base-100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                name="entry.1122334455" // Replace with your form field ID
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-base-300 rounded-lg bg-base-100"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent hover:scale-105 text-white font-semibold py-2 px-4 rounded-lg transition"
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
