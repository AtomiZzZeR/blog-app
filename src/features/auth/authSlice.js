import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuth = true;
    },
    logOut: (state) => {
      state.isAuth = false;
    },
    loading: (state) => {
      state.isLoading = false;
    },
  },
});

export const selectAuth = (state) => state.auth;

export const authActionList = authSlice.actions;

export default authSlice.reducer;
