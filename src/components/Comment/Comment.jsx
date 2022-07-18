import React, { useState } from 'react';
import Styled from './Comment.styles';
import { useDispatch, useSelector } from 'react-redux';
import { postsActionList, selectPosts } from '../../features/posts/postsSlice';
import { selectSession } from '../../features/session/sessionSlice';
import _ from 'lodash';

const Comment = ({ post }) => {
  const dispatch = useDispatch();

  const sessionSelector = useSelector(selectSession);

  const { userId: mainUserId } = sessionSelector;

  const [isActive, setIsActive] = useState(false);

  const [contentTextArea, setContentTextArea] = useState('');

  const [commentId, setCommentId] = useState('');

  const handleChange = (e) => {
    setContentTextArea(e.target.value);
  }

  const handleEnterEditCommentClick = () => {
    if (contentTextArea) {
      const editComment = {
        postId: post.id,
        id: commentId,
        content: contentTextArea,
      }

      dispatch(postsActionList.editComment(editComment));

      setIsActive(false);
    }
  }

  const handleUndoEditCommentClick = () => {
    setIsActive(false);

    setContentTextArea('');
  }

  const SortedCommentList = _.sortBy(post.commentList, 'creatingData');

  return (
    SortedCommentList.map(({ id, content, userId, creatingData }) =>
      <Styled.Wrapper key={creatingData}>
        <div>
          Пользователь: id{userId}
          <br />
          {content}
          <br />
          { 
            isActive && (id === commentId) ? <div>
              <Styled.TextAreaForEditComment
                type={'text'}
                onChange={handleChange}
                value={contentTextArea}
              />
              <br />
              <button onClick={handleEnterEditCommentClick}>Применить</button>
              <button onClick={handleUndoEditCommentClick}>Отменить</button>
            </div> : null
          }
        </div>

        {
          userId === mainUserId ? <Styled.BoxForActions>
            <Styled.BtnForEdit onClick={() => {
              setIsActive(true);
              setContentTextArea(content);
              setCommentId(id);
            }}
            >
              Редактировать
            </Styled.BtnForEdit>

            <Styled.BtnForDelete onClick={() =>
              dispatch(postsActionList.deleteComment({ id, postId: post.id }))}>
              Удалить
            </Styled.BtnForDelete>
          </Styled.BoxForActions> : null
        }
      </Styled.Wrapper >
    )
  )
}

export default Comment;
