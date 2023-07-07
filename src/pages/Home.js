import React, {useState, useEffect} from "react";
import "../App.css";

function Home() {

  const anchorClickEvent = () => {
    console.log("element clicked!");
  };

  const screen = {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#020036",
    margin: "auto",
    padding: "0",
  };

  const boxes = {
    width: "200px",
    height: "50px",
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    margin: "0"
  };

  const background_image = {
    backgroundImage: "url('./images/pikachu.jpg",
    width: "90%",
    height: "90vh",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    display: "flex"
  }

  const anchor = {
    textDecoration: "none",
    color: "white",
  };
  

  return (
      <div style={screen}>
        <div style={background_image}>
          <main id="main" style={main_container}>
                <div id="home" style={boxes}>
                  <a style={anchor} href="https://pokemongolive.com/?hl=en">Pokedex</a>
                  </div>

                <div id="card-website-link" style={boxes}>Card Sets</div>

                <div id="other-link" style={boxes}>
                  <a style={anchor} href=""></a>
                </div>

                <div id="other-link" style={boxes}>hello</div>
          </main>
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
