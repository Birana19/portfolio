import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-400 mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-gray-700 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-blue-400 hover:underline"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
