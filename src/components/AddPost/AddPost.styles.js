import styled from 'styled-components';

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  flex-direction: column;
  margin: 0px 0px 30px 0px;
`;

const Input = styled.input`
  font-size: 2em;
  margin-bottom: 20px;
  padding: 10px;
`;

const Button = styled.button`
  font-size: 2em;
`;

const StyledAddPost = {
  Form,
  Input,
  Button,
};

export default StyledAddPost;
