// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-20 text-center space-y-4">
      <h1 className="text-6xl font-bold text-[#5C96FE]">404</h1>
      <p className="text-2xl text-gray-400">Page not found.</p>
      <Link
        to="/"
        className="relative text-[#5C96FE] hover:text-[#60a5fa] transition text-lg group"
      >
        ← Back to Home
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#5C96FE] transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </div>
  );
};

export default NotFound;
