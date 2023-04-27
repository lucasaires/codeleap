import { configureStore } from "@reduxjs/toolkit";
import posts from "../posts/postsSlice";
import sendPost from "../posts/sendPostSlice";
import editPost from "../posts/editPostsSlice";
import deletePost from "../posts/deletePostsSlice";

const store = configureStore({
  reducer: {
    posts,
    sendPost,
    editPost,
    deletePost
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
