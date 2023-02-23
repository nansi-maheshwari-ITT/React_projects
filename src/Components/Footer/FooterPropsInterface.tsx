import { TodoListItem } from "../../Interfaces/TodoListItem";

export interface FooterProps {
  setTodoList: React.Dispatch<React.SetStateAction<TodoListItem[]>>;
  pendingTaskCount: number;
  todoList: TodoListItem[];
}
