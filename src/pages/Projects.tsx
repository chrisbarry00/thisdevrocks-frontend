import React from "react";
import ProjectsList from "../features/projects/ProjectsList";

const Projects = () => (
  <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
    <div className="text-4xl font-bold text-white border-b-2 border-[#2a2a2d] pb-2">
      Projects
    </div>
    <ProjectsList />
    <p className="text-xl text-[#5C96FE] text-center mt-12 border-t border-[#2a2a2d] pt-4">
      More projects coming soon... Stay tuned!
    </p>
  </div>
);

export default Projects;
