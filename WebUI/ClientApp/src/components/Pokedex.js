import React, { Component } from 'react';
import './Pokedex.css'

export class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = { pokedex: [] }
    }
    static displayName = Pokedex.name;
    
    async getPokedex () {
        let response = await fetch('https://localhost:7062/api/Pokedex');
        let json = await response.json();
        console.log(response);
        console.log(json);
        this.setState({ pokedex: json });
    }
    
    componentWillMount() {
        this.pokedex = this.getPokedex();
    }

    render () {
        return (
            <div className="scroll card card-body bg-light col-2 offset-1 mt-5">
                <ul className="list-group">
                    {this.state.pokedex.map(pokemon => 
                        <li className="list-group-item">
                            <img src={pokemon.imageLink}/>
                            {pokemon.id}. {pokemon.name}
                        </li>
                    )}
                    </ul>
            </div>
        );
    }
}
