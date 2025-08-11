import { FaGithub, FaLink } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import scholar1 from '../assets/images/scholars (1).png';
import scholar2 from '../assets/images/scholars (2).png';
import scholar3 from '../assets/images/scholars (3).png';
import tutor1 from '../assets/images/tutor-booking1.png';
import tutor2 from '../assets/images/tutor-booking2.png';
import tutor3 from '../assets/images/tutor-booking3.png';
import tracker1 from '../assets/images/plant-tracker1.png';
import tracker2 from '../assets/images/plant-tracker2.png';
import tracker3 from '../assets/images/plant-tracker3.png';
import subscrive1 from '../assets/images/subscription1.png';
import subscrive2 from '../assets/images/subscription2.png';
import subscrive3 from '../assets/images/subscription3.png';

const projects = [
  {
    title: "Scholarship Management System",
    description:
      "A full-stack web app for scholarship management based on University. Users can book, review, pay for applications, and manage their learning efficiently via admin and user roles.",
    challenges: [
      "JWT authentication with role-based private routes.",
      "Secure API with MongoDB aggregation.",
      "Dynamic filtering & sorting (client + server).",
      "Payment Setting up and Varification (client + server).",
      "Secure deployment with environment variables.",
    ],
    images: [scholar1, scholar2, scholar3],
    link: "https://scholarship-managment-sys.netlify.app/",
    link1: "https://github.com/MonirMohammed1995/assignment-12-client",
  },
  {
    title: "Language Exchange - Tutor Booking Platform",
    description:
      "A full-stack web app for booking online tutors based on languages. Users can book, review, and manage their learning efficiently.",
    challenges: [
      "JWT authentication with role-based private routes.",
      "Secure API with MongoDB aggregation.",
      "Dynamic filtering & sorting (client + server).",
      "Secure deployment with environment variables.",
    ],
    images: [tutor1, tutor2, tutor3],
    link: "https://onlinetutor-booking-system.netlify.app/",
    link1: "https://github.com/MonirMohammed1995/assignment-11",
  },
  {
    title: "Plant Care Tracker",
    description:
      "A MERN stack app to track plant care tasks, watering schedules, and growth. Users can manage their personal plant collection with ease.",
    challenges: [
      "CRUD operations with MongoDB backend.",
      "Dynamic task scheduling for plant care.",
      "Role-based dashboard with JWT Auth.",
      "Smooth deployment on Vercel and Render.",
    ],
    images: [tracker1, tracker2, tracker3],
    link: "https://assignment10-polished-plantcare.netlify.app/",
    link1: "https://github.com/MonirMohammed1995/assignment10-polished-client",
  },
  {
    title: "Subscription Box Services",
    description:
      "An e-commerce subscription platform allowing users to purchase box services. It includes payment, subscription, and admin management.",
    challenges: [
      "Stripe payment integration.",
      "Dynamic subscription handling.",
      "Firebase authentication & secure routes.",
      "Admin dashboard with analytics.",
    ],
    images: [subscrive1, subscrive2, subscrive3],
    link: "https://subscriptionbox-a9-catlilly.netlify.app/",
    link1: "https://github.com/MonirMohammed1995/assignment-10",
  },
];

const ProjectPreview = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      aria-label="Projects Section"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl sm:text-5xl font-bold text-center mb-16 select-none bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`flex flex-col md:flex-row items-center border border-gray-700 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-800 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            aria-labelledby={`project-title-${index}`}
            tabIndex={0}
          >
            {/* Carousel */}
            <div className="w-full md:w-1/2 p-6">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3500}
                swipeable
                className="rounded-3xl overflow-hidden shadow-md"
                aria-label={`${project.title} images`}
              >
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-[16/9] overflow-hidden rounded-3xl"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-6">
              <h3
                id={`project-title-${index}`}
                className="text-3xl font-bold text-white"
              >
                {project.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>

              <section aria-label="Project challenges">
                <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                  Faced Challenges:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-400 text-base">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </section>

              <div className="flex gap-6 mt-4 flex-wrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-3xl shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500"
                  aria-label={`View live project: ${project.title}`}
                >
                  <FaLink className="text-lg" /> View Live Project
                </a>
                <a
                  href={project.link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-7 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold rounded-3xl shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500"
                  aria-label={`View GitHub repository: ${project.title}`}
                >
                  <FaGithub className="text-xl" /> GitHub Link
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectPreview;
