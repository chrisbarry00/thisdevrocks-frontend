import React, { useEffect } from "react";
import "../../App.css";
import { fetchPosts } from "./postsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PostCard from "./PostCard";
import Loader from "../../components/Loader";

type PostsListProps = {
  limit?: number;
};

const PostsList: React.FC<PostsListProps> = ({ limit }) => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(limit));
  }, [dispatch, limit]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-red-400 text-center">
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="text-gray-400 text-center">
        <p>No posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 p-4 md:p-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
