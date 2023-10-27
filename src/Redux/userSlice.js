import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  user: null,
  authToken: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSlice: (state, action) => {
      (state.user = action.payload?.user);
      (state.authToken = action.payload?.token);
      state.isAuthenticated = state.authToken && true;
    },
    logout: (state) => {
      (state.user = null),
        (state.authToken = null),
        (state.isAuthenticated = false);
    },
    isUserAuthenticated:(state)=>{
      state.isAuthenticated = state.authToken && true;
    }
  },
});

export const { loginSlice, logout,isUserAuthenticated } = userSlice.actions;

export const selectUser = (state) => state.user.user;
// state.isAuthenticated;

export default userSlice.reducer;
