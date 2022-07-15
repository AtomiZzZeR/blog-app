import React, { useState } from 'react';
import Styled from './HomePage.styles';
import { PostList } from '../components/PostList';

const HomePage = () => {
  return (
    <Styled.Wrapper>
      <PostList />
    </Styled.Wrapper>
  );
}

export default HomePage;
