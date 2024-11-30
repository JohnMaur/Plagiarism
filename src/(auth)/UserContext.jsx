import React, { createContext, useContext, useState } from 'react';

// Create the UserContext with default value being null (user not logged in)
const UserContext = createContext(null);

export const useUser = () => {
  return useContext(UserContext); // Custom hook to use user context
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null; // Initialize from storage
  });

  const login = (username, token) => {
    const userData = { username, token };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save to storage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove token from storage
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
