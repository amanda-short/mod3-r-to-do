import { createContext, useEffect, useState } from 'react';
import { getTodo } from '../services/todo.js';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await getTodo();
        setTodo(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchTodo();
  }, []);
  return <TodoContext.Provider value={{ todo, setTodo }}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
