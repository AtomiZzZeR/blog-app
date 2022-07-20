import styled from 'styled-components';

const colorBlack = '#222';

const Wrapper = styled.div``;

const Figure = styled.div`
  width: 100px;
  height: 10px;
  border: 2px dashed ${colorBlack};
  background-color: red;
`;

const Button = styled.div``;

const StyledCommentSystem = {
  Wrapper,
  Figure,
  Button,
};

export default StyledCommentSystem;
