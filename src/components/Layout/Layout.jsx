import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { authActionList, selectAuth } from '../../features/auth/authSlice';
import { selectSession, sessionActionList } from '../../features/session/sessionSlice';
import Styled from './Layout.styles';

const Layout = () => {
  const dispatch = useDispatch();

  const handleLogOutClick = () => {
    dispatch(authActionList.logOut());
    localStorage.setItem('auth', '');
  }

  const [isInput, setIsInput] = useState(false);

  const [value, setValue] = useState('');

  const handleChangeUserClick = () => {
    setIsInput(true);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleEnterUserIdBlur = () => {
    if (value) {
      dispatch(sessionActionList.changeUserId(value));
    }
    setValue('');
    setIsInput(false);
    window.location.reload()
  }

  return (
    <>
      <Styled.Wrapper>
        <Styled.BoxForAuth>
          <Styled.UserId onClick={handleChangeUserClick}>Пользователь: id{localStorage.getItem('userId')}
            {isInput ? <input value={value} onChange={handleChange} onBlur={handleEnterUserIdBlur} /> : null}
          </Styled.UserId>
          <Styled.LogOutBtn onClick={handleLogOutClick}>Выйти</Styled.LogOutBtn>
        </Styled.BoxForAuth>

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
            <Styled.AddPostPageLink>
              <Styled.BoxForIconAddPost>
                <i className={'fa-solid fa-circle-plus'}></i>
              </Styled.BoxForIconAddPost>
              <span>Add Post</span>
            </Styled.AddPostPageLink>
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
