import React, { Component } from 'react';

export class Pokedex extends Component {
    static displayName = Pokedex.name;
    
    async getPokedex () {
        let response = await fetch('https://localhost:7062/api/Pokedex');
        let json = await response.json();
        console.log(response);
        console.log(json);
    }
    
    render () {
        return (
            <div>
                <button onClick={this.getPokedex}>Get</button>
            </div>
        );
    }
}
