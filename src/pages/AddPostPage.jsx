import React, { useState } from 'react';
import Styled from './AddPostPage.styles';
import { v4 as uuid } from "uuid";

const AddPostPage = ({ create }) => {
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
      <Styled.Input type={'text'} placeholder={'Название поста'} value={title} onChange={handleChangeTitle} />
      <Styled.Input type={'text'} placeholder={'Описание поста'} value={description} onChange={handleChangeDescription} />
      <Styled.Button onClick={addNewPost}>Отправить</Styled.Button>
    </Styled.Form>
  );
}

export default AddPostPage;
