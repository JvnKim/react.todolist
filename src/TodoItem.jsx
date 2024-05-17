import "./TodoItem.css";

const TodoItem = ({ todo, onComplete, onRemove, onPending }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      {todo.completed ? (
        <button onClick={() => onPending(todo.id)}>Pending</button>
      ) : (
        <button onClick={() => onComplete(todo.id)}>Complete</button>
      )}
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
