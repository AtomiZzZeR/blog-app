import React, { useState } from 'react';
import Styled from './CommentSystem.styles';
import { useDispatch, useSelector } from 'react-redux';
import { postsActionList } from '../../features/posts/postsSlice';
import { selectSession } from '../../features/session/sessionSlice';
import { v4 as uuid } from 'uuid';

const CommentSystem = ({ post }) => {
  const dispatch = useDispatch();

  const sessionSelector = useSelector(selectSession);

  const { userId } = sessionSelector;

  const [isFormComment, setIsFormComment] = useState(false);

  const [content, setContent] = useState('');

  const [counter, setCounter] = useState(localStorage.getItem('counter') || "1");

  const handleEnadleFormCommentClick = () => {
    setIsFormComment(true);
  }

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const handleAddCommentClick = (e) => {
    e.preventDefault();

    const comment = {
      id: uuid(),
      postId: post.id,
      userId,
      content,
      creatingData: Date.now(),
    }

    dispatch(postsActionList.addComment({ comment }));

    let resultCounter = +counter + 1;

    setCounter(`${resultCounter}`);

    localStorage.setItem('counter', resultCounter);

    setIsFormComment(false);

    setContent('');
  }

  return (
    <Styled.Wrapper>
      <button onClick={handleEnadleFormCommentClick}>Оставить комментарий</button>
      {
        isFormComment ?
          <form>
            <input type={'text'} value={content} onChange={handleChange}></input>
            <button onClick={handleAddCommentClick}>Отправить</button>
          </form> : null
      }
    </Styled.Wrapper>
  );
}

export default CommentSystem;
