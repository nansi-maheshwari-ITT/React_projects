import styled from "styled-components";

const PendingTaskLi = styled.li`
  line-height: 45px;
  margin-bottom: 8px;
  background: #dad7d7;
  border-radius: 3px;
  padding: 0 15px;
  word-wrap: break-word;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 520px) {
    width: 90%;
  }
`;

const CheckButton = styled.button`
  height: 8%;
  width: 8%;
  border: none;
  margin: auto;
  margin-top: 14px;
  background-color: #dad7d7;
  color: rgb(83, 145, 83);
  padding: 0%;
  width: 7%;

  .fa-square-check {
    height: 1.5em;
  }
`;

const ElementContainer = styled.div`
  width: 70%;
`;

const SideIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;

  @media screen and (max-width: 520px) {
    margin-left: 15px;
  }
`;

const EditButton = styled.button`
  background: linear-gradient(to bottom, #6d9db1, #db82d0);
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
`;
const DeleteButton = styled.button`
  color: red;
  border: none;
  border-radius: 3px;
  background-color: #dad7d7;
  margin-top: 14px;
  margin-left: 5px;

  .fa-trash {
    height: 1.25em;
  }
`;

export {
  PendingTaskLi,
  CheckButton,
  ElementContainer,
  SideIcons,
  EditButton,
  DeleteButton,
};
