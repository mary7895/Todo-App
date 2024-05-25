import React, { useState } from "react";
import TodoActions from "../todoActions/todoActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./todoApp.css";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInput(event) {
    setInput(event.target.value);
  }

  function addTodo() {
    if (input.trim() !== "") {
      const newTodo = {
        id: Math.random().toString(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function completeTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo; //return the unmodified todo if it doesn't match the id
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do App</h1>
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="todo-image"
          src="https://img.freepik.com/free-vector/designer-girl-concept-illustration_114360-4455.jpg?t=st=1713831676~exp=1713835276~hmac=798d9976eff4d8965aaf7a51ead4cf9a2f7485bf02304508d499b1b346c04ad4"
          alt="Girl with to-do list"
        />
      </div>
      <p className="text-dark text-center mt-4">Add new todo</p>

      <InputGroup className="mb-3">
        <FormControl
          className="custom-placeholder"
          placeholder="Enter new task..."
          onChange={handleInput}
          value={input}
          name="Inputvalue"
        />
        <Button variant="primary" onClick={addTodo}>
          Add
        </Button>
      </InputGroup>

      {todos.length > 0 ? (
        <table className="table todo-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Actions</th>
         
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className={todo.completed ? "completed-task" : ""}>
                  {todo.text}
                </td>
                <td>
                  <TodoActions
                    todoId={todo.id}
                    onDelete={() => deleteTodo(todo.id)}
                    onComplete={() => completeTodo(todo.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-3">No todos available.</p>
      )}
    </div>
  );
};

export default TodoApp;
