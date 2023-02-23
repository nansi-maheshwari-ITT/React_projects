import styled from "styled-components";

const CompletedTaskLi = styled.li`
  line-height: 40px;
  border-radius: 3px;
  padding: 0 10px;
  margin-bottom: 8px;
  background: #ebe9e9;
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
`;

const CompletedListDeleteButton = styled.button`
  color: red;
  border: none;
  border-radius: 3px;
  background-color: #ebe9e9;
  margin-top: 14px;

  .fa-trash{
    height:1.25em;
  }
`;

const CompletedListElementContainer = styled.div`
  width: 90%;
  text-decoration: line-through;
`;
export {
  CompletedTaskLi,
  CompletedListDeleteButton,
  CompletedListElementContainer,
};
