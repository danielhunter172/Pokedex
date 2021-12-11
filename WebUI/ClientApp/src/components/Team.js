import React, {Component} from "react";
import {TeamPokemonIcon} from "./TeamPokemonIcon";

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
};

export class Team extends Component {
    constructor(props) {
        super(props);
        
        this.state = { selectedPokemon: [] }
    }
    
    async getPokemon (id) {
        if (id !== this.state.selectedPokemon.ID) {
            let response = await fetch('https://localhost:7062/api/Pokedex/' + this.props.id);
            let json = await response.json();
            this.setState({ selectedPokemon: json });            
        }
    }
    
    render() {        
        return (
            <div>
                <div className="row">
                    <div className="row">
                        <div className="col-4">
                            <div className="card card-body bg-light">
                                <TeamPokemonIcon pokemon={this.props.team[0]} delete={this.props.delete}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card card-body bg-light">
                                <TeamPokemonIcon pokemon={this.props.team[1]} delete={this.props.delete}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card card-body bg-light">
                                <TeamPokemonIcon pokemon={this.props.team[2]} delete={this.props.delete}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card card-body bg-light">
                                <TeamPokemonIcon pokemon={this.props.team[3]} delete={this.props.delete}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card card-body bg-light">
                                <TeamPokemonIcon pokemon={this.props.team[4]} delete={this.props.delete}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card card-body bg-light">
                                <TeamPokemonIcon pokemon={this.props.team[5]} delete={this.props.delete}/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border"/>
                <div className="row">
                    <h3 className="text-center">Moves</h3>
                    <hr className="border"/>
                    <div className="row">
                        <div className="offset-1 col-4">
                            <div className="card bg-light">
                                <div className="card-header">
                                    Move 1
                                </div>
                                <div className="card-body">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><span className="dropdown-item" onClick={() => console.log('click')}>Action</span></li>
                                            <li><span className="dropdown-item" href="#">Another action</span></li>
                                            <li><span className="dropdown-item" href="#">Something else here</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-2 col-4">
                            <div className="card bg-light">
                                <div className="card-header">
                                    Move 2
                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border"/>
                    <div className="row">
                        <div className="offset-1 col-4">
                            <div className="card bg-light">
                                <div className="card-header">
                                    Move 3
                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                        <div className="offset-2 col-4">
                            <div className="card bg-light">
                                <div className="card-header">
                                    Move 4
                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}