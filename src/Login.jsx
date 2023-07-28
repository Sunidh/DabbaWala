import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { base_url } from './apiLinks'

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const doLogin = () => {
    axios.post(`${base_url}/api/login`, credentials)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem('token', token);
        navigate('/'); // Use the navigate function to redirect after successful login
      })
      .catch((error) => {
        console.error('Login error:', error.message);
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="button" onClick={doLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
