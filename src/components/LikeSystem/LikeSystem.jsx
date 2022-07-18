import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsActionList } from '../../features/posts/postsSlice';
import { selectSession } from '../../features/session/sessionSlice';
import Styled from './LikeSystem.style';

const LikeSystemStyle = ({ post: { id, likeList } }) => {
  const dispatch = useDispatch();

  const sessionSelector = useSelector(selectSession);

  const { userId } = sessionSelector;

  const handleClick = () => {
    dispatch(postsActionList.toggleLike({ userId, postId: id }));
  }

  return (
    <Styled.Wrapper>
      <Styled.Badge onClick={handleClick} />
      <Styled.Counter>{likeList.length}</Styled.Counter>
    </Styled.Wrapper>
  );
}

export default LikeSystemStyle;
