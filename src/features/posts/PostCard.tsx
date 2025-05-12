import React from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../../types/Post";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();
  const previewContent =
    post.content.length > 150
      ? `${post.content.slice(0, 150)}...`
      : post.content;

  return (
    <article
      className="bg-cardBackground border border-borderPrimary rounded-2xl p-6 shadow-sm hover:border-primaryAccent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
      onClick={() => navigate(`/posts/${post.slug}`)}
    >
      <h3 className="text-2xl font-semibold text-primaryAccent mb-2 group-hover:text-hoverTextAccent transition">
        {post.title}
      </h3>
      <p className="text-base text-textSecondary leading-relaxed">
        {previewContent}
      </p>

      {post.tags?.length && (
        <section className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/tags/${tag}`);
              }}
              className="bg-borderPrimary text-textSecondary text-xs px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-primaryAccent hover:text-white transition"
            >
              {tag}
            </span>
          ))}
        </section>
      )}
    </article>
  );
};

export default PostCard;
