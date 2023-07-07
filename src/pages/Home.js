import React from "react";
import Navbar from "./Navbar";
import "../App.css";

function Home() {
  const container = {
    // backgroundColor: "#0B1B3D",
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
    <div>
     <Navbar />
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
            <a href="https://www.tcgplayer.com/categories/trading-and-collectible-card-games/pokemon?utm_campaign=18098386707&utm_source=google&utm_medium=cpc&utm_content=&utm_term=&adgroupid=&gclid=CjwKCAjwqZSlBhBwEiwAfoZUIEfYtgxVMMYk_VMdTKlCHCdpeEB0IdXmmRLEJo1fp1wKErObJufoIBoC4M4QAvD_BwE" style={cardStyle}>
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
              The leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
