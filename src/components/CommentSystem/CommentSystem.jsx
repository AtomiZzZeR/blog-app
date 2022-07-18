import React, { useState } from 'react';
import Styled from './CommentSystem.styles';
import { useDispatch, useSelector } from 'react-redux';
import { postsActionList } from '../../features/posts/postsSlice';
import { selectSession } from '../../features/session/sessionSlice';

const CommentSystem = ({ post: { id } }) => {
  const dispatch = useDispatch();

  const sessionSelector = useSelector(selectSession);

  const { userId } = sessionSelector;

  const [isFormComment, setIsFormComment] = useState(false);

  const [value, setValue] = useState('');

  const [counter, setCounter] = useState(localStorage.getItem('counter') || "1");

  const handleEnadleFormCommentClick = () => {
    setIsFormComment(true);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleAddCommentClick = (e) => {
    e.preventDefault();

    const comment = {
      id: counter,
      postId: id,
      userId,
      value,
      createData: Date.now(),
    }

    dispatch(postsActionList.addComment({ comment }));

    let resultCounter = +counter + 1;

    setCounter(`${resultCounter}`);

    localStorage.setItem('counter', resultCounter);

    setIsFormComment(false);

    setValue('');
  }

  return (
    <Styled.Wrapper>
      <button onClick={handleEnadleFormCommentClick}>Оставить комментарий</button>
      {
        isFormComment ?
          <form>
            <input type={'text'} value={value} onChange={handleChange}></input>
            <button onClick={handleAddCommentClick}>Отправить</button>
          </form> : null
      }
    </Styled.Wrapper>
  );
}

export default CommentSystem;
