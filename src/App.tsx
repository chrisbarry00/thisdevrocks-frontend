import React, { useEffect } from 'react';
import './App.css';
import { fetchPosts } from './features/posts/postsSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
