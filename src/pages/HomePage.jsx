import React, { useState } from 'react';
import Post from '../components/Post/Post';
import Styled from './HomePage.styles';
import { v4 as uuid } from 'uuid';
import PostList from '../components/PostList/PostList';
import AddPostPage from './AddPostPage';


const HomePage = ({ newPost }) => {
  const [posts, SetPosts] = useState([
    { id: uuid(), title: 'JavaScript', description: 'JavaScript is very cool' },
    { id: uuid(), title: 'JavaScript', description: 'JavaScript is very cool' },
    { id: uuid(), title: 'JavaScript', description: 'JavaScript is very cool' },
  ]);

  const addNewPost = () => {
    SetPosts([...posts, newPost])
  }

  return (
    <Styled.Wrapper>
      <AddPostPage title={'Python'} body={'Desson'} posts={posts} />

      <PostList posts={posts} />
    </Styled.Wrapper>
  );
}

export default HomePage;
