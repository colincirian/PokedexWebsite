import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [state, setState] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      const { firstName, lastName, email, password } = state;

      // Validate the input
      if (!firstName || !lastName || !email || !password) {
        setError('Please enter all required fields.');
        return;
      }

      // Send a request to the backend server to create a new user
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      // Handle the response from the server
      if (response.ok) {
        // Sign up successful
        const data = await response.json();
        console.log(data); // For debugging purposes

        // Redirect the user to the desired page or update the UI accordingly
        navigate('/dashboard');
      } else {
        // Sign up failed
        const errorData = await response.json();
        setError('Sign up failed. Please try again.');
        console.error('Sign up failed:', errorData);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      setError('An error occurred during sign up. Please try again later.');
      console.error('Sign up error:', error);
    }
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
    marginTop: '10px',
  };

  return (
    <>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Sign Up</h2>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="First Name"
            value={state.firstName}
            onChange={(e) => setState({ ...state, firstName: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Last Name"
            value={state.lastName}
            onChange={(e) => setState({ ...state, lastName: e.target.value })}
            style={inputStyle}
          />
        </div>
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
        <button type="button" onClick={handleSignUp} style={buttonStyle}>
          Sign Up
        </button>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
