import React from 'react';
import Styled from './Comment.styles';
import { useDispatch, useSelector } from 'react-redux';
import { postsActionList } from '../../features/posts/postsSlice';
import { selectSession } from '../../features/session/sessionSlice';

const Comment = ({ post }) => {
  const dispatch = useDispatch();

  const sessionSelector = useSelector(selectSession);

  const { userId: mainUserId } = sessionSelector;

  return post.commentList.map(({ id, content, userId, creatingData }) =>
    <Styled.Wrapper key={creatingData}>
      <div>Пользователь {userId}</div>
      {content}
      <br />
      {
        userId === mainUserId ? <Styled.BtnForDelete onClick={() =>
          dispatch(postsActionList.deleteComment({ id, postId: post.id }))}>
          Удалить
        </Styled.BtnForDelete>
          : null
      }


    </Styled.Wrapper >
  )
}

export default Comment;
