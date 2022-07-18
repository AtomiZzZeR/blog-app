import styled from 'styled-components';
import plusIcon from '../../assets/images/plusIcon.svg';

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

const BoxForEditPost = styled.div`
  text-align: center;
`;

const BtnEdit = styled.button`
  position: absolute;
  right: 75px;
  top: 50px;
  border-radius: 10px 10px 10px 10px;
  width: 50px;
  height: 50px;
  border: 2px solid #ff6b6b;
  background-color: #222;
  cursor: pointer;
  background: url(${plusIcon});

  display: inline-block;
  font-size: 2.5em;
  color: #ff6b6b;
`;

const BtnDelete = styled.button`
  position: absolute;
  right: 15px;
  top: 50px;
  border-radius: 10px 10px 10px 10px;
  width: 50px;
  height: 50px;
  border: 2px solid #ff6b6b;
  background-color: #222;
  cursor: pointer;

  & i {
    display: inline-block;
    font-size: 2.5em;
    color: #ff6b6b;
  }
`;

const TitleComments = styled.div`
  margin: 0px 0px 0px 55px;
`;

const ContainerForComments = styled.div`
  margin: 0px 0px 40px;
`;

const StyledPost = {
  Wrapper,
  Title,
  Description,
  BoxForEditPost,
  BtnDelete,
  BtnEdit,
  TitleComments,
  ContainerForComments,
};

export default StyledPost;
