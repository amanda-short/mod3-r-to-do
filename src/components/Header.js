import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { signOut } from '../services/auth';
import { UserContext } from '../context/UserContext.js';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="navbarh1">To Dos Found Here</h1>
        <a
          className={`navbar-active ${isActive ? 'is-active' : ''}`}
          onClick={() => setIsActive((prev) => !prev)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-list ${isActive ? 'is-active' : ''}`} id="navbar-list">
        <div className="navbar-end">
          <div className="navbar-item">
            {!user && (
              <div className="buttons">
                <Link className="button is-primary" to="/auth/sign-up">
                  <strong>Sign up</strong>
                </Link>
                <Link className="button is-light" to="/auth/sign-in">
                  <strong>Sign in</strong>
                </Link>
              </div>
            )}
            {user && (
              <>
                <div>hello {user.email}</div>
                <button className="button is-light" onClick={handleLogout}>
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {}
    </nav>
  );
}
