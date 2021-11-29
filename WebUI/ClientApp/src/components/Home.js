import React, { Component } from 'react';
import {Pokedex} from "./Pokedex";

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <Pokedex/>
      </div>
    );
  }
}
