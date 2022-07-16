import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import { routes } from './router/routes';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          {routes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={null}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
