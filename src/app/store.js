import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import authReducer from '../features/auth/authSlice';
import sessionReducer from '../features/session/sessionSlice';
import isActivePostReducer from '../features/isActivePost/isActivePostSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    session: sessionReducer,
    isActivePost: isActivePostReducer,
  },
});
