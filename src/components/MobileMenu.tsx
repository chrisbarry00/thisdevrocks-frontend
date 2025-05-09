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
        className="text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded-md"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#0d0d0f] bg-opacity-95 z-50">
          <div className="flex justify-between items-center px-6 py-4 border-b border-[#3b82f6]">
            <Link
              to="/"
              className="text-3xl font-bold tracking-widest lowercase text-[#3b82f6] hover:text-[#60a5fa] transition"
              onClick={toggleMenu}
            >
              thisdevrocks
            </Link>
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="text-[#3b82f6] hover:text-[#60a5fa] transition"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 mt-8 px-6 text-xl text-gray-200">
            <Link
              to="/"
              className="hover:text-[#3b82f6] transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#3b82f6] transition"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="hover:text-[#3b82f6] transition"
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
