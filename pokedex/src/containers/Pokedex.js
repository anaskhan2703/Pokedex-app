import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Grid } from '@mui/material'
import axios from 'axios'
import { POKEMON_API_URL, IMAGE_API_URL } from '../config';
import PokemonCard from '../components/PokemonCard';

const h1Style = {
  background: 'red',
  margin: 500,
};

export default function Pokedex() {
  const [PokemonData, setPokemonData] = useState(null)
  useEffect(() => {
    axios.get(POKEMON_API_URL+"?limit=800").then((response) => {
      if(response.status >= 200 && response.status < 300){
        const { results } = response.data
        let newPokemonData = []
        results.forEach((pokemon, index) => {
          index++
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name
          } 
          newPokemonData.push((pokemonObject))
        });
        setPokemonData(newPokemonData)
      }
    })
  }, [])
  return (
    
    <Box>
    {PokemonData ? (
      <Grid container spacing={2}>
  {PokemonData.map((pokemon) => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} image={pokemon.url} />
  ))}
</Grid>

    ) : (
     <CircularProgress style={{marginTop:200}}/>
     )}

    </Box>
  )
}
