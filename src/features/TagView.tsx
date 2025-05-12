import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchPostsByTag } from "../features/posts/postsSlice";
import PostCard from "../features/posts/PostCard";
import Loader from "../components/Loader";

const TagView = () => {
  const { tag } = useParams();
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (tag) {
      dispatch(fetchPostsByTag(tag));
    }
  }, [dispatch, tag]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-400">{error}</p>;
  if (posts.length === 0)
    return <p className="text-gray-400">No posts found for this tag.</p>;

  return (
    <div className="grid gap-6 p-4 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#5C96FE]">
          Posts tagged with "{tag}"
        </h2>
        <Link
          to="/blog"
          className="relative text-[#5C96FE] hover:text-[#60a5fa] transition text-lg group"
        >
          ← Back to All Blog Posts
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#5C96FE] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TagView;
