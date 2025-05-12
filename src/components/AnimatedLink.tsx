import React from "react";
import { Link } from "react-router-dom";

interface AnimatedLinkProps {
  to: string;
  label: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ to, label }) => {
  return (
    <Link
      to={to}
      className={`relative text-primaryAccent hover:text-hoverTextAccent transition text-lg group`}
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-hoverTextAccent transition-all duration-300 group-hover:w-full" />
    </Link>
  );
};

export default AnimatedLink;
