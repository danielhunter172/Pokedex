import React, { Component } from "react";

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

export class Pokemon extends Component {
    constructor(props) {
        super(props);
        
        this.state = { pokemon: [] }
    }
    
    async componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.setState({ pokemon: [] });
            let response = await fetch('https://localhost:7062/api/Pokedex/' + this.props.id);
            let json = await response.json();
            this.setState({ pokemon: json });
            
        }
    }

    render() {
        const {pokemon} = this.state;
        return pokemon.id === undefined ? <span>Loading...</span> : (
            <div>
                <div className="card-header">
                    {this.state.pokemon.id}. {this.state.pokemon.name}
                    <div className="float-end">{this.state.pokemon["types"].map(type => 
                        <span key={type} 
                              className="badge badge-pill mr-1" 
                              style={{
                                  backgroundColor: `#${TYPE_COLORS[type]}`,
                                  color: 'white'
                              }}>
                            {type.toUpperCase()}                        
                        </span>
                    )}
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                            <img src={this.state.pokemon.sprite}/>
                        </div>
                        <div className="col-10">
                            {this.state.pokemon.description}
                        </div>
                    </div>
                    <div>
                        {this.state.pokemon["stats"].map(stat => 
                            <div className="row">
                                <div className="col-2">
                                    <span className="float-end" key={stat}>
                                        {stat.name
                                            .split("-")
                                            .map(word => word[0]
                                                .toUpperCase() + word.substring(1))
                                            .join(" ")}
                                    </span>
                                </div>
                                <div className="col-10">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0"
                                             aria-valuemax="100" style={{width: `${(stat.base_stat / 255) * 100}%`}}>{stat.base_stat}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )        
    }
}