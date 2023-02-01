import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

import { useUser } from '../context/UserContext.js';
import { Redirect } from 'react-router-dom';

export default function Todo() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div className="redirect">
      <TodoList />
      <TodoForm />
    </div>
  );
}
