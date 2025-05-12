import React, { useState } from "react";
import { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (project.links.length === 1) {
      window.open(project.links[0].url, "_blank");
    }
  };

  return (
    <section
      className={`relative bg-cardBackground border border-borderPrimary rounded-2xl p-6 shadow-sm
                  hover:border-primaryAccent hover:shadow-lg hover:-translate-y-1 
                  transition-all duration-300 group
                  ${project.links.length === 1 ? "cursor-pointer" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <h3 className="text-2xl font-semibold text-primaryAccent mb-2 group-hover:text-hoverTextAccent transition">
        {project.name}
      </h3>
      <p className="text-base text-textSecondary leading-relaxed mb-4">
        {project.description}
      </p>

      {isHovered && project.links.length > 0 && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75
                     rounded-2xl flex flex-col items-center justify-center space-y-2"
        >
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryAccent hover:text-white text-lg transition
                         px-6 py-2 w-full text-center hover:bg-surfaceBackground rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
