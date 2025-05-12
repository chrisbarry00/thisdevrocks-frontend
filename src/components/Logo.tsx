import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-3xl font-bold tracking-widest lowercase text-primaryAccent hover:text-hoverTextAccent transition"
    >
      thisdev.rocks
    </Link>
  );
};

export default Logo;
