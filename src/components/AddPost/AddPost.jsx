import React, { useState } from 'react';
import Styled from './AddPost.styles';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { postsActionList } from '../../features/posts/postsSlice';
import { postsValidationHelpers } from "../../utils/helpers";
import { selectSession } from '../../features/session/sessionSlice';

const AddPost = () => {
  const dispatch = useDispatch();

  const sessionSelector = useSelector(selectSession);

  const { userId } = sessionSelector;

  const [post, setPost] = useState(
    {
      title: '',
      description: '',
      likeList: [],
      commentList: [],
      creatingData: 0,
      userId,
    }
  );

  const handleChangePostTitle = (event) => {
    setPost({ ...post, title: event.target.value })
  }
  const handleChangePostDescription = (event) => {
    setPost({ ...post, description: event.target.value });
  }

  const handleAddPostClick = () => {
    const { validatePost } = postsValidationHelpers;

    const createdPost = { ...post, id: uuid(), creatingData: Date.now() };

    const error = validatePost(createdPost);

    if (error) {
      alert(error);

      return;
    } else {
      dispatch(postsActionList.addPost(createdPost));

      setPost({ ...post, title: '', description: '' });

      alert('Post added to the list');
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.Title>Creating post</Styled.Title>
      <Styled.InputTitle
        type={'text'}
        placeholder={'Post title'}
        value={post.title}
        onChange={handleChangePostTitle}
      />
      <Styled.TextAreaDescription
        type={'text'}
        placeholder={'Post description'}
        value={post.description}
        onChange={handleChangePostDescription}
      />
      <Styled.BoxForButton>
        <Styled.Button onClick={handleAddPostClick}>Add Post</Styled.Button>
      </Styled.BoxForButton>
    </Styled.Wrapper>
  );
}

export default AddPost;
