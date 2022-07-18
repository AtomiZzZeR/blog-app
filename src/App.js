import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import { authActionList, selectAuth } from './features/auth/authSlice';
import { postsActionList } from './features/posts/postsSlice';
import { sessionActionList } from './features/session/sessionSlice';

import { privateRoutes, publicRoutes } from './router/routes';

function App() {
  const dispatch = useDispatch();

  const authSelector = useSelector(selectAuth);
  const { isAuth, isLoading } = authSelector;

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(authActionList.logIn());
    } else {
      dispatch(authActionList.logOut());
    }

    dispatch(authActionList.loading());
  }, []);

  useEffect(() => {
    dispatch(sessionActionList.currentUserId());
  }, []);

  useEffect(() => {
    dispatch(postsActionList.addPostList());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {privateRoutes.map(({ path, element }) => (
          <Route
            path={path}
            element={element}
            key={path}
          />
        ))}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Route>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route
          path={path}
          element={element}
          key={path}
        />
      ))}
      <Route
        path="*"
        element={
          <Navigate
            to="login"
            replace
          />
        }
      />
    </Routes>
  );
}

export default App;
