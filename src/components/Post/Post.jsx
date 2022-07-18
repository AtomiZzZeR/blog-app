import React from 'react';
import Styled from './Post.styles';
import { useDispatch, useSelector } from 'react-redux';
import LikeSystem from '../LikeSystem/LikeSystem';
import { postsActionList } from '../../features/posts/postsSlice';
import CommentSystem from '../CommentSystem/CommentSystem';
import { selectSession } from '../../features/session/sessionSlice';
import Comment from '../Comment/Comment';

const Post = ({ number, post }) => {
  const dispatch = useDispatch();

  const sessionSelector = useSelector(selectSession);

  const { userId: mainUserId } = sessionSelector;

  const handleDeletePostClick = () => {
    dispatch(postsActionList.deletePost({ postId: post.id }))
  }

  return (
    <>
      <Styled.Wrapper>
        Пользователь: id{post.userId}
        <Styled.Title>
          {number}. {post.title}
        </Styled.Title>
        <Styled.Description>
          {post.description}
        </Styled.Description>

        {
          post.userId === mainUserId ? <Styled.BtnDelete onClick={handleDeletePostClick}>
            <i className={'fa-solid fa-circle-xmark'}></i>
          </Styled.BtnDelete> : null
        }



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
