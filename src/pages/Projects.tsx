import React from "react";
import ProjectsList from "../features/projects/ProjectsList";

const Projects = () => (
  <section className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
    <div className="text-4xl font-bold text-white border-b-2 border-borderPrimary pb-2">
      Projects
    </div>
    <ProjectsList />
    <p className="text-xl text-primaryAccent text-center mt-12 border-t border-borderPrimary pt-4">
      More projects coming soon... Stay tuned!
    </p>
  </section>
);

export default Projects;
