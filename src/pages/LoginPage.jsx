import React from 'react';
import { useDispatch } from 'react-redux';
import { authActionList, selectAuth } from '../features/auth/authSlice';
import Styled from './LoginPage.styles';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginClick = (e) => {
    e.preventDefault();
    dispatch(authActionList.logIn());
    localStorage.setItem('auth', 'true');
  }

  return (
    <Styled.Login>
      <h1>Страница для логина</h1>
      <form>
        <Styled.Input type={'text'} placeholder={'Введите логин'} />
        <Styled.Input type={'password'} placeholder={'Введите пароль'} />
        <Styled.Button onClick={handleLoginClick}>Войти</Styled.Button>
      </form>
    </Styled.Login>
  );
}

export default LoginPage;
