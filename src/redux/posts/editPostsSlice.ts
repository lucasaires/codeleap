import { createSlice } from "@reduxjs/toolkit";
import { editPost } from "../../actions/editPosts";

type PostTypesResult = {
  title: string;
  content: string;
};



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

const editPostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(editPost.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(editPost.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? null;
    });
  },
});


export default editPostSlice.reducer;
