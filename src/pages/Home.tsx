import React from "react";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import LatestBlogPosts from "../components/LatestBlogPosts";

const Home = () => {
  return (
    <section className="p-2 md:p-6 max-w-4xl mx-auto space-y-3 md:space-y-8">
      <Intro />
      <Skills />
      <hr className="border-t border-borderPrimary my-2 md:my-8" />
      <LatestBlogPosts />
    </section>
  );
};

export default Home;
