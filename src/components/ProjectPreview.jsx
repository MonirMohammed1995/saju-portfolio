import { FaLink } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tutor1 from '../assets/images/tutor-booking1.png'
import tutor2 from '../assets/images/tutor-booking2.png'
import tutor3 from '../assets/images/tutor-booking3.png'
import tracker1 from '../assets/images/plant-tracker1.png'
import tracker2 from '../assets/images/plant-tracker2.png'
import tracker3 from '../assets/images/plant-tracker3.png'
import subscrive1 from '../assets/images/subscription1.png'
import subscrive2 from '../assets/images/subscription2.png'
import subscrive3 from '../assets/images/subscription3.png'

const projects = [
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
    images: [
      `${tutor1}`,
      `${tutor2}`,
      `${tutor3}`,
    ],
    link: "https://onlinetutor-booking-system.netlify.app/",
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
    images: [
      `${tracker1}`,
      `${tracker2}`,
      `${tracker3}`,
    ],
    link: "https://assignment10-polished-plantcare.netlify.app/",
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
    images: [
      `${subscrive1}`,
      `${subscrive2}`,
      `${subscrive3}`,
    ],
    link: "https://subscriptionbox-a9-catlilly.netlify.app/",
  },
];

const ProjectPreview = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
        My<span className="text-cyan-300">Projects</span>
      </h2>

      <div className="grid gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center bg-base-300 rounded-3xl shadow-xl dark:border-gray-700 hover:shadow-2xl transition`}
          >
            {/* Left Side - Carousel */}
            <div className="w-full md:w-1/2 p-6">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3000}
              >
                {project.images.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="rounded-2xl object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 p-6 space-y-5">
              <h3 className="text-3xl font-bold ">
                {project.title}
              </h3>
              <p className="">
                {project.description}
              </p>

              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Faced Challenges:
                </h4>
                <ul className="list-disc ml-6 space-y-1">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 rounded-xl px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
              >
                 View Live Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPreview;