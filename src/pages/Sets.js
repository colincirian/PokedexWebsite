import React, { useEffect, useState } from 'react';
import '../App.css';
import Home from './Home';

const CardBundles = () => {
  const [bundles, setBundles] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch card bundles from the API
    const fetchCardBundles = async () => {
      try {
        const response = await fetch(
          'https://api.pokemontcg.io/v2/sets?q=series:sword&series:shield'
        );
        const data = await response.json();

        // Set the fetched bundles in the state
        setBundles(data.data);
      } catch (error) {
        console.error('Error fetching card bundles:', error);
      }
    };

    fetchCardBundles();
  }, []);

  useEffect(() => {
    // Fetch user data or check session to determine if user is logged in
    const fetchUser = async () => {
      try {
        const response = await fetch('/user');
        const data = await response.json();
        if (data.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/logout');
      const data = await response.json();
      if (response.ok) {
        setUser(null);
      } else {
        console.error('Logout failed:', data.message);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (

    <div class>
      <Home /> {/* Render the Home component for the navigation bar */}
      <h1>Card Bundles</h1>
      <ul>

    <div
      style={{
        background: '#0B1B3D',
      }}
    >
      <Home user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '10px' }}>Card Bundles</h1>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '20px',
          listStyle: 'none',
          padding: 0,
        }}

        {bundles.map((bundle) => (
          <li
            key={bundle.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: 'white',
              borderRadius: '5px',
            }}
          >
            <h2 style={{ fontSize: '20px', color: '#333' }}>{bundle.name}</h2>
            <img
              src={bundle.images.logo}
              alt={bundle.name}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p>Series: {bundle.series}</p>
            <p>Total Cards: {bundle.total}</p>
            <p>Price: {bundle.price || '¥20,206.89'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardBundles;
