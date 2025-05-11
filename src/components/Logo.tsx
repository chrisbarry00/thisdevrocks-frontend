import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-3xl font-bold tracking-widest lowercase text-[#5C96FE] hover:text-[#60a5fa] transition"
    >
      thisdevrocks
    </Link>
  );
};

export default Logo;
