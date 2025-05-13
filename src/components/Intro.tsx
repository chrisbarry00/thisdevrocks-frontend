import React from "react";
import { Link } from "react-router-dom";

const Intro = () => (
  <section className="text-center space-y-4">
    <h1 className="text-4xl md:text-6xl font-bold text-white">
      Hey, I'm Chris.
    </h1>
    <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
      I build stuff that rocks.
    </p>
    <div className="mt-4 md:mt-6 flex justify-center gap-3 flex-wrap">
      <Link
        to="/projects"
        className="bg-primaryAccent hover:bg-primaryAccentHover text-white px-6 py-3 rounded-md text-lg transition"
      >
        View My Work
      </Link>
      <Link
        to="/about"
        className="bg-surfaceBackground border border-primaryAccent hover:bg-primaryAccent text-white px-6 py-3 rounded-md text-lg transition"
      >
        About Me
      </Link>
    </div>
  </section>
);

export default Intro;
