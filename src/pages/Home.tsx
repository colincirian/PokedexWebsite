import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const hoverEffect = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    target.style.backgroundColor = "#FFA500";
    target.style.transform = "translateY(-15px)";
  };

  const hoverEffectLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    target.style.backgroundColor = "transparent";
    target.style.transform = "translateY(0)";
  };

  const screen: React.CSSProperties = {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#0B1B3D",
  };

  const boxes: React.CSSProperties = {
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
    transition: "transform 0.4s ease",
  };

  const main_container: React.CSSProperties = {
    display: "flex",
  };

  const background_image: React.CSSProperties = {
    backgroundImage: "url('./images/pikachu.jpg')",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw",
    height: "100vh",
    margin: "auto",
    display: "flex",
  };

  const anchor: React.CSSProperties = {
    textDecoration: "none",
    fontSize: "30px",
    color: "#0B1B3D",
    position: "absolute",
  };

  const title: React.CSSProperties = {
    position: "absolute",
    margin: "auto",
    fontSize: "38px",
    left: "130px",
    top: "0.5rem",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#0B1B3D",
  };

  return (
    <div>
      <div style={screen}>
        <h1 style={title}>POKEDEX WEBSITE</h1>
        <div style={background_image}>
          <div id="" style={main_container}>
            <div
              id="card-website-link"
              style={boxes}
              onMouseEnter={hoverEffect} // CALL HOVER EFFECT
              onMouseLeave={hoverEffectLeave} //  CALL HOVER EFFECT LEAVE
            >
              <Link style={anchor} to="/Pokedex">
                POKEDEX
              </Link>
            </div>

            <div
              id="home"
              style={boxes}
              onMouseEnter={hoverEffect} // CALL HOVER EFFECT
              onMouseLeave={hoverEffectLeave} //  CALL HOVER EFFECT LEAVE
            >
              <a
                style={anchor}
                href="https://pokemongolive.com/?hl=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                POKEMON GO
              </a>
            </div>

            <div
              id="other-link"
              style={boxes}
              onMouseEnter={hoverEffect} // CALL HOVER EFFECT
              onMouseLeave={hoverEffectLeave} //  CALL HOVER EFFECT LEAVE
            >
              <a
                style={anchor}
                href="https://www.pokemon.com/us/pokemon-news"
                rel="noopener noreferrer"
                target="_blank"
              >
                LATEST POKEMON NEWS
              </a>
            </div>

            <div
              id="other-link"
              style={boxes}
              onMouseEnter={hoverEffect} // CALL HOVER EFFECT
              onMouseLeave={hoverEffectLeave} //  CALL HOVER EFFECT LEAVE
            >
              <a
                style={anchor}
                href="https://www.tcgplayer.com/categories/trading-and-collectible-card-games/pokemon?utm_campaign=18098386707&utm_source=google&utm_medium=cpc&utm_content=&utm_term=&adgroupid=&gclid=CjwKCAjwqZSlBhBwEiwAfoZUIEfYtgxVMMYk_VMdTKlCHCdpeEB0IdXmmRLEJo1fp1wKErObJufoIBoC4M4QAvD_BwE"
                rel="noopener noreferrer"
                target="_blank"
              >
                PURCHASE CARDS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
