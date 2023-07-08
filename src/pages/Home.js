import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {

  const anchorClickEvent = () => {
    console.log("element clicked!");
  };

  const screen = {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#FFA500"
  };

  const boxes = {
    width: "400px",
    height: "400px",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "solid white 4px",
    margin: "1rem",
    color: "white",
    fontSize: "20px",
    cursor: "pointer"
  };

  const main_container = {
    display: "flex"
  };

  const background_image = {
    backgroundImage: "url('./images/pikachu.jpg",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw",
    height: "100vh",
    margin: "auto",
    display: "flex",
    borderRadius: "1.5rem"
  }

  const anchor = {
    textDecoration: "none",
    color: "white",
    fontSize: "30px",
    color: "black",
    position: "relative"
  };

  const title = {
    position: "absolute",
    margin: "auto",
    fontSize: "50px"
  };

  return (
      <div style={screen}>
        <h1 style={title}>POKEMON CARD WEBSITE</h1>
        <div style={background_image}>
          <div id="main" style={main_container}>

            <div id="card-website-link" style={boxes}>
              <Link style={anchor} to="/Pokedex">POKEDEX</Link>
            </div>

            <div id="home" style={boxes}>
              <a style={anchor} href="https://pokemongolive.com/?hl=en">
                POKEMON GO
              </a>
            </div>

            <div id="other-link" style={boxes}>
              <a style={anchor} href="https://www.pokemon.com/us/pokemon-news">
                LATEST POKEMON NEWS
                </a>
            </div>

            <div id="other-link" style={boxes}>
              <a style={anchor} href="https://www.tcgplayer.com/categories/trading-and-collectible-card-games/pokemon?utm_campaign=18098386707&utm_source=google&utm_medium=cpc&utm_content=&utm_term=&adgroupid=&gclid=CjwKCAjwqZSlBhBwEiwAfoZUIEfYtgxVMMYk_VMdTKlCHCdpeEB0IdXmmRLEJo1fp1wKErObJufoIBoC4M4QAvD_BwE">
                PURCHASE CARDS
                </a>
              </div>

          </div>
        </div>
      </div>
  );
}

export default Home;

//     <div>
//       <Navbar />
//       <div className="homepage" style={container}>
//         <div>
//             <h1 style={h1}>CATCH THOSE MFS</h1>
//             <a href="https://pokemongolive.com/?hl=en" style={cardStyle}>
//               <img src="./images/pokemonGo.jpg" alt="pokemon-go" style={img} />
//             </a>
//           </div>

//           <div>
//             <h1>starter pack</h1>
//             <a
//               href="https://www.tcgplayer.com/categories/trading-and-collectible-card-games/pokemon?utm_campaign=18098386707&utm_source=google&utm_medium=cpc&utm_content=&utm_term=&adgroupid=&gclid=CjwKCAjwqZSlBhBwEiwAfoZUIEfYtgxVMMYk_VMdTKlCHCdpeEB0IdXmmRLEJo1fp1wKErObJufoIBoC4M4QAvD_BwE"
//               style={cardStyle}
//             >
//               <img src="./images/cards.jpg" alt="pokemon-go" style={img} />
//             </a>
//           </div>

//         <div>
//           <h1>CATCH THOSE MFS</h1>
//           <a
//             href="https://www.bmwusa.com/vehicles/m-models/m3-sedan/build-your-own.html"
//             style={cardStyle}
//           >
//             <img src="./images/pokemonGo.jpg" alt="pokemon-go" style={img} />
//           </a>
//           <h1>CATCH THOSE MFS</h1>
//           <a href="https://pokemongolive.com/?hl=en" style={cardStyle}>
//             <img src="./images/pokemonGo.jpg" alt="pokemon-go" style={img} />
//           </a>
//         </div>

//       </div>
//     </div>
//   );
// }
