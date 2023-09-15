import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const cardMediaStyle = {
  margin: 'auto',
  cursor: 'pointer',
  width: 130,
  height: 130,
};

export default function PokemonCard(props) {
  const { pokemon, image } = props;
  const { id, name } = pokemon;

  return (
    <Grid item xs={12} sm={2}>
      <Card>
        <CardMedia sx={cardMediaStyle} image={image}></CardMedia>
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
