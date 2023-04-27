import { createSlice } from "@reduxjs/toolkit";
import { deletePost } from "../../actions/deletePosts";



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

const deletePostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(deletePost.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? null;
    });
  },
});


export default deletePostSlice.reducer;
