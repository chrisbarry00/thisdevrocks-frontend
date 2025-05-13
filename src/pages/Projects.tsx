import React from "react";
import ProjectsList from "../features/projects/ProjectsList";

const Projects = () => (
  <section className="p-3 md:p-8 max-w-5xl mx-auto space-y-6 md:space-y-8">
    <div className="text-3xl md:text-4xl font-bold text-white border-b-2 border-borderPrimary pb-2">
      Projects
    </div>
    <ProjectsList />
    <p className="text-lg md:text-xl text-textPrimary text-center mt-8 md:mt-12 border-t border-borderPrimary pt-4">
      More projects coming soon... Stay tuned!
    </p>
  </section>
);

export default Projects;
