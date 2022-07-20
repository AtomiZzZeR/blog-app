import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 0px 0px 40px 0px;
  width: 750px;
  padding: 5px 30px;
`;

const Title = styled.div`
  font-size: 2em;
  text-align: center;
  width: 320px;
  margin: 0px auto 15px;
  padding: 0px 0px 15px 0px;
  border-bottom: 3px solid #ff6b6b;
  color: #fff;
  font-weight: bold;
`;

const InputTitle = styled.input`
  display: inline-block;
  font-size: 1.3em;
  margin: 0px auto 13px;
  padding: 5px 5px 5px 10px;
  border-radius: 50px;
  border: 2px solid #ff6b6b;
  color: #222;
  font-weight: bold;
  width: 330px;

  &:focus {
    outline: none;
  }
`;

const TextAreaDescription = styled.textarea`
  display: inline-block;
  font-size: 1.7em;
  margin: 0px auto 13px;
  padding: 15px;
  border-radius: 50px;
  border: 2px solid #ff6b6b;
  color: #222;
  font-weight: bold;
  resize: none;
  width: 500px;
  height: 280px;

  &:focus {
    outline: none;
  }
`;

// const InputFile = styled.input`
//   font-size: 1.3em;
//   margin-bottom: 13px;
//   padding: 5px 5px 5px 10px;
//   border-radius: 50px;
//   border: 2px solid #ff6b6b;
//   font-weight: bold;

//   &:focus {
//     outline: none;
//   }
// `;

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
  cursor: pointer;
`;

const StyledAddPost = {
  Wrapper,
  Title,
  InputTitle,
  TextAreaDescription,
  // InputFile,
  BoxForButton,
  Button,
};

export default StyledAddPost;
