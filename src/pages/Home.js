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
    backgroundColor: "#FFFFFF",
    padding: "20px",
    margin: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer"
  };

  const cardHoverStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={container}>
      <div className="card" style={{cardStyle, cardHoverStyle}}>
        <h1>hello</h1>
        <p>
          The leap into electronic typesetting, remaining essentially
          unchanged. It was popularized in the 1960s with the release of
          Letraset.
        </p>
      </div>

      <div className="card" style={cardStyle}>
        <h1>hello</h1>
        <p>
          The leap into electronic typesetting, remaining essentially
          unchanged. It was popularized in the 1960s with the release of
          Letraset.
        </p>
      </div>

      <div className="card" style={cardStyle}>
        <h1>hello</h1>
        <p>
          The leap into electronic typesetting, remaining essentially
          unchanged. It was popularized in the 1960s with the release of
          Letraset.
        </p>
      </div>

      <div className="card" style={cardStyle}>
        <h1>hello</h1>
        <p>
          The leap into electronic typesetting, remaining essentially
          unchanged. It was popularized in the 1960s with the release of
          Letraset.
        </p>
      </div>
    </div>
  );
}


export default Home;
