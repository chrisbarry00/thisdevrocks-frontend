import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "relative text-primaryAccent pb-1 transition group"
          : "relative text-textPrimary hover:text-hoverTextAccent transition group"
      }
    >
      {label}
      <span
        className="absolute left-0 -bottom-[2px] w-0 h-[2px] bg-hoverTextAccent
                   transition-all duration-300 group-hover:w-full group-focus:w-full"
      />
    </NavLink>
  );
};

export default NavItem;
