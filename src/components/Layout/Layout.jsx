import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { authActionList, selectAuth } from '../../features/auth/authSlice';
import Loader from '../Loader/Loader';
import Styled from './Layout.styles';

const Layout = () => {
  const dispatch = useDispatch();

  const authSelector = useSelector(selectAuth);

  const { isLoading } = authSelector;

  const handleLogOutClick = () => {
    dispatch(authActionList.logOut());
    localStorage.setItem('auth', '');
  }

  return (
    <>
      <Styled.Wrapper>
        <Styled.LogOutBtn onClick={handleLogOutClick}>Выйти</Styled.LogOutBtn>
        <Styled.Header>
          <Styled.BoxForTitleAndHome>
            <Link to="/">
              <Styled.SiteTitle>Blog App</Styled.SiteTitle>
            </Link>
            <Link to="/">
              <Styled.HomePageLink>Home</Styled.HomePageLink>
            </Link>
          </Styled.BoxForTitleAndHome>

          <Link to="/addPost">
            <Styled.AddPostPageLink>Add Post</Styled.AddPostPageLink>
          </Link>

          <Link to="/profile">
            <Styled.ProfilePageLink>Profile</Styled.ProfilePageLink>
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
