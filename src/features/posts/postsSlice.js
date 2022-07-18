import { createSlice, current } from '@reduxjs/toolkit';
import _ from 'lodash';

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
    editPost: (state, { payload }) => {
      const { id, title, description } = payload;

      const postFounded = state.postList.find((post) => post.id === id);

      const changedPost = {
        ...postFounded,
        title,
        description,
      };

      state.postList = [...state.postList.filter((post) => post.id !== id), changedPost];
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    deletePost: (state, { payload }) => {
      const { postId } = payload;

      state.postList = state.postList.filter((post) => post.id !== postId);
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
    addComment: (state, { payload }) => {
      const { comment } = payload;

      const postFounded = state.postList.find((post) => post.id === comment.postId);

      const changedPost = {
        ...postFounded,
        commentList: [...postFounded.commentList, comment],
      };

      state.postList = [...state.postList.filter((post) => post.id !== comment.postId), changedPost];
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    editComment: (state, { payload }) => {
      const { postId, id, content } = payload;

      const postFounded = state.postList.find((post) => post.id === postId);

      const commentFounded = postFounded.commentList.find((comment) => comment.id === id);

      const changedComment = {
        ...commentFounded,
        content,
      };

      const changedPost = {
        ...postFounded,
        commentList: [...postFounded.commentList.filter((comment) => comment.id !== id), changedComment],
      };

      state.postList = [...state.postList.filter((post) => post.id !== postId), changedPost];
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
    deleteComment: (state, { payload }) => {
      const { id, postId } = payload;

      const postFounded = state.postList.find((post) => post.id === postId);

      const changedPost = {
        ...postFounded,
        commentList: [...postFounded.commentList.filter((comment) => comment.id !== id)],
      };

      state.postList = [...state.postList.filter((post) => post.id !== postId), changedPost];
      localStorage.setItem('postList', JSON.stringify(state.postList));
    },
  },
});

const postsActionList = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export { postsActionList };

export default postsSlice.reducer;
