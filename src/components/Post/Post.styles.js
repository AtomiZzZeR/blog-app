import styled from 'styled-components';

const colorOrange = '#ff6b6b';
const colorBlack = '#222';

const Wrapper = styled.div`
  position: relative;
  padding: 25px 50px;
  border-radius: 100px;
  border: 2px solid ${colorOrange};
  margin: 0px 0px 30px 0px;
  box-shadow: 0px -10px 1px 1px ${colorOrange};
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
  border: 2px solid ${colorOrange};
  background-color: ${colorBlack};
  cursor: pointer;

  display: inline-block;
  font-size: 2.5em;
  color: ${colorOrange};
`;

const BtnDelete = styled.button`
  position: absolute;
  right: 15px;
  top: 50px;
  border-radius: 10px 10px 10px 10px;
  width: 50px;
  height: 50px;
  border: 2px solid ${colorOrange};
  background-color: ${colorBlack};
  cursor: pointer;

  & i {
    display: inline-block;
    font-size: 2.5em;
    color: ${colorOrange};
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
