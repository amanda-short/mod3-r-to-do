import { toggleTodo } from '../services/todo.js';
import { useTodo } from '../context/TodoContext.js';

export default function TodoList() {
  const { todo, setTodo } = useTodo();
  const handleChange = async (todo) => {
    try {
      const updatedTodo = await toggleTodo(todo);
      setTodo((prevTodo) =>
        prevTodo.map((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo))
      );
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <>
      {todo.map((todo) => (
        <div key={todo.id}>
          <label className="checkbox">
            <input
              className="m-1"
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleChange(todo)}
            />
            {todo.name}
          </label>
        </div>
      ))}
    </>
  );
}
