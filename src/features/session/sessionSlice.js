import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '15',
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
});

export const sessionActionList = sessionSlice.actions;

export const selectSession = (state) => state.session;

export default sessionSlice.reducer;
