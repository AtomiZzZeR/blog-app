import React, { useState } from 'react';
import Post from '../components/Post/Post';
import Styled from './HomePage.styles';
import { v4 as uuid } from 'uuid';
import PostList from '../components/PostList/PostList';
import AddPostPage from './AddPostPage';


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
      <AddPostPage create={createPost} />

      <PostList posts={posts} />
    </Styled.Wrapper>
  );
}

export default HomePage;
