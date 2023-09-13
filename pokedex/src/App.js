import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Pokedex from './containers/Pokedex.js'
import AppNav from './components/AppNav.js'


export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AppNav />} />   
      <Route path ="/" element={<Pokedex/>}/>
      </Routes>
    </Router>


  )
}
