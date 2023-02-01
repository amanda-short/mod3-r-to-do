import React from 'react';
import { useState } from 'react';
import { createTodo } from '../services/todo.js';
import { useTodo } from '../context/TodoContext.js';

export default function TodoForm() {
  const [item, setItem] = useState('');
  const { setTodo } = useTodo;
  const handleNewTodo = async () => {
    try {
      const todo = await createTodo(item);
      setTodo((prev) => [...prev, todo]);
      setItem('');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="field">
      <input
        className="input"
        type="text"
        placeholder="new item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button className="button" onClick={handleNewTodo}>
        Add
      </button>
    </div>
  );
}
