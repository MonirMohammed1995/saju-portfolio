import React from 'react';
import { Banknote, MonitorSmartphone } from 'lucide-react';

const experiences = [
  {
    title: 'Trainee Junior Officer',
    company: 'NRB Commercial Bank ',
    duration: '2019 – 2021',
    description:
      'Handled ERP systems, customer support, and financial documentation workflows for core banking operations.',
    tech: ['Banking ERP', 'IT Support', 'Data Entry','Account Opening', 'Credit & EGP'],
    icon: <Banknote className="text-accent w-6 h-6" />,
  },
  {
    title: 'Lecturer ICT',
    company: 'Kushiara Degree College',
    duration: '2018 – 2019',
    description:
      'Teaching computer science subjects, designing curriculum, and mentoring students in software development and networking.',
    tech: ['C','HTML', 'JavaScript', 'React', 'Node.js', 'Database Management'],
    icon: <MonitorSmartphone className="text-primary w-6 h-6" />,
  },
];

const Experience = () => {
  return (
    <section className="bg-base-100 my-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
        My <span className="text-cyan-400">Experience</span>
      </h2>

        <ol className="relative border-l-2 border-primary">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className="mb-10 ml-6"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Icon Circle */}
              <span className="flex absolute -left-3 justify-center items-center w-8 h-8 rounded-full bg-white border-2 border-primary shadow">
                {exp.icon}
              </span>

              {/* Content Box */}
              <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-base-content mb-1">
                  {exp.title}
                </h3>

                <p className="text-sm font-medium text-base-content/70 mb-1">
                  {exp.company}
                </p>

                <time className="block mb-4 text-xs font-medium text-base-content/50">
                  {exp.duration}
                </time>

                <p className="text-base text-base-content/80 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <li
                      key={idx}
                      className="badge badge-outline px-3 py-1 text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;