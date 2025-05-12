import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../../types/Post";

interface PostsState {
  posts: Post[];
  post: Post | null;
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
};

const handlePending = (state: PostsState) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilledPosts = (
  state: PostsState,
  action: PayloadAction<Post[]>,
) => {
  state.loading = false;
  state.posts = action.payload;
};

const handleFulfilledPost = (
  state: PostsState,
  action: PayloadAction<Post>,
) => {
  state.loading = false;
  state.post = action.payload;
};

const handleRejected = (state: PostsState, action: any) => {
  state.loading = false;
  state.error = action.error.message || "Failed to fetch posts";
};

export const fetchPosts = createAsyncThunk<Post[], number | undefined>(
  "posts/fetchPosts",
  async (limit) => {
    const response = await axios.get("http://localhost:3000/api/posts", {
      params: { limit },
    });
    return response.data;
  },
);

export const fetchPostsByTag = createAsyncThunk<Post[], string>(
  "posts/fetchPostsByTag",
  async (tag, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/api/posts", {
        params: { tag },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue("Failed to load posts for this tag.");
    }
  },
);

export const fetchPostBySlug = createAsyncThunk<Post, string>(
  "posts/fetchPostBySlug",
  async (slug) => {
    const response = await axios.get(`http://localhost:3000/api/posts/${slug}`);
    return response.data;
  },
);

const postsSlice = createSlice({
  name: "posts",
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
      .addCase(fetchPosts.fulfilled, handleFulfilledPosts)
      .addCase(fetchPosts.rejected, handleRejected)
      .addCase(fetchPostsByTag.pending, handlePending)
      .addCase(fetchPostsByTag.fulfilled, handleFulfilledPosts)
      .addCase(fetchPostsByTag.rejected, handleRejected)
      .addCase(fetchPostBySlug.pending, handlePending)
      .addCase(fetchPostBySlug.fulfilled, handleFulfilledPost)
      .addCase(fetchPostBySlug.rejected, handleRejected);
  },
});

export const { setPosts, addPost } = postsSlice.actions;

export default postsSlice.reducer;
