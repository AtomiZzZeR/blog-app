import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '1',
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    currentUserId: (state) => {
      state.userId = localStorage.getItem('userId');
    },
    changeUserId: (state, { payload }) => {
      state.userId = payload;
      localStorage.setItem('userId', state.userId);
    },
  },
});

export const sessionActionList = sessionSlice.actions;

export const selectSession = (state) => state.session;

export default sessionSlice.reducer;
