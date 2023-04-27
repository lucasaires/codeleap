import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PostTypesResult } from "../@types/pots";
import { api } from "../services/api";

export const fetchPosts = createAsyncThunk<PostTypesResult[]>(
  "posts/fetchPosts",
  async () => {
    const response = await api.get("/");
    return response.data;
  }
);

export const fetchPostsFiltered = createAsyncThunk<PostTypesResult[], string>(
  "posts/fetchPostsFiltered",
  async (url: string) => {
    const response = await axios.get(`${url}`);
    return response.data;
  }
);
