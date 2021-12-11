import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { Pokedex } from './components/Pokedex';
import { TeamBuilder } from './components/TeamBuilder';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <div>
          <Route exact path='/' component={Pokedex} />
          <Route exact path='/teambuilder' component={TeamBuilder} />
        </div>
    );
  }
}
