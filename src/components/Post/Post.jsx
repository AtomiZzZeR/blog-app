import React from 'react';
import Styled from './Post.styles';
import { useDispatch } from 'react-redux';
import LikeSystem from '../LikeSystem/LikeSystem';
import { postsActionList } from '../../features/posts/postsSlice';
import CommentSystem from '../CommentSystem/CommentSystem';
import Comment from '../Comment/Comment';

const Post = ({ number, post }) => {
  const dispatch = useDispatch();

  const handleDeletePostClick = () => {
    dispatch(postsActionList.deletePost(number));
  }

  return (
    <>
      <Styled.Wrapper>
        <Styled.Title>
          {number}. {post.title}
        </Styled.Title>
        <Styled.Description>
          {post.description}
        </Styled.Description>
        <Styled.BtnDelete onClick={handleDeletePostClick}>

        </Styled.BtnDelete>

        <LikeSystem post={post} />

        <CommentSystem post={post} />


      </Styled.Wrapper>
      <Styled.ContainerForComments>
        <Styled.TitleComments>Комментарии:</Styled.TitleComments>
        <Comment post={post} />
      </Styled.ContainerForComments>
    </>
  );
}

export default Post;
