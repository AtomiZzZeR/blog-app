import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import { authActionList, selectAuth } from './features/auth/authSlice';

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            {privateRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
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
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.path}
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
      )}
    </>
  );
}

export default App;
