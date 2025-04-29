import React, { useEffect } from "react";
import "../../App.css";
import { fetchPosts } from "./postsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PostCard from "./PostCard";

function PostsList() {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          summary={post.content?.slice(0, 150) + "..."}
          tags={post.tags || []}
        />
      ))}
    </div>
  );
}

export default PostsList;
