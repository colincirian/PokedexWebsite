import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { email, password } = state;

      // Validate the input
      if (!email || !password) {
        // Display an error message or handle the validation error
        return;
      }

      // Send a request to the backend server to authenticate the user
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Handle the response from the server
      if (response.ok) {
        // Authentication successful
        const { token } = await response.json();

        // Store the token in local storage or a browser cookie
        localStorage.setItem('token', token);

        // Redirect the user to the desired page or update the UI accordingly
        navigate('/dashboard');
      } else {
        // Authentication failed
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        // Display an error message or handle the authentication failure
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {/* Your login form inputs and submit button */}
      <form>
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
