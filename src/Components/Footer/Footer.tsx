import { TodoListItem } from "../../Interfaces/TodoListItem";
import { FooterDiv, DeleteAllTaskButton } from "./FooterStyle";
import { FooterProps } from "./FooterPropsInterface";
import { ClearAll } from "./FooterConstant";

const Footer: React.FC<FooterProps> = ({
  setTodoList,
  pendingTaskCount,
  todoList,
}) => {
  const deleteAllTask = () => {
    setTodoList([]);
  };
  return (
    <FooterDiv>
      <span>You have {pendingTaskCount} pending Task</span>
      <DeleteAllTaskButton
        className={todoList.length > 0 ? "active" : ""}
        onClick={deleteAllTask}
      >
      {ClearAll}
      </DeleteAllTaskButton>
    </FooterDiv>
  );
};

export default Footer;
