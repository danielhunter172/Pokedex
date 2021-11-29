import React, { Component } from 'react';
import './Pokedex.css'
import {Pokemon} from "./Pokemon";

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
            <div className="row">
                <div className="col-4">
                    <div className="scroll card card-body bg-light mt-5">
                        <ul className="list-group">
                            {this.state.pokedex.map(pokemon =>
                                <li className="list-group-item">
                                    <img src={pokemon.imageLink}/>
                                    {pokemon.id}. {pokemon.name}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-body bg-light mt-5">
                                <Pokemon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}
