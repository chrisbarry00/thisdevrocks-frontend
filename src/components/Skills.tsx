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
} from "react-icons/si";
import Tooltip from "./Tooltip";

const Skills = () => (
  <section id="skills" className="space-y-4">
    <h2 className="text-3xl font-semibold text-white text-center">My Skills</h2>
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-gray-500 justify-items-center">
      <Tooltip text="React">
        <FaReact className="text-6xl" />
      </Tooltip>
      <Tooltip text="Redux">
        <SiRedux className="text-6xl" />
      </Tooltip>
      <Tooltip text="TypeScript">
        <SiTypescript className="text-6xl" />
      </Tooltip>
      <Tooltip text="Ruby on Rails">
        <SiRubyonrails className="text-6xl" />
      </Tooltip>
      <Tooltip text="Lua">
        <SiLua className="text-6xl" />
      </Tooltip>
      <Tooltip text="Node.js">
        <FaNodeJs className="text-6xl" />
      </Tooltip>
      <Tooltip text="Docker">
        <SiDocker className="text-6xl" />
      </Tooltip>
      <Tooltip text="TailwindCSS">
        <SiTailwindcss className="text-6xl" />
      </Tooltip>
      <Tooltip text="Git">
        <FaGit className="text-6xl" />
      </Tooltip>
      <Tooltip text="Jest">
        <SiJest className="text-6xl" />
      </Tooltip>
    </div>
  </section>
);

export default Skills;
