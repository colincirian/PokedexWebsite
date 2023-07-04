import React from "react";
import "../App.css";
//import Navbar from "./Navbar";
//import { Link } from "react-router-dom";

function Home() {
  const card = {
    width: "200px",
    height: "230px",
    display: "inline-block",
    padding: "15px 25px",
    margin: "10px 15px",
    boxSizing: "border-box",
    width: "100%",
    cursor: "pointer"
  };

  const background = {
    backgroundColor: "#0B1B3D",
    width: "100%",
    height: "100vh"
  };

  return (
    <div className="home-container" style={background}>
      <div className="row">
        <div className="column">
          <h1>Pikachu</h1>
          <p>
            the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset .
          </p>
          <button type="button">Explore</button>
        </div>
        <div className="column">
          <div className="card" style={card}>
            <h1>hello</h1>
            <p>
              the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset .
            </p>
          </div>
          <div className="card" style={card}>
            <h1>hello</h1>
            <p>
              the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset .
            </p>
          </div>
          <div className="card" style={card}>
            <h1>hello</h1>
            <p>
              the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset .
            </p>
          </div>
          <div className="card" style={card}>
            <h1>hello</h1>
            <p>
              the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset .
            </p>
          </div>
          <div className="card" style={card}>
            <h1>hello</h1>
            <p>
              the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
