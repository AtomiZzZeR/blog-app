import styled from 'styled-components';

const colorOrange = '#ff6b6b';

const Wrapper = styled.div``;

const Title = styled.div`
  width: 500px;
  margin: 15px auto 40px;
  padding: 10px 0px 10px 0px;
  border-top: 4px solid ${colorOrange};
  border-bottom: 4px solid ${colorOrange};
  box-shadow: inset 0px 0px 20px 1px ${colorOrange};
  border-radius: 10%;
  font-size: 2.3em;
  text-align: center;
`;

const StyledPostList = {
  Wrapper,
  Title,
};

export default StyledPostList;
