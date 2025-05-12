import React, { FC } from "react";
import { ProjectLink } from "../types/Project";

interface OverlayMenuProps {
  links: ProjectLink[];
}

const OverlayMenu: FC<OverlayMenuProps> = ({ links }) => (
  <div
    className="
      absolute top-full left-1/2 transform -translate-x-1/2 mt-2
      bg-[#1f1f21] border border-[#3a3a3d] rounded-lg shadow-lg z-50 p-2
      space-y-1
    "
  >
    {links.map(({ label, url }, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noreferrer"
        className="
          block w-full text-center text-[#5C96FE]
          hover:bg-[#2a2a2d] hover:text-[#60a5fa]
          px-4 py-2 rounded-md transition-colors
        "
      >
        {label}
      </a>
    ))}
  </div>
);

export default OverlayMenu;
