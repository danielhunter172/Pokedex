import React, { Component } from 'react';
import './Pokedex.css'
import {Pokemon} from "./Pokemon";

export class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pokedex: [],
            selectedId: 0
        }
    }
    static displayName = Pokedex.name;
    pokemonDiv = <div></div>;
    
    async getPokedex () {
        let response = await fetch('https://localhost:7062/api/Pokedex');
        let json = await response.json();
        this.setState({ pokedex: json });
    }
    
    componentWillMount() {
        this.pokedex = this.getPokedex();
    }
    
    changeSelectedPokemon(id) {
        if (id !== this.state.selectedId)
        {
            this.setState({ selectedId: id });
            this.pokemonDiv = <Pokemon id={this.state.selectedId}/>;
        }
    }

    render () {
        
        
        return (
            <div className="row">
                <div className="col-4">
                    <div className="scroll card card-body bg-light mt-5">
                        <ul className="list-group">
                            {this.state.pokedex.map(pokemon =>
                                <li className="list-group-item">
                                    <button onClick={() => this.changeSelectedPokemon(pokemon.id)}>
                                        <img src={pokemon.imageLink}/>
                                        {pokemon.id}. {pokemon.name}
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-light mt-5">
                                <Pokemon id={this.state.selectedId}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}
