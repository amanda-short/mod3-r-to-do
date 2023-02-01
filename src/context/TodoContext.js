import { createContext, useState, useContext } from 'react';
import { createTodo } from '../services/todo.js';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const addTodoHandler = async (newTodo) => {
    try {
      const response = await createTodo(newTodo);
      setTodo([response.data, ...todo]);
    } catch (e) {
      console.error(e);
    }
  };

  return <TodoContext.Provider value={{ todo, addTodoHandler }}>{children}</TodoContext.Provider>;
};

const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be wrapped in a UserProvider');
  }

  return context;
};

export { TodoProvider, useTodo };