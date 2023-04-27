import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "../../actions/postPosts";


type PostState = {
  data: any | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: PostState = {
  data: null,
  status: "idle",
  error: null,
};

const sendPostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(createPost.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? null;
    });
  },
});


export default sendPostSlice.reducer;
