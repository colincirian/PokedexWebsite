import React from "react";
import "../App.css";
//import Navbar from "./Navbar";
//import { Link } from "react-router-dom";


function Home() {
  const container = {
    backgroundColor: "#0B1B3D",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
  };

  const cardStyle = {
    padding: "20px",
    margin: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const img = {
    width: "400px",
    height: "400px",
    borderRadius: "2rem",
  };

  return (
    <div className="" style={container}>
      <div className="homepage">
        <div>
          <h1>CATCH THOSE MFS</h1>
          <a href="https://pokemongolive.com/?hl=en" style={cardStyle}>
            <img src="./images/pokemonGo.jpg" alt="pokemon-go" style={img} />
          </a>
        </div>

        <div>
          <h1>starter pack</h1>
          <a href="https://pokemongolive.com/?hl=en" style={cardStyle}>
            <img src="./images/pokemonGo.jpg" alt="pokemon-go" style={img} />
          </a>
        </div>

        <div>
          <h1>CATCH THOSE MFS</h1>
          <a href="https://pokemongolive.com/?hl=en" style={cardStyle}>
            <img src="./images/pokemonGo.jpg" alt="pokemon-go" style={img} />
          </a>
        </div>

        <div className="card" id="pokemon-go-link" style={cardStyle}>
          <h1>hello</h1>
          <p>
            The leap into electronic typesetting, remaining essentially
            unchanged. It was popularized in the 1960s with the release of
            Letraset.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
