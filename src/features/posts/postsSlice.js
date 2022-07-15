import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  postList: [
    { id: uuid(), title: 'JavaScript 1', description: 'JavaScript is very cool' },
    { id: uuid(), title: 'JavaScript 2', description: 'JavaScript is very cool' },
    { id: uuid(), title: 'JavaScript 3', description: 'JavaScript is very cool' },
  ],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

const postsActionList = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export { postsActionList };

export default postsSlice.reducer;
