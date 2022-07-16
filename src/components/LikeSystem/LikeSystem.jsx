import React, { useState } from 'react';
import Styled from './LikeSystem.style';

const LikeSystemStyle = () => {
  const [likes, setLikes] = useState(0);

  const handleChange = () => {
    let num = +likes;

    if (num === 1) {
      setLikes(0);
    } else {
      setLikes(1);
    }

  }

  return (
    <Styled.Wrapper>
      <Styled.Badge onClick={handleChange} />
      <Styled.Counter>{likes}</Styled.Counter>
    </Styled.Wrapper>
  );
}

export default LikeSystemStyle;
