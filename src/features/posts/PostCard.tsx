import React from "react";

interface PostCardProps {
  title: string;
  summary: string;
  tags: string[];
}

const PostCard = ({ title, summary, tags }: PostCardProps) => {
  return (
    <article className="bg-[#161618] border border-[#2a2a2d] rounded-2xl p-6 shadow-sm hover:bg-[#1f1f22] hover:border-[#3b82f6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      <h3 className="text-2xl font-semibold text-[#3b82f6] mb-2">{title}</h3>
      <p className="text-base text-gray-400 leading-relaxed">{summary}</p>
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#2a2a2d] text-gray-400 text-xs px-3 py-1 rounded-full font-medium"
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
