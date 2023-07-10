import React, { useState, useEffect } from "react";
import supabase from "../Services/supabaseClient";
import '../App.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Pokedex() {
  // State variables
  const [pokemon, setPokemon] = useState([]); // Pokemon data
  const [search, setSearch] = useState(''); // Search term
  const [team, setTeam] = useState([]); // User's team
  const [currentUser, setCurrentUser] = useState(null); // Current user data

  useEffect(() => {
    // Effect for fetching team data and setting current user
    const authListener = supabase.auth.onAuthStateChange(async (_, session) => {
      const user = session?.user;
      setCurrentUser(user ?? null);

      if (user) {
        // Fetch user's team data from Supabase
        const { data: userTeam, error } = await supabase
          .from('team')
          .select('*')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching team:', error);
        } else {
          // Map team data and update the team state
          setTeam(userTeam.map(item => ({
            Name: item.pokemon_id,
            Picture: item.pokemon_picture
          })));
        }
      } else {
        setTeam([]);
      }
    });

    return () => {
      // Cleanup function for unsubscribing from auth listener
      if (authListener) {
        authListener.data.unsubscribe();
      }
    };
  }, []);

  const fetchPokemon = async (searchTerm) => {
    console.log("Fetching Pokemon with term: ", searchTerm);
    let { data: pokemonStats, error } = await supabase
      .from('pokemon_stats')
      .select('*')
      .ilike('Name', `%${searchTerm}%`);
    if (error) {
      console.log("Data fetch error: ", error);
    } else {
      console.log("Fetched data: ", pokemonStats);
      setPokemon(pokemonStats);
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.keyCode === 13) {
      // Fetch Pokemon when Enter key is pressed
      fetchPokemon(event.target.value);
    }
  };

  const handleSearchClick = () => {
    // Fetch Pokemon when search button is clicked
    fetchPokemon(search);
  };

  const removeFromTeam = async (pokemon) => {
    try {
      // Delete the Pokemon from the user's team in Supabase
      const { error } = await supabase
        .from('team')
        .delete()
        .eq('pokemon_id', pokemon.Name)
        .eq('user_id', currentUser.id)
        .eq('pokemon_picture', pokemon.Picture);

      if (error) {
        console.error('Error deleting pokemon:', error);
        return;
      }

      // Update the team state by filtering out the removed Pokemon
      setTeam((prevTeam) => prevTeam.filter((item) => item.Name !== pokemon.Name));
    } catch (error) {
      console.error('Error deleting pokemon:', error);
    }
  };

  const isPokemonInTeam = (pokemon) => {
    // Check if a given Pokemon is in the user's team
    return team.some((item) => item.Name === pokemon.Name);
  };

  const addToTeam = (pokemon) => {
    if (team.length >= 10) {
      alert('Team is already full!');
      return;
    }
    if (isPokemonInTeam(pokemon)) {
      alert(`${pokemon.Name} is already in the team!`);
      return;
    }
    // Add the Pokemon to the team state
    setTeam((prevTeam) => [...prevTeam, pokemon]);
  };

  const saveTeam = async () => {
    try {
      if (!currentUser) {
        alert('Please log in to add a team');
        return;
      }
      console.log('Team to be saved:', team);

      // Upsert the team data into the "team" table in Supabase
      const { data, error } = await supabase
        .from('team')
        .upsert(
          team.map((pokemon) => ({ user_id: currentUser.id, pokemon_id: pokemon.Name, pokemon_picture: pokemon.Picture })),
          { onConflict: ['user_id', 'pokemon_id', 'pokemon_picture'] }
        );

      if (error) {
        console.error('Error saving team:', error);
        return;
      }

      console.log('Team saved:', data);
      alert('Team saved successfully!');
    } catch (error) {
      console.error('Error saving team:', error.message);
    }
  };

  return (
    <div className="pokedex-container">
      <Navbar />
      <h1 className="pokedex-heading" style={{ fontSize: '32px', color: '#fff', textAlign: 'center', padding: '20px' }}>Pokedex</h1>
      <div className="pokedex-image-container">
        <img
          src="https://e0.pxfuel.com/wallpapers/1023/397/desktop-wallpaper-pokemon-pokedex-background.jpg"
          alt="Pokedex"
          className="pokedex-image"
        />
        <div className="pokedex-pokemon-container">
          {pokemon.map((pokemon, index) => (
            <div key={index} className="pokedex-pokemon-card">
              <img src={pokemon.Picture} alt={pokemon.Name} />
            </div>
          ))}
        </div>
      </div>
      <div className="search-bar">
        <input
          className="form-control me-2 search-input"
          type="text"
          placeholder="Search Pokemon..."
          value={search}
          onChange={handleSearch}
          onKeyDown={handleSearch}
        />
        <button className="btn btn-outline-success search-button" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="team-container">
        <h2 className="team-heading" style={{ fontSize: '32px', color: '#fff', textAlign: 'center', padding: '20px' }}>Team</h2>
        <div className="team-pokemon">
          <button onClick={saveTeam} disabled={team.length === 0} style={{ fontSize: '32px', color: '#f62d2f', backgroundColor: '#36b64a', textAlign: 'center', padding: '20px' }}>
            Save Team
          </button>

          {team.map((pokemon, index) => (
            <div key={index} className="team-pokemon-card">
              <img src={pokemon.Picture} alt={pokemon.Name} />
              <div>
                <h3>{pokemon.Name}</h3>
                <button onClick={() => removeFromTeam(pokemon)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="search-results-container">
      <h2 className="search-results-heading" style={{ fontSize: '32px', color: '#fff', textAlign: 'center', padding: '20px' }}>Search Results</h2>
        <div className="search-results-pokemon">
          {pokemon.map((pokemon, index) => (
            <div key={index} className="search-results-pokemon-card">
              <div>
                <h3>{pokemon.Name}</h3>
                <p>
                  Number: {pokemon.Number} <br />
                  Fact: {pokemon.Fact} <br />
                  Type: {pokemon.Type} <br />
                  Height: {pokemon.Height} <br />
                  Weight: {pokemon.Weight} <br />
                  Gender: {pokemon.Gender} <br />
                  Category: {pokemon.Category} <br />
                  Abilities: {pokemon.Abilities} <br />
                  Weaknesses: {pokemon.Weaknesses} <br />
                  Hit Points: {pokemon.Hit_Points} <br /> 
                  Attack: {pokemon.Attack} <br />
                  Defense: {pokemon.Defense} <br />
                  Special Attack: {pokemon.Special_Attack} <br />   
                  Special Defense: {pokemon.Special_Defense} <br /> 
                </p>
                <button
                  onClick={() => addToTeam(pokemon)}
                  disabled={isPokemonInTeam(pokemon) || team.length >= 10}
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
