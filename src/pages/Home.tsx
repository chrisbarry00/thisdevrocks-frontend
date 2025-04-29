import React from "react";
import PostsList from "../features/posts/PostsList";

const Home = () => (
  <div className="p-8">
    <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">
      Thoughts, Projects, and Reflections
    </h2>
    <PostsList />
  </div>
);

export default Home;
