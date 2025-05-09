import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 text-sm py-8 space-y-4">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
      <div>thisdevrocks - building, learning, and ready for what's next.</div>
    </footer>
  );
};

export default Footer;
