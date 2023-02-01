import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth.js';
import Header from './components/Header.js';
import Todo from './components/Todo.js';

import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todo" component={Todo} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/todo" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
