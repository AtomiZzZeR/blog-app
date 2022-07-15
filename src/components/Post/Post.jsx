import React from 'react';
import Styled from './Post.styles';
import { LikeSystem } from '../LikeSystem';

const Post = (props) => {
  return (
    <Styled.Post>
      <Styled.Content>
        <h2>
          {props.number}. {props.post.title}
        </h2>
        <div>
          {props.post.description}
        </div>
      </Styled.Content>
      <Styled.Btns>
        <button>Удалить</button>
      </Styled.Btns>
      <LikeSystem />
    </Styled.Post>
  );
}

export default Post;
