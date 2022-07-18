import React from 'react';
import Post from '../Post/Post';
import Styled from './PostList.styles';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../features/posts/postsSlice';
import _ from 'lodash';

const PostList = () => {
  const postsSelector = useSelector(selectPosts);
  const { postList } = postsSelector;

  const sortedPostList = _.sortBy(postList, 'creatingData');

  return (
    <Styled.Wrapper>
      <Styled.Title>Список постов</Styled.Title>
      {
        sortedPostList.map((post, index) =>
          <Post post={post} number={index + 1} key={post.creatingData} />
        )
      }
    </Styled.Wrapper>
  );
}

export default PostList;
