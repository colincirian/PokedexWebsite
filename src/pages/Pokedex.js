import React, { useState, useEffect } from "react";
import supabase from "./Services/supabaseClient";
import '../App.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [team, setTeam] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
      const user = session?.user;
      setCurrentUser(user ?? null);

      if (user) {
        const { data: userTeam, error } = await supabase
          .from('team')
          .select('*')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching team:', error);
        } else {
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
      if (authListener && typeof authListener.unsubscribe === 'function') {
        authListener.unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('team', JSON.stringify(team));
  }, [team]);

  const fetchPokemon = async (searchTerm) => {
    console.log("Fetching Pokemon with term: ", searchTerm);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      const data = await response.json();
      console.log("Fetched data: ", data);
      setPokemon([data]);
    } catch (error) {
      console.log("Data fetch error: ", error);
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.keyCode === 13) {
      fetchPokemon(event.target.value);
    }
};

  const handleSearchClick = () => {
    fetchPokemon(search);
  };

  const removeFromTeam = async (pokemon) => {
    try {
      const { error } = await supabase
        .from('team')
        .delete()
        .eq('pokemon_id', pokemon.Name)
        .eq('user_id', currentUser.id)
        .eq('pokemon_picture', pokemon.Picture)
        
      if (error) {
        console.error('Error deleting pokemon:', error);
        return;
      }
  
      setTeam((prevTeam) => prevTeam.filter((item) => item.Name !== pokemon.Name));
      alert('Pokemon successfully removed from the team.');
    } catch (error) {
      console.error('Error deleting pokemon:', error);
    }
  };

  const isPokemonInTeam = (pokemon) => {
    return team.some((item) => item.name === pokemon.name);
  };

  const addToTeam = (pokemon) => {
    if (team.length >= 10) {
      alert('Team is already full!');
      return;
    }
    if (isPokemonInTeam(pokemon)) {
      alert(`${pokemon.name} is already in the team!`);
      return;
    }
    setTeam((prevTeam) => [...prevTeam, pokemon]);
  };

  const saveTeam = async () => {
    if (!currentUser) {
      alert('Please login to save the team!');
      return;
    }

    try {
        if (!currentUser) {
           alert('Please log in to add a team');
           return;
         }
      console.log('Team to be saved:', team);
  
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

  const getPokemonImage = (pokemon) => {
    if (!pokemon) return '';
    const spriteUrl = pokemon.sprites?.front_default;
    return spriteUrl || '';
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
          {pokemon.map((pokemon, index) => (
            <div key={index} className="pokedex-pokemon-card">
              <img src={getPokemonImage(pokemon)} alt={pokemon.name} />
              <div>
                <h3>{pokemon.name}</h3>
                <p>
                  Number: {pokemon.id} <br />
                  Type: {pokemon.types.map((type) => type.type.name).join(', ')} <br />
                  Height: {pokemon.height} <br />
                  Weight: {pokemon.weight} <br />
                  Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')} <br />
                  Base Experience: {pokemon.base_experience} <br />
                  Stats: <br />
                  {pokemon.stats.map((stat) => (
                    <span key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat} <br />
                    </span>
                  ))}
                </p>
                {currentUser && (
                  <button
                    onClick={() => addToTeam(pokemon)}
                    disabled={isPokemonInTeam(pokemon) || team.length >= 10}
                  >
                    Add to Team
                  </button>
                )}
              </div>
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
        <h2 className="team-heading">Team</h2>
        <div className="team-pokemon">
          <button onClick={saveTeam} disabled={team.length === 0} style={{ fontSize: '32px', color: '#f62d2f', backgroundColor: '#36b64a', textAlign: 'center', padding: '20px' }}>
            Save Team
          </button>

          {team.map((pokemon, index) => (
            <div key={index} className="team-pokemon-card">
              <img src={getPokemonImage(pokemon)} alt={pokemon.name} />
              <div>
                <h3>{pokemon.name}</h3>
                <button onClick={() => removeFromTeam(pokemon)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="search-results-container">
        <h2 className="search-results-heading">Search Results</h2>
        <div className="search-results-pokemon">
          {pokemon.map((pokemon, index) => (
            <div key={index} className="search-results-pokemon-card">
              <div>
                <h3>{pokemon.name}</h3>
                <p>
                  Number: {pokemon.id} <br />
                  Type: {pokemon.types.map((type) => type.type.name).join(', ')} <br />
                  Height: {pokemon.height} <br />
                  Weight: {pokemon.weight} <br />
                  Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')} <br />
                  Base Experience: {pokemon.base_experience} <br />
                  Stats: <br />
                  {pokemon.stats.map((stat) => (
                    <span key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat} <br />
                    </span>
                  ))}
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
      {currentUser && (
        <div className="saved-cards-container">
          <h2 className="saved-cards-heading">Saved Team</h2>
          <div className="saved-cards-pokemon">
            {team.map((pokemon, index) => (
              <div key={index} className="saved-cards-pokemon-card">
                <img src={getPokemonImage(pokemon)} alt={pokemon.name} />
                <div>
                  <h3>{pokemon.name}</h3>
                  <button onClick={() => removeFromTeam(pokemon)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokedex;