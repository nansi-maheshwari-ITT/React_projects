import React from "react";
import { useState } from "react";
import TodoForm from "./Components/TodoForm/TodoForm";
import CompletedTask from "./Components/CompletedTask/CompletedTask";
import PendingTask from "./Components/PendingTask/PendingTask";
import Footer from "./Components/Footer/Footer";
import { MainBox, Header, Ul } from "./Styles/AppStyles";
import { TodoListItem } from "./Interfaces/TodoListItem";
import { GlobalStyle } from "./Styles/GlobalStyle";

function App() {
  const [todoList, setTodoList] = useState<TodoListItem[]>([]);
  const [taskName, setTaskName] = useState("");

  const addTodoItem = (taskName: string) => {
    const newTodoItem = {
      name: taskName,
      completed: false,
      id: todoList.length,
    };
    setTodoList((oldValue) => {
      return [...oldValue, newTodoItem];
    });
  };

  const completedTasks = todoList.filter((todoItem) => todoItem.completed);
  const pendingTasks = todoList.filter((todoItem) => !todoItem.completed);

  const todoFormProps={
    taskName:taskName,
    setTaskName:setTaskName,
    addTodoItem:addTodoItem
  }

  const pendingTaskProps={
    todoList:todoList,
    setTodoList:setTodoList,
    setTaskName:setTaskName
  }
  const footerProps={
    pendingTaskCount:pendingTasks.length,
    todoList:todoList,
    setTodoList:setTodoList,
  }

  return (
    <>
      <GlobalStyle />
      <MainBox>
        <Header>To Do App</Header>
        <TodoForm
          {...todoFormProps}
        ></TodoForm>
        {pendingTasks.length > 0 && (
          <Ul>
            {pendingTasks.map((todoItem, index) => (
              <PendingTask
              {...pendingTaskProps}
                todoItem={todoItem}
                index={index}
                key={index}
                
              />
            ))}
          </Ul>
        )}
        {completedTasks.length > 0 && (
          <div>
            <h1>Complete Task</h1>
            <Ul>
              {completedTasks.map((todoItem, index) => (
                <CompletedTask
                  todoItem={todoItem}
                  index={index}
                  key={index}
                  setTodoList={setTodoList}
                />
              ))}
            </Ul>
          </div>
        )}
        <Footer
         {...footerProps}
        ></Footer>
      </MainBox>
    </>
  );
}

export default App;
