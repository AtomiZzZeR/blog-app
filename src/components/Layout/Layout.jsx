import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Styled from './Layout.styles';

const Layout = () => {
  return (
    <>
      <Styled.Wrapper>
        <Styled.Header>

          <Styled.BoxForTitleAndHome>
            <Link to="/">
              <Styled.SiteTitle>Blog App</Styled.SiteTitle>
            </Link>
            <Link to="/">
              <Styled.HomePageLink>Home</Styled.HomePageLink>
            </Link>
          </Styled.BoxForTitleAndHome>

          {/* Add post - link */}

          <Link to="/profile">
            <Styled.ProfilePageLink>Profile</Styled.ProfilePageLink>
          </Link>

          <Link to="/pr">
            link
          </Link>

          <Link to="/addPost">
            addPost
          </Link>

        </Styled.Header>

        <Styled.Main>
          <Outlet />
        </Styled.Main>
      </Styled.Wrapper>
    </>
  );
}

export default Layout;
