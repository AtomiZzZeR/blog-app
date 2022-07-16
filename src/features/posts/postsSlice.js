import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPostList: (state) => {
      state.postList = JSON.parse(localStorage.getItem('postList')) || [];
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    addPost: (state, action) => {
      state.postList.push(action.payload);
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    deletePost: (state, action) => {
      state.postList.splice(action.payload - 1, 1);
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    toggleLike: (state, { payload }) => {
      const { userId, postId } = payload;

      const postFounded = state.postList.find((post) => post.id === postId);

      const likeFounded = postFounded.likeList.find((likedUserId) => likedUserId === userId);

      if (likeFounded) {
        const changedPost = {
          ...postFounded,
          likeList: [...postFounded.likeList.filter((likedUserid) => likedUserid !== userId)],
        };

        state.postList = [...state.postList.filter((post) => post.id !== postId), changedPost];

        localStorage.setItem('postList', JSON.stringify(state.postList));

        return;
      }

      const changedPost = { ...postFounded, likeList: [...postFounded.likeList, userId] };

      state.postList = [...state.postList.filter((post) => post.id !== postId), changedPost];

      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
  },
});

const postsActionList = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export { postsActionList };

export default postsSlice.reducer;
