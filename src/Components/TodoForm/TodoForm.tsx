import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { InputField, Input, AddButton } from "./TodoFormStyles";

interface TodoFormProps {
  addTodoItem: (name: string) => void;
  taskName: string;
  setTaskName: React.Dispatch<React.SetStateAction<string>>;
}

const TodoForm: React.FC<TodoFormProps> = ({
  addTodoItem,
  taskName,
  setTaskName,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskName.trim()) {
      addTodoItem(taskName);
      setTaskName("");
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };
  
  return (
    <InputField onSubmit={handleSubmit}>
      <Input
        placeholder="Add a task..."
        value={taskName}
        onChange={handleChange}
      />
      <AddButton className={taskName.trim() ? "active" : ""} type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </AddButton>
    </InputField>
  );
};

export default TodoForm;
