import React from "react";
import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiRubyonrails,
  SiLua,
  SiDocker,
  SiTailwindcss,
  SiJest,
  SiPhp,
  SiPython,
} from "react-icons/si";
import Tooltip from "./Tooltip";

const Skills = () => (
  <section id="skills" className="space-y-6 py-2">
    <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mt-2">
      My Skills
    </h2>
    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 text-textTertiary justify-items-center">
      {[
        { Component: FaReact, label: "React" },
        { Component: SiRedux, label: "Redux" },
        { Component: SiTypescript, label: "TypeScript" },
        { Component: SiRubyonrails, label: "Ruby on Rails" },
        { Component: SiLua, label: "Lua" },
        { Component: FaNodeJs, label: "Node.js" },
        { Component: SiPhp, label: "PHP" },
        { Component: SiPython, label: "Python" },
        { Component: SiDocker, label: "Docker" },
        { Component: SiTailwindcss, label: "TailwindCSS" },
        { Component: FaGit, label: "Git" },
        { Component: SiJest, label: "Jest" },
      ].map(({ Component, label }, index) => (
        <Tooltip text={label} key={index}>
          <div className="relative group">
            <Component className="text-3xl md:text-4xl lg:text-5xl transition-transform duration-300 transform group-hover:-translate-y-2 hover:text-primaryAccent hover:drop-shadow-[0_4px_10px_rgba(92,150,254,0.5)]" />
          </div>
        </Tooltip>
      ))}
    </div>
  </section>
);

export default Skills;
