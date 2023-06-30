import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function Pokedex() {
    const [pokemonName, setPokemonName] = useState("")
    const [pokemon, setPokemon] = useState({})

    const searchPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
            (response) => {
                setPokemonName({
                    name: pokemonName, 
                    species: response.data.species.name,
                    img: response.data.sprites.front_default,
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat, 
                    defense: response.data.stats[2].base_stat,
                    type: response.data.types[0].type.name,
                })
            }
        );
    };



return(
    <div className="App">
        <div className="TitleSection">
            <h1>This is the Pokedex</h1>
                <input type="text" onChange={(event) => 
                    {setPokemonName(event.target.value);
            }}
            />
            <button onClick={searchPokemon}>Search Pokemon</button>
         </div>
         <div>
            
         </div>
    </div>
);
  
}

export default Pokedex;