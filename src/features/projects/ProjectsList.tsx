import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";
import { Project } from "../../types/Project";

const ProjectsList = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {projects.map((project: Project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default ProjectsList;
