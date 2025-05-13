import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden relative">
      <button
        onClick={toggleMenu}
        className="text-textPrimary focus:outline-none focus:ring-2 focus:ring-primaryAccent rounded-md"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-backgroundPrimary bg-opacity-95 z-50">
          <div className="flex justify-between items-center px-6 py-4 border-b border-primaryAccent">
            <Link
              to="/"
              className="text-3xl font-bold tracking-widest lowercase text-primaryAccent hover:text-hoverTextAccent transition"
              onClick={toggleMenu}
            >
              thisdev.rocks
            </Link>
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="text-primaryAccent hover:text-hoverTextAccent transition"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 mt-8 px-6 text-xl text-textPrimary">
            <Link
              to="/"
              className="hover:text-primaryAccent transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-primaryAccent transition"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="hover:text-primaryAccent transition"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="hover:text-primaryAccent transition"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
