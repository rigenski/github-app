import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "src/services/api";

export const getUser = createAsyncThunk(
  "user",
  async ({ username }, { rejectWithValue }) => {
    try {
      const response = await api.get(`users/${username}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getUserRepos = createAsyncThunk(
  "user/repos",
  async ({ username }, { rejectWithValue }) => {
    try {
      const response = await api.get(`users/${username}/repos`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
