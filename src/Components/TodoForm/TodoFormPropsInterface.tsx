export interface TodoFormProps {
	addTodoItem: (name: string) => void;
	taskName: string;
	setTaskName: React.Dispatch<React.SetStateAction<string>>;
  }
  