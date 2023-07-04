import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const { email, password } = state;

      // Validate the input
      if (!email || !password) {
        setError('Please enter both email and password.');
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
        setError('Authentication failed. Please try again.');
        console.error('Login failed:', errorData);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      setError('An error occurred during login. Please try again later.');
      console.error('Login error:', error);
    }
  };

  const loginContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#0B1B3D',
  };

  const loginFormStyle = {
    backgroundColor: '#f2f2f2',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '350px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#0B1B3D',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          background-color: #0B1B3D;
        }
      `}</style>
      <div style={loginContainerStyle}>
        <div style={loginFormStyle}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h1>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <form>
            <div style={{ marginBottom: '10px' }}>
              <input
                type="email"
                placeholder="Email"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <input
                type="password"
                placeholder="Password"
                value={state.password}
                onChange={(e) => setState({ ...state, password: e.target.value })}
                style={inputStyle}
              />
            </div>
            <button type="button" onClick={handleLogin} style={buttonStyle}>
              Login
            </button>
          </form>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
