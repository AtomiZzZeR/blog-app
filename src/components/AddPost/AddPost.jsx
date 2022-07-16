import React, { useState } from 'react';
import Styled from './AddPost.styles';
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { postsActionList } from '../../features/posts/postsSlice';
import { postsValidationHelpers } from "../../utils/helpers";

const AddPost = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState(
    {
      title: JSON.parse(sessionStorage.getItem('post')).title || '',
      description: JSON.parse(sessionStorage.getItem('post')).description || '',
    }
  );

  const handleChangePostTitle = (event) => {
    setPost({ ...post, title: event.target.value })
    sessionStorage.setItem(
      'post',
      JSON.stringify({ ...JSON.parse(sessionStorage.getItem("post")), title: event.target.value })
    );
  }
  const handleChangePostDescription = (event) => {
    setPost({ ...post, description: event.target.value });
    sessionStorage.setItem(
      'post',
      JSON.stringify({ ...JSON.parse(sessionStorage.getItem("post")), description: event.target.value })
    );
  }

  const handleAddPostClick = () => {
    const { validatePost } = postsValidationHelpers;

    const createdPost = { id: uuid(), ...post };

    const error = validatePost(createdPost);

    if (error) {
      alert(error);

      return;
    } else {
      dispatch(postsActionList.addPost(createdPost));

      sessionStorage.setItem('post', JSON.stringify({ title: "", description: "" }))

      setPost({ title: '', description: '' });

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
      <div>
        <span>Post topic:</span>
        <Styled.InputText type={'text'} placeholder={'Post topic'} />
      </div>
      <div>
        <span>Image upload:</span>
        <Styled.InputFile type={'file'} />
      </div>
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
