import React, { useState } from "react";
import supabase from "../Services/supabaseClient";
import Navbar from "./Navbar";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  const fetchPokemon = async (searchTerm) => {
    console.log("Fetching Pokemon with term: ", searchTerm);
    let { data: pokemon_stats, error } = await supabase
      .from('pokemon_stats')
      .select('*')
      .ilike('Name', `%${searchTerm}%`);
    if (error) {
      console.log("Data fetch error: ", error);
    } else {
      console.log("Fetched data: ", pokemon_stats);
      setPokemon(pokemon_stats);
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    fetchPokemon(search);
  };

    return (
        <div>
            <Navbar />
            <h1>Hello this is the Pokedex</h1>
            <input
                type="text" 
                placeholder="Search for Pokemon" 
                value={search} 
                onChange={handleSearch}
            />
            <button onClick={handleSearchClick}>Search</button>
            {pokemon.map((item, index) => 
                <div key={index} style={{ width: '18rem' }}>
                    <img src={item.Picture} alt={item.Name} />
                    <div>
                        <h2>{item.Name}</h2>
                        <p>
                            Number: {item.Number} <br/>
                            Fact: {item.Fact} <br/>
                            Type: {item.Type} <br/>
                            Height: {item.Height} <br/>
                            Weight: {item.Weight} <br/>
                            Gender: {item.Gender} <br/>
                            Category: {item.Category} <br/>
                            Abilities: {item.Abilities} <br/>
                            Weaknesses: {item.Weaknesses} <br/>
                            Hit_points: {item.Hit_points} <br/>
                            Attack: {item.Attack} <br/>
                            Defense: {item.Defense} <br/>
                            Special_attack: {item.Special_attack} <br/>
                            Special_defense: {item.Special_defense} <br/>
                            Speed: {item.Speed} <br/>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Pokedex;