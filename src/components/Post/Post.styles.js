import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding: 25px 50px;
  border-radius: 100px;
  border: 2px solid #ff6b6b;
  margin: 0px 0px 30px 0px;
  box-shadow: 0px -10px 1px 1px #ff6b6b;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.5em;
`;

const Description = styled.div`
  text-align: center;
  font-size: 1.1em;
`;

const BtnDelete = styled.button`
  position: absolute;
  right: 0px;
  top: 35px;
  border-radius: 10px 50% 10px 10px;
  width: 50px;
  height: 50px;
  border: 2px solid #ff6b6b;
  background-color: #222;
`;

const TitleComments = styled.div`
  margin: 0px 0px 0px 55px;
`;

const ContainerForComments = styled.div``;

const StyledPost = {
  Wrapper,
  Title,
  Description,
  BtnDelete,
  TitleComments,
  ContainerForComments,
};

export default StyledPost;
