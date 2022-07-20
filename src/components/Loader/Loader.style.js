import styled from 'styled-components';

const colorOrange = '#ff6b6b';
const colorBlack = '#222';

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dashed ${colorOrange};
  background-color: ${colorBlack};
`;

const StyledLoader = {
  Wrapper,
};

export default StyledLoader;
