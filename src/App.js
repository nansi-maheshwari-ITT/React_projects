import "./app.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function App() {
  const [userEnteredTodo, setUserEnteredTodo] = useState("");
  const [pendingTask, setPendingTask] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [completedTodoList, setCompletedTodoList] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const trimmedUserEnteredTodo = userEnteredTodo.trim();
    setTodoList((oldValue) => {
      return [...oldValue, trimmedUserEnteredTodo];
    });
    setPendingTask(todoList.length + 1);
    setUserEnteredTodo("");
  };

  const deleteAllTask = () => {
    setTodoList([]);
    setCompletedTodoList([]);
    setPendingTask(0);
  };

  const editSelectedTask = (item, index) => {
    setUserEnteredTodo(todoList[index]);
    deleteTask(item, index);
  };

  const handleInputChange = (event) => {
    setUserEnteredTodo(event.target.value);
  };

  const deleteTask = (item, index) => {
    setTodoList((oldValue) => {
      return oldValue.filter((item, id) => {
        return index !== id;
      });
    });
    setPendingTask(todoList.length - 1);
  };

  const markTaskCompleted = (item, index) => {
    setCompletedTodoList((oldValue) => {
      return [...oldValue, todoList[index]];
    });
    deleteTask(item, index);
  };

  const deleteCompletedTask = (item, index) => {
    setCompletedTodoList((oldValue) => {
      return oldValue.filter((item, id) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-box">
        <header>To Do App</header>

        <form className="input-field" onSubmit={addItem}>
          <input
            placeholder="Add a task..."
            value={userEnteredTodo}
            onChange={handleInputChange}
          />
          <button
            className={`add-button ${userEnteredTodo.trim() ? "active" : ""}`}
            type="submit" >
            <AddIcon></AddIcon>
          </button>
        </form>

        <ul className="to-do-list">
          {todoList.map((item, index) => (
            <li key={index}>
              <button
                className="complete-task-icon"
                onClick={() => markTaskCompleted(item, index)}
              >
                <CheckBoxIcon></CheckBoxIcon>
              </button>
              <div className="element-container">{item}</div>
              <div className="side-icons">
                <div>
                  <button
                    className="edit-icon"
                    onClick={() => editSelectedTask(item, index)}
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <button
                    className="delete-icon"
                    onClick={() => deleteTask(item, index)}
                  >
                    <DeleteIcon></DeleteIcon>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="completed-task">
          <h1
            style={{
              display: completedTodoList.length <= 0 ? "none" : "block",
            }}
          >
            Complete Task
          </h1>

          <ul className="completed-task-list">
            {completedTodoList.map((item, index) => (
              <li key={index}>
                <div className="element-container">{item}</div>
                <div>
                  <button
                    className="complete-list-delete-icon"
                    onClick={() => deleteCompletedTask(item, index)}
                  >
                    <DeleteIcon></DeleteIcon>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer">
          <span>You have {pendingTask} pending Task</span>
          <button
            className={`delete-all ${
              todoList.length || completedTodoList.length ? "active" : ""
            }`}
            onClick={deleteAllTask}
          >
            Clear all
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
