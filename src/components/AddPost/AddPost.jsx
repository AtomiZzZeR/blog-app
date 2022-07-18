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
      commentList: [], // userId, id, content
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
    <Styled.Form>
      <Styled.Title>Creating post</Styled.Title>
      <div>
        <span>Post title:</span>
        <Styled.InputText
          type={'text'}
          placeholder={'Post title'}
          value={post.title}
          onChange={handleChangePostTitle}
        />
      </div>
      {/* <div>
        <span>Post topic:</span>
        <Styled.InputText type={'text'} placeholder={'Post topic'} />
      </div>
      <div>
        <span>Image upload:</span>
        <Styled.InputFile type={'file'} />
      </div> */}
      <div>
        <span>Post description:</span>
        <Styled.InputText
          type={'text'}
          placeholder={'Post description'}
          value={post.description}
          onChange={handleChangePostDescription}
        />
      </div>
      <Styled.BoxForButton>
        <Styled.Button onClick={handleAddPostClick}>Add Post</Styled.Button>
      </Styled.BoxForButton>
    </Styled.Form>
  );
}

export default AddPost;
