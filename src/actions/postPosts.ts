import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostTypesResult } from "../@types/pots";
import { api } from "../services/api";

type BodyProps = {
  title: string;
  content: string;
  username: string;
};

export const createPost = createAsyncThunk<PostTypesResult[], BodyProps>(
  "posts/createPost",
  async (body: BodyProps) => {
    const data = body;
    const response = await api.post("/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
);
