import React, { useState } from 'react';
import Styled from './Post.styles';
import { useDispatch } from 'react-redux';
import LikeSystem from '../LikeSystem/LikeSystem';
import { postsActionList } from '../../features/posts/postsSlice';

const Post = ({ number, ...props }) => {
  const dispatch = useDispatch();

  const handleDeletePostClick = () => {
    dispatch(postsActionList.deletePost(number));
  }

  const [postTitle, setPostTitle] = useState(localStorage.getItem('postTitle') || props.post.title);
  const [postDescription, setPostDescription] = useState(props.post.description);

  const [isTitle, setIsTitle] = useState(false);

  return (
    <Styled.Post>
      <Styled.Content>
        <div>
          {number}.
          {
            isTitle ? <input
              value={postTitle}
              onChange={(e) => {
                setPostTitle(e.target.value);
                localStorage.setItem('postTitle', e.target.value);
              }
              }
              onBlur={() => setIsTitle(false)}
            /> : <div onClick={() => setIsTitle(true)}>{postTitle}</div>
          }
        </div>
        <div>
          {postDescription}
        </div>
      </Styled.Content>
      <Styled.Btns>
        <button onClick={handleDeletePostClick}>Удалить</button>
      </Styled.Btns>
      <LikeSystem />
    </Styled.Post>
  );
}

export default Post;
