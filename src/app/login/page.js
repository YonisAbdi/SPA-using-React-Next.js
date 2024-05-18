"use client";

import { useAuth } from '../../Components/AuthContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const isAuthenticated = login(username, password);
    if (isAuthenticated) {
      router.push('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
