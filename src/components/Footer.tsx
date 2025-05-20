import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-textTertiary text-sm py-4 space-y-4">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/chrisbarryrocks"
          target="_blank"
          rel="noreferrer"
          className="text-textTertiary hover:text-primaryAccent transition group"
        >
          <div className="relative group">
            <FaGithub className="text-4xl transition-transform duration-300 transform group-hover:-translate-y-2 hover:drop-shadow-[0_4px_10px_rgba(92,150,254,0.5)]" />
          </div>
        </a>
        <a
          href="https://linkedin.com/in/christopher-shaun-barry"
          target="_blank"
          rel="noreferrer"
          className="text-textTertiary hover:text-primaryAccent transition group"
        >
          <div className="relative group">
            <FaLinkedin className="text-4xl transition-transform duration-300 transform group-hover:-translate-y-2 hover:drop-shadow-[0_4px_10px_rgba(92,150,254,0.5)]" />
          </div>
        </a>
      </div>
      <div>thisdev.rocks - building, learning, and ready for what's next.</div>
    </footer>
  );
};

export default Footer;
