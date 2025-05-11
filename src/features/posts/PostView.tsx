import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Post } from "../../types/Post";

const PostView = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/posts/${slug}`,
        );
        setPost(response.data);
      } catch (err: any) {
        setError("Failed to load the post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>No post found.</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-[#5C96FE]">{post.title}</h1>
      <p className="text-gray-400 mb-4 italic">
        {new Date(post.created_at).toLocaleDateString()}
      </p>
      <div className="text-gray-300 leading-relaxed mb-8">{post.content}</div>

      {post.tags?.length ? (
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              onClick={() => navigate(`/tags/${tag}`)}
              className="bg-[#2a2a2d] text-gray-400 text-xs px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-[#5C96FE] hover:text-white transition"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PostView;
