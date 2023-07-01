import React from 'react';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './pages/Navbar';
import Pokedex from './pages/Pokedex';
import Sets from './pages/Sets';

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <Home />
      <Navbar />
      <Pokedex />
      <Sets />
    </div>
  );
}

export default App;