import { TodoListItem } from "../../Interfaces/TodoListItem";

export interface PendingTaskProps {
  todoItem: TodoListItem;
  index: number;
  todoList: TodoListItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoListItem[]>>;
  setTaskName: React.Dispatch<React.SetStateAction<string>>;
}
