import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PersonalArea from './pages/PersonalAreaPage';
import NotFoundPage from './pages/NotFoundPage';

import Layout from './components/Layout/Layout';

function App() {
  return (    
    <div className={'App'}>
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
            path="personal"
            element={<PersonalArea />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
