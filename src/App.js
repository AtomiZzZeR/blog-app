import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PersonalAreaPage from './pages/PersonalAreaPage';

import { Layout } from './components/Layout';

function App() {
  return (
    <>
      
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="login"
            element={<LoginPage />}
          />
          <Route
            path="profile"
            element={<PersonalAreaPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
