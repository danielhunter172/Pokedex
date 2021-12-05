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
        console.log(pokemon.gender_rate);
        return pokemon.id === undefined ? <span>Loading...</span> : (
            <div>
                <div className="card-header">
                    {pokemon.id}. {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                    <div className="float-end">{pokemon["types"].map(type => 
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
                            <img src={pokemon.sprite}/>
                        </div>
                        <div className="col-10">
                            {pokemon.description}
                        </div>
                    </div>
                    <div>
                        {pokemon.stats.map(stat => 
                            <div className="row">
                                <div className="col-2">
                                    <span className="float-end" key={stat}>
                                        {stat.name.split("-")
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
                    <div className="row">
                        <h3 className="text-center">Profile</h3>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="float-end">Height:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-start">{pokemon.height}m</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="float-end">Weight:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-start">{pokemon.weight}kg</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="float-end">Catch Rate:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-start">{pokemon.capture_rate}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="float-end">Growth Rate:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-start">
                                        {pokemon.growth_rate
                                            .split("-")
                                            .map(word => word[0]
                                                .toUpperCase() + word.substring(1))
                                            .join(" ")}
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="float-end">Egg Groups:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-start">
                                        {pokemon.egg_groups.map(group => 
                                            group
                                                .toLowerCase()
                                                .split(' ')
                                                .map(s => s[0].toUpperCase() + s.substring(1))
                                                .join(' '))
                                            .join(', ')}
                                    </h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="float-end">Ablilities:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-start">
                                        {pokemon.abilities.map(group =>
                                            group
                                                .toLowerCase()
                                                .split('-')
                                                .map(s => s[0].toUpperCase() + s.substring(1))
                                                .join(' '))
                                            .join(', ')}
                                    </h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="float-end">Base Experience:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-start">{pokemon.base_experience}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="float-end">Gender Ratio</h6>
                                </div>
                                <div className="col-6">
                                    <div className="progress">
                                        <div className="progress-bar"
                                             role="progressbar"
                                             style={{
                                                 width: `${pokemon.gender_rate}%`,
                                                 backgroundColor: '#c2185b'
                                             }}
                                             aria-valuenow="25"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <small>{pokemon.gender_rate}%</small>
                                        </div>
                                        <div className="progress-bar"
                                                   role="progressbar"
                                                   style={{
                                                       width: `${100 - pokemon.gender_rate}%`,
                                                       backgroundColor: '#1976d2'
                                                   }}
                                                   aria-valuenow="25"
                                                   aria-valuemin="0"
                                                   aria-valuemax="100">
                                        <small>{100 - pokemon.gender_rate}%</small>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )        
    }
}