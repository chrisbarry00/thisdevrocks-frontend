import React from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../../types/Post";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();

  return (
    <article
      className="bg-[#161618] border border-[#2a2a2d] rounded-2xl p-6 shadow-sm hover:border-[#3b82f6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
      onClick={() => navigate(`/posts/${post.slug}`)}
    >
      <h3 className="text-2xl font-semibold text-[#3b82f6] mb-2 group-hover:text-[#60a5fa] transition">
        {post.title}
      </h3>
      <p className="text-base text-gray-400 leading-relaxed">
        {post.content.slice(0, 150)}...
      </p>

      {post.tags?.length && (
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/tags/${tag}`);
              }}
              className="bg-[#2a2a2d] text-gray-400 text-xs px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-[#3b82f6] hover:text-white transition"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default PostCard;
