import styled from 'styled-components';

const Form = styled.div`
  flex-direction: column;
  margin: 0px 0px 40px 0px;
`;

const Title = styled.div`
  font-size: 2em;
  text-align: center;
  width: 400px;
  margin: 0px auto 15px;
  padding: 0px 0px 10px 0px;
  border-bottom: 3px solid #ff6b6b;
`;

const InputText = styled.input`
  font-size: 1.3em;
  margin-bottom: 13px;
  padding: 5px 5px 5px 10px;
  border-radius: 50px;
  border: 2px solid #ff6b6b;
  color: #222;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const InputFile = styled.input`
  font-size: 1.3em;
  margin-bottom: 13px;
  padding: 5px 5px 5px 10px;
  border-radius: 50px;
  border: 2px solid #ff6b6b;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const BoxForButton = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  font-size: 2em;
  border-radius: 50px;
  padding: 2px 25px;
  border: 2px solid #ff6b6b;
  background-color: #222;
  color: #fff;
  box-shadow: 0px 3px 1px 2px #ff6b6b;
`;

const StyledAddPost = {
  Form,
  Title,
  InputText,
  InputFile,
  BoxForButton,
  Button,
};

export default StyledAddPost;
