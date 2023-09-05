import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import supabase from "../Services/supabaseClient";
import '../App.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Pokemon {
  Name: string;
  Picture: string;
  // Add other properties as needed
}

interface User {
  id: string;
  // Add other user properties here if needed
}

const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>('');
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange(async (_, session) => {
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
          setTeam(userTeam.map((item: any) => ({
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
      setPokemon(pokemonStats || []); // Use empty array as fallback
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchPokemon(search);
    }
  };

  const handleSearchClick = () => {
    fetchPokemon(search);
  };

  const removeFromTeam = async (pokemon: Pokemon) => {
    try {
      const { error } = await supabase
        .from('team')
        .delete()
        .eq('pokemon_id', pokemon.Name)
        .eq('user_id', currentUser!.id)
        .eq('pokemon_picture', pokemon.Picture);

      if (error) {
        console.error('Error deleting pokemon:', error);
        return;
      }

      setTeam((prevTeam) => prevTeam.filter((item) => item.Name !== pokemon.Name));
    } catch (error) {
      console.error('Error deleting pokemon:', error);
    }
  };

  const isPokemonInTeam = (pokemon: Pokemon) => {
    return team.some((item) => item.Name === pokemon.Name);
  };

  const addToTeam = (pokemon: Pokemon) => {
    if (team.length >= 10) {
      alert('Team is already full!');
      return;
    }
    if (isPokemonInTeam(pokemon)) {
      alert(`${pokemon.Name} is already in the team!`);
      return;
    }
    setTeam((prevTeam) => [...prevTeam, pokemon]);
  };

  const saveTeam = async () => {
    try {
      if (!currentUser) {
        alert('Please log in to add a team');
        return;
      }
      console.log('Team to be saved:', team);

      const { data, error } = await supabase
        .from('team')
        .upsert(
          team.map((pokemon) => ({ user_id: currentUser!.id, pokemon_id: pokemon.Name, pokemon_picture: pokemon.Picture })),
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
      {/* ... Rest of your JSX ... */}
    </div>
  );
}

export default Pokedex;
