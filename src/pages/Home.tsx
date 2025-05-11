import React from "react";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import LatestBlogPosts from "../components/LatestBlogPosts";

const Home = () => {
  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-8">
      <Intro />
      <Skills />
      <hr className="border-t border-[#2a2a2d] my-8" />
      <LatestBlogPosts />
    </div>
  );
};

export default Home;
