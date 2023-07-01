import React from "react";
// import { Link } from "react-router-dom";

function Home() {
  const container = {
    backgroundColor: "white",
    color: "white",
    fontSize: "25px",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  };

  const box = {
    backgroundColor: "blue",
    width: "200px",
    height: "350px",
    margin: "1rem"
  };

  return (
    <div className="homepage" style={container}>
      <div className="box" style={box}/>
      <div className="box" style={box}/>
      <div className="box" style={box}/>
      <div className="box" style={box}/>
      <div className="box" style={box}/>
      <div className="box" style={box}/>
      <div className="box" style={box}/>
    </div>
  )};

export default Home;
