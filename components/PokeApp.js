/*
 *  Module dependencies
 */

import React from 'react';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';

export default class PokeApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
    this.onGrowl = this.onGrowl.bind(this);
  }

  onGrowl(name) {
    let message = `${name}, ${name}`;
    let messages = this.state.messages;
    messages.push({ text: message });
    this.setState({ messages: messages });
  }

  render() {
    const pokemons = [
      { number: 1, name: 'Bulbasaur' },
      { number: 2, name: 'Ivysaur' },
      { number: 3, name: 'Venesaur' }
    ];

    return <div className="pokeapp">
      <PokeTable pokemons={pokemons} onGrowl={this.onGrowl}/>
      <PokeChat messages={this.state.messages}/>
    </div>;
  }
}