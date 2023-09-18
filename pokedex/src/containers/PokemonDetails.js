import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { POKEMON_API_URL } from '../config';
import { useParams } from 'react-router-dom';
import { CircularProgress, Box, Typography, Grid, Button } from '@mui/material';
import { Favorite } from '@mui/icons-material';

const containerStyle ={
  height: '84vh',
  backgroundColor: 'grey',
  color: "white",
  marginTop: "75px",
  textAlign: "center",
  borderRadius: 5,
  paddingTop: "30px",
}
const titleStyle ={
  textTransform: 'uppercase', // Change to 'uppercase' to fix the typo
  fontFamily: "Fantasy", // Change to 'Fantasy' to fix the typo
}
const imageStyle={
  width: "170px",
  height: "170px",
}
const infoStyle={
  bottom: "60px",
  position: "absolute",
  width: "100%",
  height: 200,
}
const lineStyle={
  height: "0.01mm",
  width: "95%",
}
const buttonStyle={
  height: "50px",
  width: "100px",
  marginTop: "15px",
}
const nameStyle={
  fontSize: "30px"
}

export default function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(POKEMON_API_URL + id)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data);
            setPokemon(response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  return (
    <div>
      {pokemon ? (
        <Box sx={containerStyle}>
          <Typography variant="h1" style={titleStyle}>
            {pokemon.name}
          </Typography>
          <img style={imageStyle} src={pokemon.sprites.front_default} alt={`${pokemon.name} sprite`} />
          <img style={imageStyle} src={pokemon.sprites.back_default} alt={`${pokemon.name} sprite`} />
          <img style={imageStyle} src={pokemon.sprites.front_shiny} alt={`${pokemon.name} shiny sprite`} />
          <img style={imageStyle} src={pokemon.sprites.back_shiny} alt={`${pokemon.name} shiny sprite`} />
          <Box sx={infoStyle}>
            <hr style={lineStyle} />
            <Grid container>
              <Grid item md={1}>
                <Button style={buttonStyle}>
                  <Favorite style={{ color: "white", fontSize: 50 }} />
                </Button>
              </Grid>
              <Grid item md={2}>
                <Typography style={nameStyle}>
                  Name
                  <br />
                  {pokemon.name}
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography style={nameStyle}>
                  Height
                  <br />
                  {pokemon.height}m
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography style={nameStyle}>
                  Weight
                  <br />
                  {pokemon.weight}kg
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography style={nameStyle}>
                  Type
                  <br />
                  {pokemon.types.map((pokemonType, index) => (
                    <span key={pokemonType.type.name}>
                      {index !== 0 ? ' / ' : ''}
                      {pokemonType.type.name}
                    </span>
                  ))}
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography style={nameStyle}>
                  Ability
                  <br />
                  {pokemon.abilities.map((pokemonAbility, index) => (
                    <span key={pokemonAbility.ability.name}>
                      {index !== 0 ? ' / ' : ''}
                      {pokemonAbility.ability.name}
                    </span>
                  ))}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
