import { NavLink, Redirect, useParams } from 'react-router-dom';
import './Auth.css';
import { useContext, useState } from 'react';
import { authUser } from '../services/auth.js';
import { UserContext } from '../../src/context/UserContext.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);
  if (user) {
    return <Redirect to="/todo" />;
  }
  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="auth-box">
      <nav className="panel is-success">
        <div className="panel-tabs">
          <NavLink className="sign-in" to="/auth/sign-in" activeClassName="is-active">
            Sign In
          </NavLink>
          <NavLink className="sign-up" to="/auth/sign-up" activeClassName="is-active">
            Sign Up
          </NavLink>
        </div>
        <div className="panel-block">
          <div className="field">
            <label className="label">Email</label>
            <div className="email-input">
              <input
                className="input"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="password-input"></span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="control">
          <button onClick={submitAuth} className="submit-button">
            Submit
          </button>
        </div>
      </nav>
    </div>
  );
}
