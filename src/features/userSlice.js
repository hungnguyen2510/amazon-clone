import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      // state.user = action.payload;
      //   console.log(action);
      state.user = action.payload.user;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectIsLoading = (state) => state.user.isLoading;

export default userSlice.reducer;
