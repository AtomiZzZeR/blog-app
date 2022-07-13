import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 45px;
  align-items: center;
  justify-content: space-between;
`;

const Badge = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: #ff6b6b;
  transition: 0.2s;

  &:active {
    transform: scale(1.2);
  }
`;

const Counter = styled.div`
  color: #fff;
  font-size: 1.3em;
  display: inline-block;
`;

const StyledLikeSystem = {
  Wrapper,
  Badge,
  Counter,
};

export default StyledLikeSystem;
