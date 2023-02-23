import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

const DeleteAllTaskButton = styled.button`
  background: linear-gradient(to bottom, #6d9db1, #db82d0);
  color: white;
  cursor: pointer;
  opacity: 0.6;
  border-radius: 3px;
  border: none;
  font-size: 18px;
  padding: 6px 10px;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export { FooterDiv, DeleteAllTaskButton };
