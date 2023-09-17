import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom'


const cardStyle ={
  cursor: 'pointer',
  backgroundColor: '#aaa9ad',
  "&:hover" : {
    backgroundColor: "rgb(90 , 90, 90)",  } 
} 
const cardMediaStyle = {
  margin: 'auto',
  cursor: 'pointer',
  width: 130,
  height: 130,
};
const cardContentStyle={
  textAlign: "center",
}
const linkStyle={
  textDecoration: "none",
}

export default function PokemonCard(props) {
  const { pokemon, image } = props;
  const { id, name } = pokemon;

  return (
    <Grid item xs={12} sm={2}>
      <Link style={linkStyle} to={"/pokemon/" + id}>
      <Card sx={cardStyle}>
        <CardMedia sx={cardMediaStyle} image={image}></CardMedia>
        <CardContent sx={cardContentStyle}>
          <Typography sx={cardContentStyle}>{name}</Typography>
        </CardContent>
      </Card>
      </Link>
    </Grid>
  );
}
