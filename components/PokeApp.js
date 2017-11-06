/*
 *  Module dependencies
 */

import uid from 'uid';
import React from 'react';
import $ from 'jquery';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';

export default class PokeApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      pokemons: []
    };
    this.onGrowl = this.onGrowl.bind(this);
  }

  componentWillMount() {
    $.get('/api/pokemons', (pokemons) => {
      this.setState({ pokemons: pokemons });
    });
  }

  onGrowl(name) {
    let text = `${name}, ${name}`;
    let messages = this.state.messages;
    let message = { id: uid(), text: text };
    messages.push(message);
    this.setState({ messages: messages });
  }

  render() {
    if(this.state.pokemons.length){
      return <div className="pokeapp">
        <PokeTable pokemons={this.state.pokemons} onGrowl={this.onGrowl}/>
        <PokeChat messages={this.state.messages}/>
      </div>;
    }
    return <p>Cargando... </p>;
  }
}