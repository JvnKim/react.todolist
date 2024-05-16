import { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description are required");
      return;
    }
    const newTodo = { id: Date.now(), title, description, completed: false };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const removeTodo = (id, list) => {
    if (list === "todos") setTodos(todos.filter((todo) => todo.id !== id));
    else if (list === "completed")
      setCompleted(completed.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setCompleted([...completed, { ...todo, completed: true }]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const pendingTodo = (id) => {
    const todo = completed.find((todo) => todo.id === id);
    setTodos([...todos, { ...todo, completed: false }]);
    setCompleted(completed.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        <h2>Pending Todos</h2>
        <div className="todo-list">
          {todos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <button onClick={() => completeTodo(todo.id)}>Complete</button>
              <button onClick={() => removeTodo(todo.id, "todos")}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Completed Todos</h2>
        <div className="todo-list">
          {completed.map((todo) => (
            <div key={todo.id} className="todo-item">
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <button onClick={() => pendingTodo(todo.id)}>Pending</button>
              <button onClick={() => removeTodo(todo.id, "completed")}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
