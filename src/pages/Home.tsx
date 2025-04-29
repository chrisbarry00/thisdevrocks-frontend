import React from "react";
import PostsList from "../features/posts/PostsList";

const Home = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold mb-6">Welcome to ThisDevRocks</h2>
    <p className="text-lg mb-4">
      I write about tech, projects, and career reflections.
    </p>
    <PostsList />
  </div>
);

export default Home;
