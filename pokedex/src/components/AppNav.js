import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import PokeballIcon from './pokeball.svg'; 


const appBarStyle = {
    background: 'black',
    position: 'fixed',
    
};
const LinkStyle ={
    textDecoration: 'none',
};
const titleStyle ={
    cursor: 'pointer',
    color: 'white',
    variant: 'h6',
}
const pokeballStyle={
}

export default function AppNav() {
  
  return (
    <AppBar position="fixed" style={appBarStyle}>
      <Toolbar>
        <img src={PokeballIcon} style={pokeballStyle} alt="Pokeball" />
         <Link to="/" style={LinkStyle}>
          <Typography style={titleStyle}>Pokédex</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
