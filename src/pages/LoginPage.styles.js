import styled from 'styled-components';

const colorOrange = '#ff6b6b';
const colorBlack = '#222';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bold;
  box-shadow: inset 0px 0px 100px 1px #000;
`;

const BorderOne = styled.div`
  border: 5px solid ${colorOrange};
  padding: 50px;
  border-radius: 150px;
  box-shadow: 0px -10px 1px 10px ${colorOrange};
`;

const BorderTwo = styled.div`
  border: 5px solid ${colorOrange};
  padding: 50px;
  border-radius: 200px;
  box-shadow: 0px 10px 1px 10px ${colorOrange};
`;

const ContainerForLogin = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid ${colorOrange};
  border-radius: 100px;
  padding: 30px 50px;
  box-shadow: 0px 10px 1px 10px ${colorOrange};
`;

const Title = styled.h1`
  padding: 0px 0px 10px 0px;
  width: 230px;
  text-align: center;
  margin: 0px auto 15px;
  border-bottom: 2px solid ${colorOrange};
`;

const Input = styled.input`
  font-size: 1.7em;
  padding: 5px 15px;
  border-radius: 30px;
  margin: 0px 0px 15px 0px;
  font-weight: bold;
  color: ${colorBlack};

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-size: 1.7em;
  padding: 5px 15px;
  border-radius: 30px;
  margin: 0px auto;
  width: 230px;
  font-weight: bold;
  color: ${colorBlack};
  cursor: pointer;
`;

const StyledLoginPage = {
  Wrapper,
  BorderOne,
  BorderTwo,
  ContainerForLogin,
  Title,
  Input,
  Button,
};

export default StyledLoginPage;
