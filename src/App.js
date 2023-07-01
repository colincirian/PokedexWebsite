import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sets from './pages/Sets';
import Pokedex from "./pages/Pokedex";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sets" element={<Sets />} />
        <Route path="/Pokedex" element={<Pokedex />} />
      </Routes>
    </div>
  );
}

export default App;