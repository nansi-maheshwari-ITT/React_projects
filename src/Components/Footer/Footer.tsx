import { TodoListItem } from "../../Interfaces/TodoListItem";
import { FooterDiv, DeleteAllTaskButton } from "./FooterStyle";

interface FooterProps {
  setTodoList: React.Dispatch<React.SetStateAction<TodoListItem[]>>;
  pendingTaskCount: number;
  todoList: TodoListItem[];
}

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
        Clear all
      </DeleteAllTaskButton>
    </FooterDiv>
  );
};

export default Footer;
