import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="hidden md:flex space-x-8 text-base">
      <Link to="/" className="hover:underline hover:text-[#5C96FE] transition">
        Home
      </Link>
      <Link
        to="/about"
        className="hover:underline hover:text-[#5C96FE] transition"
      >
        About
      </Link>
      <Link
        to="/blog"
        className="hover:underline hover:text-[#5C96FE] transition"
      >
        Blog
      </Link>
    </nav>
  );
};

export default NavBar;
