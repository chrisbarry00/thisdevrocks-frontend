import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Loader from "../../components/Loader";
import { fetchPostBySlug } from "./postsSlice";

const PostView = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { post, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (slug) {
      dispatch(fetchPostBySlug(slug));
    }
  }, [dispatch, slug]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!post) return <p className="text-gray-400">No post found.</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-[#5C96FE]">{post.title}</h1>
        <Link
          to="/blog"
          className="relative text-[#5C96FE] hover:text-[#60a5fa] transition text-lg group"
        >
          ← Back to All Blog Posts
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#5C96FE] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
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
