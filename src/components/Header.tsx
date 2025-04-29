import React from "react";

const Header = () => {
  return (
    <header className="bg-[#0d0d0f] text-gray-200 shadow-md px-8 py-4 flex justify-between items-center border-b border-[#3b82f6]">
      <div className="text-3xl font-bold tracking-widest lowercase text-[#3b82f6]">
        thisdevrocks
      </div>
      <nav className="flex space-x-8 text-base">
        <a href="/" className="hover:underline hover:text-[#3b82f6] transition">
          Home
        </a>
        <a
          href="/about"
          className="hover:underline hover:text-[#3b82f6] transition"
        >
          About
        </a>
        <a
          href="/blog"
          className="hover:underline hover:text-[#3b82f6] transition"
        >
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Header;
