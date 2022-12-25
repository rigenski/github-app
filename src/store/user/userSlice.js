import { createSlice } from "@reduxjs/toolkit";
import { getUser, getUserRepos } from "./userAction";

const initialState = {
  user: null,
  repos: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUserRepos: (state) => {
      state.repos = [];
    },
  },
  extraReducers: {
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [getUser.rejected]: (state) => {
      state.user = null;
    },
    [getUserRepos.fulfilled]: (state, { payload }) => {
      state.repos = payload;
    },
    [getUserRepos.rejected]: (state) => {
      state.repos = [];
    },
  },
});

export const { resetUserRepos } = userSlice.actions;

export default userSlice.reducer;
