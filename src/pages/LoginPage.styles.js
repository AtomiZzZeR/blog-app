import styled from 'styled-components';

const Login = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #fff;
  font-weight: bold;
`;

const Input = styled.input`
  font-size: 1.7em;
  padding: 5px 15px;
  border-radius: 30px;
`;

const Button = styled.button`
  font-size: 1.7em;
  padding: 5px 15px;
  border-radius: 30px;
`;

const StyledLoginPage = {
  Login,
  Input,
  Button,
};

export default StyledLoginPage;
