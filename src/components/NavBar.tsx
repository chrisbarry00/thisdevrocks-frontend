import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 text-lg">
      <NavItem to="/" label="Home" />
      <NavItem to="/about" label="About" />
      <NavItem to="/projects" label="Projects" />
      <NavItem to="/blog" label="Blog" />
    </nav>
  );
};

export default NavBar;
