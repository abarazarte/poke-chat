/*
 *  Module dependencies
 */

 import React from 'react'
 import PokeTable from './components/PokeTable'

 const pokemons = [
   { number: 1, name: 'Bulbasaur' },
   { number: 2, name: 'Ivysaur' },
   { number: 3, name: 'Venesaur' }
 ]

 React.render(
   <PokeTable pokemons={pokemons}/>,
   document.getElementById('container')
 )