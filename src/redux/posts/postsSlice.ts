import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchPostsFiltered } from "../../actions/getPosts";
import { RootState } from "../store/store";


type PostState = {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: PostState = {
  data: null,
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? null;
    });
    builder.addCase(fetchPostsFiltered.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchPostsFiltered.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPostsFiltered.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? null;
    });
  },
});

export const selectPosts = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
