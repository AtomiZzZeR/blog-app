import React, { useState } from 'react';
import Styled from './AddPost.styles';
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { postsActionList } from '../../features/posts/postsSlice';

const AddPost = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState({ title: '', description: '' });

  const { title, description } = post;

  const handleChangePostTitle = (event) => {
    setPost({ ...post, title: event.target.value })
  }
  const handleChangePostDescription = (event) => {
    setPost({ ...post, description: event.target.value })
  }

  const handleAddPostClick = () => {
    if (title == '' && description == '') {
      alert("Error! Empty title and description of the post");
      return;
    }
    if (title == '') {
      alert("Error! Empty title of the post");
      return;
    }
    if (description == '') {
      alert("Error! Empty description of the post");
      return;
    }
    if (title.length != '' && title.length <= 3) {
      alert("Error! Title must contain more than 3 letters");
      return;
    }
    if (description.length != '' && description.length <= 10) {
      alert("Error! Description must contain more than 10 letters");
      return
    }

    dispatch(postsActionList.addPost({ id: uuid(), title, description }));

    setPost({ title: '', description: '' });

    alert('Post added to the list');
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
