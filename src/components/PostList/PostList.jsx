import React from 'react';
import Post from '../Post/Post';
import Styled from './PostList.styles';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../features/posts/postsSlice';

const PostList = () => {
  const postsSelector = useSelector(selectPosts);

  const { postList } = postsSelector;

  return (
    <Styled.Wrapper>
      <Styled.Title>Список постов</Styled.Title>
      {
        postList.map((post, index) =>
          <Post post={post} number={index + 1} key={post.id} />
        )
      }
    </Styled.Wrapper>
  );
}

export default PostList;
