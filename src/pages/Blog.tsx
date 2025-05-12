import React from "react";
import PostsList from "../features/posts/PostsList";

const Blog = () => (
  <section className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
    <div className="text-4xl font-bold text-white border-b-2 border-borderPrimary pb-2">
      Thoughts, Projects, and Reflections
    </div>
    <PostsList />
  </section>
);

export default Blog;
