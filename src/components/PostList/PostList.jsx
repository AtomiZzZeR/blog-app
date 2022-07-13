import React from 'react';
import Post from '../Post/Post';
import Styled from './PostList.styles';

const PostList = ({ posts }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Список постов</Styled.Title>
      {
        posts.map((post, index) =>
          <Post post={post} number={index + 1} key={post.id} />
        )
      }
    </Styled.Wrapper>
  );
}

export default PostList;
