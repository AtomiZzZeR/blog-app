import React, { useState } from 'react';
import Styled from './HomePage.styles';
import { v4 as uuid } from 'uuid';
import { AddPost } from '../components/AddPost';
import { PostList } from '../components/PostList';


const HomePage = ({ newPost }) => {
  const [posts, setPosts] = useState([
    { id: uuid(), title: 'JavaScript', description: 'JavaScript is very cool' },
    { id: uuid(), title: 'JavaScript', description: 'JavaScript is very cool' },
    { id: uuid(), title: 'JavaScript', description: 'JavaScript is very cool' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  return (
    <Styled.Wrapper>
      <PostList posts={posts} />
    </Styled.Wrapper>
  );
}

export default HomePage;
