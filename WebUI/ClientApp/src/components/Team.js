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

    render() {
        return (
            <div>
                <div className="row">
                    <div className="row">
                        <div className="col-4">
                            <div className="card card-body bg-light" onClick={() => this.props.select(this.props.team[0].pokemonId, this.props.team[0].id)}>
                                <TeamPokemonIcon pokemon={this.props.team[0]} delete={this.props.delete}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card card-body bg-light" onClick={() => this.props.select(this.props.team[1].pokemonId, this.props.team[1].id)}>
                                <TeamPokemonIcon pokemon={this.props.team[1]} delete={this.props.delete}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card card-body bg-light" onClick={() => this.props.select(this.props.team[2].pokemonId, this.props.team[2].id)}>
                                <TeamPokemonIcon pokemon={this.props.team[2]} delete={this.props.delete}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card card-body bg-light" onClick={() => this.props.select(this.props.team[3].pokemonId, this.props.team[3].id)}>
                                <TeamPokemonIcon pokemon={this.props.team[3]} delete={this.props.delete}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card card-body bg-light" onClick={() => this.props.select(this.props.team[4].pokemonId, this.props.team[4].id)}>
                                <TeamPokemonIcon pokemon={this.props.team[4]} delete={this.props.delete}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card card-body bg-light" onClick={() => this.props.select(this.props.team[5].pokemonId, this.props.team[5].id)}>
                                <TeamPokemonIcon pokemon={this.props.team[5]} delete={this.props.delete}/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border"/>
                
            </div>
        )
    }
}