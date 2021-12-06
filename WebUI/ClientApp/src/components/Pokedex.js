import React, { Component } from 'react';
import './Pokedex.css'
import {Pokemon} from "./Pokemon";
import {PokemonList} from "./PokemonList";

export class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pokedex: [],
            selectedId: 0
        }
        
        this.changeSelectedPokemon = this.changeSelectedPokemon.bind(this);
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
                <div className="offset-1 col-3">
                    <PokemonList handleClick={this.changeSelectedPokemon}/>
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
