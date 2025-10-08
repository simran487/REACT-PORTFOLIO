// src/components/Projects/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project, openModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition transform hover:-translate-y-2">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6 flex flex-col justify-between flex-1">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="flex justify-center gap-4 mt-auto">
          {project.demoLink && (
            <button
              onClick={() => openModal(project.demoLink)}
              className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm"
            >
              Play Game
            </button>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
