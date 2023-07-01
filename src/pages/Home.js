import React, { useState, useEffect } from "react";

function Home() {

  const home = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '25px'
  }
  return (
    <div className = "homepage" style={home}>
      <h1>WIKIMON</h1>
    </div>
  );
};

export default Home;