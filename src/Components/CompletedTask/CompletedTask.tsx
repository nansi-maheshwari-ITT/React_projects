import { TodoListItem } from "../../Interfaces/TodoListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  CompletedTaskLi,
  CompletedListDeleteButton,
  CompletedListElementContainer,
} from "./CompletedTaskStyles";
import { CompletedTaskProps } from "./CompletedTaskPropsInterface";

const CompletedTask: React.FC<CompletedTaskProps> = ({
  todoItem,
  index,
  setTodoList,
}) => {
  const deleteTask = () => {
    setTodoList((oldValue) => {
      return oldValue.filter((item) => item.id !== todoItem.id);
    });
  };
  return (
    <CompletedTaskLi>
      <CompletedListElementContainer>
        {todoItem.name}
      </CompletedListElementContainer>
      <div>
        <CompletedListDeleteButton onClick={deleteTask}>
          <FontAwesomeIcon icon={faTrash} />
        </CompletedListDeleteButton>
      </div>
    </CompletedTaskLi>
  );
};

export default CompletedTask;
