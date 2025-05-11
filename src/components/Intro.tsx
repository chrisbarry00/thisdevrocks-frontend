import React from "react";
import { Link } from "react-router-dom";

const Intro = () => (
  <section className="text-center space-y-4">
    <h1 className="text-5xl md:text-6xl font-bold text-white">
      Hey, I'm Chris.
    </h1>
    <p className="text-2xl text-white max-w-2xl mx-auto">
      I build stuff that rocks.
    </p>
    <div className="mt-6 flex justify-center space-x-6">
      <Link
        to="/blog"
        className="bg-[#3b82f6] hover:bg-[#60a5fa] text-white px-6 py-3 rounded-md text-lg transition"
      >
        View My Work
      </Link>
      <Link
        to="/about"
        className="bg-[#1f1f23] border border-[#5C96FE] hover:bg-[#5C96FE] text-white px-6 py-3 rounded-md text-lg transition"
      >
        About Me
      </Link>
    </div>
  </section>
);

export default Intro;
