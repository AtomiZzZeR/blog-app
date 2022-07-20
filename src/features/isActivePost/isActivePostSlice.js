import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flag: '',
};

const isActivePostSlice = createSlice({
  name: 'isActivePost',
  initialState,
  reducers: {
    updatePostId: (state, action) => {
      state.flag = action.payload;
    },
  },
});

export const isActivePostActionList = isActivePostSlice.actions;

export const selectIsActivePost = (state) => state.isActivePost;

export default isActivePostSlice.reducer;
