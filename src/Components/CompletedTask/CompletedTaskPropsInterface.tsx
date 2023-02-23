import { TodoListItem } from "../../Interfaces/TodoListItem";

export interface CompletedTaskProps {
  todoItem: TodoListItem;
  index: number;
  setTodoList: React.Dispatch<React.SetStateAction<TodoListItem[]>>;
}
