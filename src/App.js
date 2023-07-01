import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sets from './pages/Sets';
import Pokedex from "./pages/Pokedex";
import Login from './Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
