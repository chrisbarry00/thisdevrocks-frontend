import React from "react";
import PostsList from "../features/posts/PostsList";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const Home = () => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-16">
      <Intro />
      <Skills />

      <section id="blog" className="space-y-4">
        <h2 className="text-3xl font-semibold text-white">Latest Blog Posts</h2>
        <PostsList limit={3} />
        {posts.length >= 3 && (
          <div className="flex justify-end mt-4">
            <Link
              to="/blog"
              className="text-[#3b82f6] hover:text-[#60a5fa] transition text-lg"
            >
              View More →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
