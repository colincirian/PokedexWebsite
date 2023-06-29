<<<<<<< HEAD
import React from 'react';
import Sets from '../server/controllers/sets';
import { Route, Routes } from "react-router-dom"
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
>>>>>>> main
import { Home } from "./pages/Home";


function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route src="" element={<Home />} />
    </Routes>
=======
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
>>>>>>> main
  );
}

export default App;
