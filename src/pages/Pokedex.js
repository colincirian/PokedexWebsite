// Pokedex.js
import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js'
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Home from './Home';

const supabaseUrl = 'https://mpacxgtjfozgyrmvfgso.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_KEY'; // Replace with your Supabase key
const supabase = createClient(supabaseUrl, supabaseKey);

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
      <Home /> {/* Render the Home component for the navigation bar */}
      <h1>Hello, this is the Pokedex</h1>
      <FormControl
        type="text"
        placeholder="Search for Pokemon"
        value={search}
        onChange={handleSearch}
      />
      <Button onClick={handleSearchClick}>Search</Button>
      {pokemon.map((item, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.Picture} />
          <Card.Body>
            <Card.Title>
              {item.Name}, {item.Number}
            </Card.Title>
            <Card.Text>
              Fact: {item.Fact} <br />
              Type: {item.Type} <br />
              Height: {item.Height} <br />
              Weight: {item.Weight} <br />
              Gender: {item.Gender} <br />
              Category: {item.Category} <br />
              Abilities: {item.Abilities} <br />
              Weaknesses: {item.Weaknesses} <br />
              Hit_points: {item.Hit_points} <br />
              Attack: {item.Attack} <br />
              Defense: {item.Defense} <br />
              Special_attack: {item.Special_attack} <br />
              Special_defense: {item.Special_defense} <br />
              Speed: {item.Speed} <br />
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Pokedex;