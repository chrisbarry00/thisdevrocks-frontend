import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-3xl font-bold tracking-widest lowercase text-[#3b82f6] hover:text-[#60a5fa] transition"
    >
      thisdevrocks
    </Link>
  );
};

export default Logo;
