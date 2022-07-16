import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: JSON.parse(localStorage.getItem('postList')) || [{}],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.postList.push(action.payload);
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    deletePost: (state, action) => {
      state.postList.splice(action.payload - 1, 1);
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
  },
});

const postsActionList = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export { postsActionList };

export default postsSlice.reducer;
