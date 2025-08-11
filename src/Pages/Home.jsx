import React from "react";
import { motion } from "framer-motion";

import Banner from "../components/Banner";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import ProjectPreview from "../components/ProjectPreview";
import Education from "../components/Education";
import Contacts from "../components/Contacts";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <main className="bg-gray-900 min-h-screen text-gray-200 font-sans scroll-smooth">
      {/* Container for consistent horizontal padding and max width */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20 flex flex-col gap-20">

        {/* Banner Section */}
        <motion.section
          aria-label="Banner Section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          tabIndex={-1}
          className="outline-none"
        >
          <Banner />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          aria-label="Experience Section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          tabIndex={-1}
          className="outline-none"
        >
          <Experience />
        </motion.section>

        {/* About Section */}
        <motion.section
          aria-label="About Section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          tabIndex={-1}
          className="outline-none"
        >
          <About />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          aria-label="Skills Section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          tabIndex={-1}
          className="outline-none"
        >
          <Skills />
        </motion.section>

        {/* Education Section */}
        <motion.section
          aria-label="Education Section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          tabIndex={-1}
          className="outline-none"
        >
          <Education />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          aria-label="Projects Section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          tabIndex={-1}
          className="outline-none"
        >
          <ProjectPreview />
        </motion.section>

        {/* Contacts Section */}
        <motion.section
          aria-label="Contacts Section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          tabIndex={-1}
          className="outline-none"
        >
          <Contacts />
        </motion.section>
      </div>
    </main>
  );
};

export default Home;
