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
        const response = await fetch('https://api.pokemontcg.io/v2/sets?q=series:sword&series:shield');
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
    <div>
      <Home user={user} onLogin={handleLogin} onLogout={handleLogout} /> {/* Render the Home component with user authentication */}
      <h1>Card Bundles</h1>
      <ul>
        {bundles.map((bundle) => (
          <li key={bundle.id}>
            <h2>{bundle.name}</h2>
            <img src={bundle.images.logo} alt={bundle.name} />
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
