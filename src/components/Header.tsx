import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="bg-green-900 text-white px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={logo} alt="ThisDevRocks Logo" className="h-10 w-auto" />
      </div>
      <nav className="flex gap-6">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/blog" className="hover:underline">
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Header;
