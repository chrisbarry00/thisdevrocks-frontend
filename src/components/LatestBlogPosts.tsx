import PostsList from "../features/posts/PostsList";
import { Link } from "react-router-dom";
import React from "react";
import { useAppSelector } from "../app/hooks";

const LatestBlogPosts = () => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <section id="blog" className="space-y-4">
      <h2 className="text-3xl font-semibold text-white">Latest Blog Posts</h2>
      <PostsList limit={3} />
      {posts.length >= 3 && (
        <div className="flex justify-end mt-4">
          <Link
            to="/blog"
            className="relative text-[#5C96FE] hover:text-[#60a5fa] transition text-lg group"
          >
            View More →
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#5C96FE] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      )}
    </section>
  );
};

export default LatestBlogPosts;
