import React from 'react';
import { useDispatch } from 'react-redux';
import { authActionList } from '../features/auth/authSlice';
import Styled from './LoginPage.styles';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSignInClick = (e) => {
    e.preventDefault();
    dispatch(authActionList.logIn());
    localStorage.setItem('auth', 'true');
  }

  const auth = getAuth();

  // signInWithEmailAndPassword(auth, email, 'adminadmin')
  // .then((userCredential))

  return (
    <Styled.Wrapper>
      <Styled.BorderTwo>
        <Styled.BorderOne>
          <Styled.ContainerForLogin>
            <Styled.Title>Sign in</Styled.Title>

            <Styled.Input type={'text'} placeholder={'Enter login'} />
            <Styled.Input type={'password'} placeholder={'Enter password'} />

            <Styled.Button onClick={handleSignInClick}>Sign in</Styled.Button>
          </Styled.ContainerForLogin>
        </Styled.BorderOne>
      </Styled.BorderTwo>
    </Styled.Wrapper>
  );
}

export default LoginPage;
