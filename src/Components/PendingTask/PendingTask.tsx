import { TodoListItem } from "../../Interfaces/TodoListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  PendingTaskLi,
  CheckButton,
  ElementContainer,
  SideIcons,
  EditButton,
  DeleteButton,
} from "./PendingTaskStyles";
import { PendingTaskProps } from "./PendingTaskPropsInterface";

const PendingTask: React.FC<PendingTaskProps> = ({
  todoItem,
  index,
  setTodoList,
  todoList,
  setTaskName,
}) => {
  const markTaskCompleted = () => {
    const itemIndex = todoList.findIndex((item) => item.id === todoItem.id);
    const updatedTodoList = [...todoList];
    updatedTodoList[itemIndex].completed = true;
    setTodoList(updatedTodoList);
  };

  const editSelectedTask = () => {
    setTaskName(todoItem.name);
    deleteTask();
  };

  const deleteTask = () => {
    setTodoList((oldValue) => {
      return oldValue.filter((item) => item.id !== todoItem.id);
    });
  };
  return (
    <PendingTaskLi>
      <CheckButton onClick={markTaskCompleted}>
        <FontAwesomeIcon icon={faCheckSquare} />
      </CheckButton>
      <ElementContainer>{todoItem.name}</ElementContainer>
      <SideIcons>
        <div>
          <EditButton onClick={editSelectedTask}>Edit</EditButton>
        </div>
        <div>
          <DeleteButton onClick={deleteTask}>
            <FontAwesomeIcon icon={faTrash} />
          </DeleteButton>
        </div>
      </SideIcons>
    </PendingTaskLi>
  );
};

export default PendingTask;
