import React, { useState, useEffect } from "react";

const NewPost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isAuthed = localStorage.getItem("thisdevrocks_admin") === "yes";
    if (!isAuthed) {
      const pass = prompt("Enter admin passphrase");
      if (pass === process.env.REACT_APP_ADMIN_PASSPHRASE) {
        localStorage.setItem("thisdevrocks_admin", "yes");
        setAuthorized(true);
      }
    } else {
      setAuthorized(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_ADMIN_API_KEY || "",
        },
        body: JSON.stringify({
          post: {
            title,
            content,
            tags: tags.split(",").map((t) => t.trim()),
            published: true,
          },
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
      setTitle("");
      setContent("");
      setTags("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!authorized) {
    return <p className="p-6 text-red-600">Access denied.</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">New Blog Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border rounded p-2 bg-white text-black"
          />
        </label>
        <label className="flex flex-col">
          Content (Markdown)
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="border rounded p-2 h-[40rem] bg-white text-black"
          />
        </label>
        <label className="flex flex-col">
          Tags (comma-separated)
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border rounded p-2 bg-white text-black"
          />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-600 text-white rounded p-2 disabled:opacity-50"
        >
          {status === "loading" ? "Publishing…" : "Publish Post"}
        </button>
        {status === "success" && (
          <p className="text-green-600">Post published!</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Error publishing post.</p>
        )}
      </form>
    </div>
  );
};

export default NewPost;
