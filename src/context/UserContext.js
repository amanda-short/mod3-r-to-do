const { createContext, useState, useContext } = require('react');
const { getUser } = require('../services/auth');

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

export { UserProvider, useUser };
