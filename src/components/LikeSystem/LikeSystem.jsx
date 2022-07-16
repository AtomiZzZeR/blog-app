import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postsActionList } from '../../features/posts/postsSlice';
import Styled from './LikeSystem.style';

const LikeSystemStyle = ({ post: { id, likeList } }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(postsActionList.toggleLike({ userId: "3", postId: id }));
  }

  return (
    <Styled.Wrapper>
      <Styled.Badge onClick={handleClick} />
      <Styled.Counter>{likeList}</Styled.Counter>
    </Styled.Wrapper>
  );
}

export default LikeSystemStyle;
