import React from 'react';
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import pokeballVideo from './public/pokeball.mp4';


function App() {
  return (
    <Routes>
      <Route src="" element={<Home />} />
    </Routes>
  );
}

export default App;
