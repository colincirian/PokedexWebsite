import React, { useState, ChangeEvent } from "react";
import supabase from '../Services/supabaseClient';
import Navbar from "./Navbar";

interface Pokemon {
  Name: string;
  Picture: string;
  Number: number;
  Fact: string;
  Type: string;
  Height: string;
  Weight: string;
  Gender: string;
  Category: string;
  Abilities: string;
  Weaknesses: string;
  Hit_points: number;
  Attack: number;
  Defense: number;
  Special_attack: number;
  Special_defense: number;
  Speed: number;
}

function Pokedex() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>('');
  const [team, setTeam] = useState<Pokemon[]>([]);

  const fetchPokemon = async (searchTerm: string) => {
    console.log("Fetching Pokemon with term: ", searchTerm);
    let { data: pokemonStats, error } = await supabase
      .from('pokemon_stats')
      .select('*')
      .ilike('Name', `%${searchTerm}%`);
    if (error) {
      console.log("Data fetch error: ", error);
    } else {
      console.log("Fetched data: ", pokemonStats);
      setPokemon(pokemonStats as Pokemon[]);
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    fetchPokemon(search);
  };

  const removeFromTeam = (pokemonToRemove: Pokemon) => {
    setTeam((prevTeam) => prevTeam.filter((item) => item !== pokemonToRemove));
  };

  const isPokemonInTeam = (pokemonToCheck: Pokemon) => {
    return team.some((item) => item.Name === pokemonToCheck.Name);
  };

  const addToTeam = (pokemonToAdd: Pokemon) => {
    if (team.length >= 6) {
      alert('Team is already full!');
      return;
    }
    if (isPokemonInTeam(pokemonToAdd)) {
      alert(`${pokemonToAdd.Name} is already in the team!`);
      return;
    }
    setTeam((prevTeam) => [...prevTeam, pokemonToAdd]);
  };

  return (
    <div className="pokedex-container">
      <Navbar />
      <h1 className="pokedex-heading">Pokedex</h1>
      <div className="pokedex-image-container">
        <img
          src="https://e0.pxfuel.com/wallpapers/1023/397/desktop-wallpaper-pokemon-pokedex-background.jpg"
          alt="Pokedex"
          className="pokedex-image"
        />
        <div className="pokedex-pokemon-container">
          {pokemon.map((pokemonItem, index) => (
            <div key={index} className="pokedex-pokemon-card">
              <img src={pokemonItem.Picture} alt={pokemonItem.Name} />
            </div>
          ))}
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Pokemon"
          value={search}
          onChange={handleSearch}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div className="team-container">
        <h2 className="team-heading">Team</h2>
        <div className="team-pokemon">
          {team.map((teamPokemon, index) => (
            <div key={index} className="team-pokemon-card">
              <img src={teamPokemon.Picture} alt={teamPokemon.Name} />
              <div>
                <h3>{teamPokemon.Name}</h3>
                <button onClick={() => removeFromTeam(teamPokemon)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="search-results-container">
        <h2 className="search-results-heading">Search Results</h2>
        <div className="search-results-pokemon">
          {pokemon.map((pokemonResult, index) => (
            <div key={index} className="search-results-pokemon-card">
              
              <div>
                <h3>{pokemonResult.Name}</h3>
                <p>
                  Number: {pokemonResult.Number} <br />
                  Fact: {pokemonResult.Fact} <br />
                  Type: {pokemonResult.Type} <br />
                  Height: {pokemonResult.Height} <br />
                  Weight: {pokemonResult.Weight} <br />
                  Gender: {pokemonResult.Gender} <br />
                  Category: {pokemonResult.Category} <br />
                  Abilities: {pokemonResult.Abilities} <br />
                  Weaknesses: {pokemonResult.Weaknesses} <br />
                  Hit Points: {pokemonResult.Hit_points} <br />
                  Attack: {pokemonResult.Attack} <br />
                  Defense: {pokemonResult.Defense} <br />
                  Special Attack: {pokemonResult.Special_attack} <br />
                  Special Defense: {pokemonResult.Special_defense} <br />
                  Speed: {pokemonResult.Speed} <br />
                </p>
                <button
                  onClick={() => addToTeam(pokemonResult)}
                  disabled={isPokemonInTeam(pokemonResult) || team.length >= 6}
                >
                  Add to Team
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
