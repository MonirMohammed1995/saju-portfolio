import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contacts = () => {
  const [submitting, setSubmitting] = useState(false);

  // small UX: show a friendly message when user submits (Google Form will open in new tab)
  const handleSubmit = (e) => {
    setSubmitting(true);
    // let form submit to Google Forms (default behavior)
    // add a small timeout to allow the UI change before browser opens new tab
    setTimeout(() => {
      setSubmitting(false);
      // note: we don't prevent default so the form continues to submit
    }, 1500);
  };

  return (
    <section
      id="contacts"
      className="relative min-h-[70vh] py-16 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative blurred gradients */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-cyan-500/30 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 -right-28 w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-12"
        >
          <span className="inline-block mr-2">📞</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Get In
          </span>{" "}
          <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg p-3 bg-white/5 text-cyan-400 shadow-sm">
                <FaEnvelope className="w-5 h-5" aria-hidden />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <a
                  href="mailto:monirmdnayemsaju42@gmail.com"
                  className="text-sm text-gray-300 hover:underline"
                >
                  monirmdnayemsaju42@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg p-3 bg-white/5 text-cyan-400 shadow-sm">
                <FaPhoneAlt className="w-5 h-5" aria-hidden />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <a
                  href="tel:+8801794231642"
                  className="text-sm text-gray-300 hover:underline"
                >
                  +880 1794-231642
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg p-3 bg-white/5 text-cyan-400 shadow-sm">
                <FaMapMarkerAlt className="w-5 h-5" aria-hidden />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Location</h4>
                <p className="text-sm text-gray-300">Sylhet, Bangladesh</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/8801794231642"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <FaWhatsapp className="text-green-500 w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/monirmdnayem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <FaFacebook className="text-blue-500 w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/monirmdnayem/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <FaLinkedin className="text-blue-400 w-5 h-5" />
              </a>

              <a
                href="https://github.com/MonirMohammed1995"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form (glass card) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="backdrop-blur-md bg-white/6 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
              <form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdHLHNkl0EA7nVQgJD_1QC2I-LQ5hQRmmbWxJP4L1bBaDOO3A/formResponse"
                method="POST"
                target="_blank"
                onSubmit={handleSubmit}
                className="space-y-4"
                aria-label="Contact form"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="entry.1234567890"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="entry.0987654321"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="entry.1122334455"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:scale-105 transition-transform disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* subtle small note */}
            <p className="mt-3 text-xs text-gray-300">
              Or email me directly at{" "}
              <a href="mailto:monirmdnayemsaju42@gmail.com" className="underline">
                monirmdnayemsaju42@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
