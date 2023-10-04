import { createSlice } from "@reduxjs/toolkit";

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
      (state.user = action.payload?.user),
        (state.authToken = action.payload?.token);
      state.isAuthenticated = state.authToken && true;
    },
    logout: (state) => {
      (state.user = null),
        (state.authToken = null),
        (state.isAuthenticated = false);
    },
  },
});

export const { loginSlice, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const isUserAuthenticated = (state) =>{
  console.log(state)
}
// state.isAuthenticated;

export default userSlice.reducer;
