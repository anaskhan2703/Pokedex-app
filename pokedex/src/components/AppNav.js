import React from 'react';
import { AppBar, Toolbar, Typography, Link, SvgIcon } from '@mui/material';
import PokeballIcon from './pokeball.svg'; 


const appBarStyle = {
    background: 'black',
    position: 'fixed',
    variant: 'h6',
};
const LinkStyle ={
    textDecoration: 'none',
};
const titleStyle ={
    cursor: 'pointer',
    color: 'white',
}

export default function AppNav() {
  
  return (
    <AppBar position="fixed" style={appBarStyle}>
      <Toolbar>
        <img src={PokeballIcon} alt="Pokeball" />
         <Link to="/" style={LinkStyle}>
          <Typography style={titleStyle}>Pokédex</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
