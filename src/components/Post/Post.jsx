import React, { useState } from 'react';
import Styled from './Post.styles';
import { useDispatch, useSelector } from 'react-redux';
import LikeSystem from '../LikeSystem/LikeSystem';
import { postsActionList } from '../../features/posts/postsSlice';
import CommentSystem from '../CommentSystem/CommentSystem';
import { selectSession } from '../../features/session/sessionSlice';
import Comment from '../Comment/Comment';
import { isActivePostActionList, selectIsActivePost } from '../../features/isActivePost/isActivePostSlice';

const Post = ({ number, post }) => {
  const dispatch = useDispatch();

  const sessionSelector = useSelector(selectSession);

  const { userId: mainUserId } = sessionSelector;

  const handleDeletePostClick = () => {
    dispatch(postsActionList.deletePost({ postId: post.id }))
  }

  const [isInput, setIsInput] = useState(false);

  const [postData, setPostData] = useState({ name: '', body: '' });

  const isActivePostSelector = useSelector(selectIsActivePost);

  const { flag } = isActivePostSelector;

  const handleEditPostClick = () => {
    dispatch(isActivePostActionList.updatePostId(post.id))

    setPostData({ name: post.title, body: post.description });

    setIsInput(true);
  }

  const handleNamePostChange = (e) => {
    setPostData({ ...postData, name: e.target.value });

  }

  const handleBodyPostChange = (e) => {
    setPostData({ ...postData, body: e.target.value });
  }

  const handleEnterEditPostClick = () => {
    const editPost = {
      id: post.id,
      title: postData.name,
      description: postData.body,
    }

    dispatch(postsActionList.editPost(editPost));

    setIsInput(false);
  }

  const handleUndoEditPostClick = () => {
    setIsInput(false);
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
          isInput && (flag === post.id) ? (
            <Styled.BoxForEditPost>
              <input value={postData.name} onChange={handleNamePostChange} />
              <br />
              <input value={postData.body} onChange={handleBodyPostChange} />
              <br />
              <button onClick={handleEnterEditPostClick}>Применить</button>
              <button onClick={handleUndoEditPostClick}>Отменить</button>
            </Styled.BoxForEditPost>
          ) : null
        }

        {
          post.userId === mainUserId ? (
            <div>
              <Styled.BtnEdit onClick={handleEditPostClick}></Styled.BtnEdit>
              <Styled.BtnDelete onClick={handleDeletePostClick}>
                <i className={'fa-solid fa-circle-xmark'}></i>
              </Styled.BtnDelete>
            </div>
          ) : null
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
