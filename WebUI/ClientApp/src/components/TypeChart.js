import React, {Component} from "react";

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
const TYPES = [
    'normal', 
    'fire', 
    'water', 
    'electric', 
    'grass',
    'ice', 
    'fighting', 
    'poison', 
    'ground', 
    'flying', 
    'psychic', 
    'bug', 
    'rock', 
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy'
]
const TYPE_EFFECT = {
    normal: {
        rock: 0.5,
        ghost: 0,
        steel: 0.5
    },
    fire: {
        fire: 0.5,
        water: 0.5,
        grass: 2,
        ice: 2,
        bug: 2,
        rock: 0.5,
        dragon: 0.5,
        steel: 2,
    },
    water: {
        fire: 2,
        water: 0.5,
        grass: 0.5,
        ground: 2,
        rock: 2,
        dragon: 0.5,
    },
    electric: {
        water: 2,
        electric: 0.5,
        grass: 0.5,
        ground: 0,
        flying: 2,
        dragon: 0.5,
    },
    grass: {
        fire: 0.5,
        water: 2,
        grass: 0.5,
        poison: 0.5,
        ground: 2,
        flying: 0.5,
        bug: 0.5,
        rock: 2,
        dragon: 0.5,
        steel: 0.5
    },
    ice: {
        fire: 0.5,
        water: 0.5,
        grass: 2,
        ice: 0.5,
        ground: 2,
        flying: 2,
        dragon: 2,
        steel: 0.5
    },
    fighting: {
        normal: 2,
        ice: 2,
        poison: 0.5,
        flying: 0.5,
        psychic: 0.5,
        bug: 0.5,
        rock: 2,
        ghost: 0,
        dark: 2,
        steel: 2,
        fairy: 2
    },
    poison: {
        grass: 2,
        poison: 0.5,
        ground: 0.5,
        rock: 0.5,
        ghost: 0.5,
        steel: 0,
        fairy: 2
    },
    ground: {
        fire: 2,
        electric: 2,
        grass: 0.5,
        poison: 2,
        flying: 0,
        bug: 0.5,
        rock: 2,
        steel: 2
    },
    flying: {
        electric: 0.5,
        grass: 2,
        fighting: 2,
        bug: 2,
        rock: 0.5,
        steel: 0.5
    },
    psychic: {
        fighting: 2,
        poison: 2,
        psychic: 0.5,
        dark: 0,
        steel: 0.5
    },
    bug: {
        fire: 0.5,
        grass: 2,
        fighting: 0.5,
        poison: 0.5,
        flying: 0.5,
        psychic: 2,
        ghost: 0.5,
        dark: 2,
        steel: 0.5,
        fairy: 0.5
    },
    rock: {
        fire: 2,
        ice: 2,
        fighting: 0.5,
        ground: 0.5,
        flying: 2,
        bug: 2,
        steel: 0.5
    },
    ghost: {
        normal: 0,
        psychic: 2,
        ghost: 2,
        dark: 0.5
    },
    dragon: {
        dragon: 2,
        steel: 0.5,
        fairy: 0
    },
    dark: {
        fighting: 0.5,
        psychic: 2,
        ghost: 2,
        dark: 0.5,
        fairy: 0.5
    },
    steel: {
        fire: 0.5,
        water: 0.5,
        electric: 0.5,
        ice: 2,
        rock: 2,
        steel: 0.5,
        fairy: 2
    },
    fairy: {
        fire: 0.5,
        fighting: 2,
        poison: 0.5,
        dragon: 2,
        dark: 2,
        steel: 0.5
    }
}
const TYPE_EFFECT_COLORS = {
    0: 'black',
    0.25: 'darkred',
    0.5: 'red',
    1: 'gray',
    2: 'green',
    4: 'darkgreen'
}

export class TypeChart extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return this.props.team.length === 0 ? <span>Loading...</span> : (
            <div className="row">
                <h3 className="text-center">Type Chart</h3>
                <hr className="border"/>
                <div className="row">
                    <div className="col-10 offset-2">
                        <div className="row">
                            {this.props.team.map(pokemon => 
                                <div className="col-2">
                                    <div className="card card-body bg-light">
                                        <img src={pokemon.image} style={{width: '100%', height: '100%'}}/>
                                        <div className="col6">
                                            <span key={pokemon.type1}
                                                  className="badge mr-1"
                                                  style={{
                                                      width: '100%',
                                                      backgroundColor: `#${TYPE_COLORS[pokemon.type1]}`,
                                                      color: 'white'
                                                  }}>{pokemon.type1}</span>
                                        </div>
                                        <div className="col6">
                                            {pokemon.type2 === undefined ? <div></div> : <span key={pokemon.type2}
                                                   className="badge mr-1"
                                                   style={{
                                                       width: '100%',
                                                       backgroundColor: `#${TYPE_COLORS[pokemon.type2]}`,
                                                       color: 'white'
                                                   }}>{pokemon.type2}</span>}
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        {TYPES.map(type => <span key={type}
                                                 className="badge mr-1"
                                                 style={{
                                                     width: '100%',
                                                     backgroundColor: `#${TYPE_COLORS[type]}`,
                                                     color: 'white'
                                                 }}>{type.toUpperCase()}</span>)}
                    </div>
                    <div className="col-10">
                        <div className="row">
                            {this.props.team.map(pokemon =>
                                <div className="col-2">
                                    {TYPES.map(type => {
                                        let typeEffect1 = TYPE_EFFECT[type][pokemon.type1] === undefined ? 1 : TYPE_EFFECT[type][pokemon.type1]
                                        let typeEffect2 = pokemon.type2 === undefined ? 1 : (TYPE_EFFECT[type][pokemon.type2] === undefined ? 1 : TYPE_EFFECT[type][pokemon.type2])

                                        let typeEffect = typeEffect1 * typeEffect2;
                                        
                                        return <span key={type}
                                                     className="badge mr-1"
                                                     style={{
                                                         width: '100%',
                                                         backgroundColor: TYPE_EFFECT_COLORS[typeEffect],
                                                         color: 'white'
                                                     }}>{typeEffect}</span>
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}