import React, { useState } from 'react';
import Styled from './AddPostPage.styles';
import { v4 as uuid } from "uuid";

const AddPostPage = ({ title, body, posts }) => {

  const [nposts, SetNposts] = useState(posts);

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      id: uuid(),
      title,
      body,
    }

    SetNposts([...nposts, newPost]);
  }

  return (
    <Styled.Form>
      <Styled.Input type={'text'} placeholder={'Название поста'} />
      <Styled.Input type={'text'} placeholder={'Описание поста'} />
      <Styled.Button onClick={addNewPost}>Отправить</Styled.Button>
    </Styled.Form>
  );
}

export default AddPostPage;
