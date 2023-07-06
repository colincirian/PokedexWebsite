import React from "react";
import "../App.css";

function Home() {
  const box = {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
  };

  return (
    <div className="root" style={{ backgroundColor: "black", width: "100%", minHeight: "100vh" }}>
      <div className="nav">
        Navbar
      </div>

      <main id="main" className="main">
        <div id="home" style={box}>first link</div>
        <div id="card-website-link" style={box}></div>
        <div id="other-link" style={box}></div>
      </main>
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
