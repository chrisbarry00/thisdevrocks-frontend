import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";
import { Project } from "../../types/Project";
import NoResults from "../../components/NoResults";

const ProjectsList = () => {
  if (!projects.length) {
    return <NoResults message="No projects found." />;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectsList;
