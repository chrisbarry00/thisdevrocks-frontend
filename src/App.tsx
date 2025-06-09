import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import PostView from "./features/posts/PostView";
import TagView from "./features/TagView";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import NewPost from "./pages/NewPost";

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/posts/new" element={<NewPost />} />
      <Route path="/posts/:slug" element={<PostView />} />
      <Route path="/tags/:tag" element={<TagView />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

export default App;
