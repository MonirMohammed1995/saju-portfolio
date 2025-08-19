import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaLink } from 'react-icons/fa';
import { projects } from '../components/ProjectPreview';
 

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[parseInt(id)];

  if (!project) {
    return <div className="text-center mt-20">Project not found</div>;
  }

  return (
    <section className="max-w-5xl mx-auto p-8 bg-gray-900 text-white rounded-lg mt-10 shadow-lg">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="mb-6 text-lg">{project.description}</p>

      <h2 className="text-2xl font-semibold mb-3">Main Technology Stack:</h2>
      <ul className="list-disc list-inside mb-6">
        {project.challenges.map((challenge, idx) => (
          <li key={idx}>{challenge}</li>
        ))}
      </ul>

      <div className="flex gap-4 mb-6">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Live Project <FaLink className="inline ml-2" />
        </a>
        <a
          href={project.link1}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          GitHub Repo <FaGithub className="inline ml-2" />
        </a>
      </div>

      <Link
        to="/"
        className="text-cyan-400 hover:underline"
      >
        ← Back to Home
      </Link>
    </section>
  );
};

export default ProjectDetails;