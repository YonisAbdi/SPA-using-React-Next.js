"use client";

import { useState } from 'react';

const LoginPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      {isAuthenticated && <p>You are logged in!</p>}
    </div>
  );
};

export default LoginPage;
