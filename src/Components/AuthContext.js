"use client";

import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [sessions, setSessions] = useState([]);

  const login = (username, password) => {
    const users = [
      { username: 'customer1', password: 'password1', role: 'customer' },
      { username: 'worker1', password: 'password2', role: 'worker', name: 'John Doe' },
    ];

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser({ username: foundUser.username, role: foundUser.role, name: foundUser.name });
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const addSession = (session) => {
    setSessions([...sessions, session]);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, sessions, addSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
