import React, { useState } from 'react';
import Styled from './AddPost.styles';
import { v4 as uuid } from "uuid";

const AddPost = ({ create }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      id: uuid(),
      title,
      description,
    }

    create(newPost);
    setTitle('');
    setDescription('');
  }

  return (
    <Styled.Form>
      <Styled.Title>Create post</Styled.Title>
      <div>
        <span>Post title:</span>
        <Styled.InputText type={'text'} placeholder={'Post title'} value={title} onChange={handleChangeTitle} />
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
        <Styled.InputText type={'text'} placeholder={'Post description'} value={description} onChange={handleChangeDescription} />
      </div>
      <Styled.BoxForButton>
        <Styled.Button onClick={addNewPost}>Create</Styled.Button>
      </Styled.BoxForButton>
    </Styled.Form>
  );
}

export default AddPost;
