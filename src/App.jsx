import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
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

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const pendingTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: false } : todo
      )
    );
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        addTodo={addTodo}
      />
      <div>
        <h2>Pending Todos</h2>
        <div className="todo-list">
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onComplete={completeTodo}
                onRemove={removeTodo}
              />
            ))}
        </div>
      </div>
      <div>
        <h2>Completed Todos</h2>
        <div className="todo-list">
          {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onPending={pendingTodo}
                onRemove={removeTodo}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
