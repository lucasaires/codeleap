import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/api";

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (objectID: number) => {
    const response = await api.delete(`${objectID}/`).catch((error) => {
      console.log(error.message);
    });
    return response;
  }
);
