import "./TodoForm.css";

const TodoForm = ({
  title,
  setTitle,
  description,
  setDescription,
  addTodo,
}) => {
  return (
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
  );
};

export default TodoForm;
