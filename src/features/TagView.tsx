import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../features/posts/PostCard";
import { Post } from "../types/Post";

const TagView = () => {
  const { tag } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Update this to do it right
    const fetchPostsByTag = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/posts?tag=${tag}`,
        );
        setPosts(response.data);
      } catch (err: any) {
        setError("Failed to load posts for this tag.");
      } finally {
        setLoading(false);
      }
    };

    fetchPostsByTag();
  }, [tag]);

  if (loading) return <p className="text-gray-400">Loading...</p>;
  if (error) return <p className="text-red-400">{error}</p>;
  if (posts.length === 0)
    return <p className="text-gray-400">No posts found for this tag.</p>;

  return (
    <div className="grid gap-6 p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#3b82f6]">
        Posts tagged with "{tag}"
      </h2>
      <div className="grid gap-6 p-4 md:p-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TagView;
