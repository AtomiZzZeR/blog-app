import React, { useState } from 'react';
import Styled from './PersonalArea.styles';
import { useDispatch } from 'react-redux';
import { authActionList } from '../../features/auth/authSlice';
import { sessionActionList } from '../../features/session/sessionSlice';


const PersonalArea = () => {
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
    <Styled.Wrapper>
      <Styled.UserId onClick={handleChangeUserClick}>Пользователь: id{localStorage.getItem('userId')}</Styled.UserId>
      {isInput ? <Styled.InputChangeUserId type={'text'} value={value} onChange={handleChange} onBlur={handleEnterUserIdBlur} /> : null}
      <Styled.LogOutBtn onClick={handleLogOutClick}>Выйти</Styled.LogOutBtn>
    </Styled.Wrapper>
  );
}

export default PersonalArea;
