import { NavLink, Redirect, useParams } from 'react-router-dom';
import './Auth.css';
import { useContext, useState } from 'react';
import { authUser } from '../../services/auth';
import { UserContext } from '../../src/context/UserContext.js';

export default function Auth() {
  const [email] = useState('');
  const [password] = useState('');
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);
  if (user) {
    return <Redirect to="/todo" />;
  }
  const submitAuth = async () => {
    try {
      const newUser = authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
    //***NOTES */
    // if successful
    // setUser in context
    // redirect to items
    // else display error
  };
}
