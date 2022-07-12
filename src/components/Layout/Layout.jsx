import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">link home</Link>
        <Link to="/login">link login</Link>
        <Link to="/personal">link personal</Link>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
