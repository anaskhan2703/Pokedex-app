import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokedex from './containers/Pokedex.js';
import AppNav from './components/AppNav.js';
import PokemonDetails from './containers/PokemonDetails.js';

export default function App() {
  return (
    <Router>
      <AppNav />
      <Routes>
        <Route exact path="/" element={<Pokedex />} />
        <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}
