import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const value = { userData, setUserData };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUserData() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUserData };
