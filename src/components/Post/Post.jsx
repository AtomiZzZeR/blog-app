import React from 'react';
import Styled from './Post.styles';
import { useDispatch } from 'react-redux';
import LikeSystem from '../LikeSystem/LikeSystem';
import { postsActionList } from '../../features/posts/postsSlice';

const Post = ({ number, post }) => {
  const dispatch = useDispatch();

  const handleDeletePostClick = () => {
    dispatch(postsActionList.deletePost(number));
  }

  return (
    <Styled.Post>
      <Styled.Content>
        <h2>
          {number}. {post.title}
        </h2>
        <div>
          {post.description}
        </div>
      </Styled.Content>
      <Styled.Btns>
        <button onClick={handleDeletePostClick}>Удалить</button>
      </Styled.Btns>
      <LikeSystem post={post} />
    </Styled.Post>
  );
}

export default Post;
