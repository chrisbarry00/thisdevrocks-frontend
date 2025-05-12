import React, { useEffect } from "react";
import { fetchPosts } from "./postsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PostCard from "./PostCard";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import NoResults from "../../components/NoResults";

type PostsListProps = {
  limit?: number;
};

const PostsList: React.FC<PostsListProps> = ({ limit }) => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(limit));
  }, [dispatch, limit]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  if (!posts.length) return <NoResults message="No posts found." />;

  return (
    <section className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostsList;
