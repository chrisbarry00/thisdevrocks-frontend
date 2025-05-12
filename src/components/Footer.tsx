import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 text-sm py-4 space-y-4">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/chrisbarry00"
          target="_blank"
          className="text-gray-500 hover:text-[#5C96FE] transition group" rel="noreferrer"
        >
          <div className="relative group">
            <FaGithub className="text-4xl transition-transform duration-300 transform group-hover:-translate-y-2 hover:drop-shadow-[0_4px_10px_rgba(92,150,254,0.5)]" />
          </div>
        </a>
        <a
          href="https://linkedin.com/in/christopher-shaun-barry"
          target="_blank"
          className="text-gray-500 hover:text-[#5C96FE] transition group" rel="noreferrer"
        >
          <div className="relative group">
            <FaLinkedin className="text-4xl transition-transform duration-300 transform group-hover:-translate-y-2 hover:drop-shadow-[0_4px_10px_rgba(92,150,254,0.5)]" />
          </div>
        </a>
      </div>
      <div>thisdevrocks - building, learning, and ready for what's next.</div>
    </footer>
  );
};

export default Footer;
