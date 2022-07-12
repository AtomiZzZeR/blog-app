import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PersonalArea from './pages/PersonalAreaPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className={'App'}>
      <header>
        <Link to="/">link home</Link>
        <Link to="/login">link login</Link>
        <Link to="/personal">link personal</Link>
      </header>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/personal"
          element={<PersonalArea />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
