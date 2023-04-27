import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/api";

type BodyProps = {
  title: string;
  content: string;
  id: number;
};

type PostTypesResult = {
  title: string;
  content: string;
};

export const editPost = createAsyncThunk<PostTypesResult[], BodyProps>(
  "posts/editPost",
  async (body: BodyProps) => {
    const { id, ...data } = body;
    const response = await api.patch(`/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
);
