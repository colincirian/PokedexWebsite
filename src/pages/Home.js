import React from "react";
import { Link } from "react-router-dom";

function Home() {

  // GRAB STYLING ELEMENT FROM INDEX.HTML
  const ignoreStyle = document.querySelector('.poke-container');

  // REMOVE STYLE FROM INDEX.HTML
  ignoreStyle.classList.remove('poke-container');

  const hoverEffect = (event) => {
    event.target.style.backgroundColor = "#FFA500";
    event.target.style.transform = "translateY(-15px)";
  };

  const hoverEffectLeave = (event) => {
    event.target.style.backgroundColor = "transparent";
    event.target.style.transform = "translateY(0)";
  };

  const screen = {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#0B1B3D"
  };

  const boxes = {
    width: "380px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "solid black 4px",
    margin: "1rem",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "transform 0.4s ease"
  };

  const main_container = {
    display: "flex"
  };

  const background_image = {
    backgroundImage: "url('./images/pikachu.jpg')",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw",
    height: "100vh",
    margin: "auto",
    display: "flex",
    
  };

  const anchor = {
    textDecoration: "none",
    fontSize: "30px",
    color: "#0B1B3D",
    position: "abolute"
  };

  const title = {
    position: "absolute",
    margin: "auto",
    fontSize:"38px",
    left: "130px",
    top: "0.5rem",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#0B1B3D"
  };

  return (
    <div>
      <div style={screen}>       
        <h1 style={title}>POKEDEX WEBSITE</h1>
        <div style={background_image}>
          <div id="" style={main_container}>

            <div // POKEDEX PAGE
              id="card-website-link" 
              style={boxes}
              onMouseEnter={hoverEffect} // CALL HOVER EFFECT
              onMouseLeave={hoverEffectLeave} //  CALL HOVER EFFECT LEAVE
              >
              <Link style={anchor} to="/Pokedex">POKEDEX</Link>
            </div>

              <div 
                id="home" 
                style={boxes}
                onMouseEnter={hoverEffect} // CALL HOVER EFFECT
                onMouseLeave={hoverEffectLeave} //  CALL HOVER EFFECT LEAVE
                >
                <a style={anchor} href="https://pokemongolive.com/?hl=en">
                  POKEMON GO
                </a>
              </div>

            <div 
              id="other-link" 
              style={boxes}
              onMouseEnter={hoverEffect} // CALL HOVER EFFECT
              onMouseLeave={hoverEffectLeave} //  CALL HOVER EFFECT LEAVE
              >
              <a style={anchor} href="https://www.pokemon.com/us/pokemon-news">
                LATEST POKEMON NEWS
                </a>
            </div>

            <div 
              id="other-link" 
              style={boxes}
              onMouseEnter={hoverEffect} // CALL HOVER EFFECT
              onMouseLeave={hoverEffectLeave} //  CALL HOVER EFFECT LEAVE
              >
              <a style={anchor} href="https://www.tcgplayer.com/categories/trading-and-collectible-card-games/pokemon?utm_campaign=18098386707&utm_source=google&utm_medium=cpc&utm_content=&utm_term=&adgroupid=&gclid=CjwKCAjwqZSlBhBwEiwAfoZUIEfYtgxVMMYk_VMdTKlCHCdpeEB0IdXmmRLEJo1fp1wKErObJufoIBoC4M4QAvD_BwE">
                PURCHASE CARDS
                </a>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;