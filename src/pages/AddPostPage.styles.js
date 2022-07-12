import styled from 'styled-components';

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 2em;
  margin-bottom: 20px;
  padding: 10px;
`;

const Button = styled.button`
  font-size: 2em;
`;

const StyledAddPostPage = {
  Form,
  Input,
  Button,
};

export default StyledAddPostPage;
