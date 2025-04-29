import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

const handlePending = (state: PostsState) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilled = (state: PostsState, action: PayloadAction<Post[]>) => {
  state.loading = false;
  state.posts = action.payload;
};

const handleRejected = (state: PostsState, action: any) => {
  state.loading = false;
  state.error = action.error.message || 'Failed to fetch posts';
};

export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('http://localhost:3000/api/posts');
    return response.data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, handlePending)
      .addCase(fetchPosts.fulfilled, handleFulfilled)
      .addCase(fetchPosts.rejected, handleRejected);
  },
});

export const { setPosts, addPost } = postsSlice.actions;

export default postsSlice.reducer;
