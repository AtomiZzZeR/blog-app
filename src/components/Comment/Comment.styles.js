import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px dashed #ff6b6b;
  padding: 15px 30px;
  margin: 30px;
  border-radius: 15px;
`;

const BoxForActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  height: 20px;
`;

const TextAreaForEditComment = styled.textarea`
  resize: none;
`;

const BtnForEdit = styled.button`
  cursor: pointer;
`;

const BtnForDelete = styled.button`
  cursor: pointer;
`;

const StyledComment = {
  Wrapper,
  BoxForActions,
  TextAreaForEditComment,
  BtnForEdit,
  BtnForDelete,
};

export default StyledComment;
