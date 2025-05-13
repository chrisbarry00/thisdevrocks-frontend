import React from "react";
import PostsList from "../features/posts/PostsList";

const Blog = () => (
  <section className="p-3 md:p-8 max-w-5xl mx-auto space-y-6 md:space-y-8">
    <div className="text-3xl md:text-4xl font-bold text-white border-b-2 border-borderPrimary pb-2">
      Thoughts, Projects, and Reflections
    </div>
    <PostsList />
  </section>
);

export default Blog;
