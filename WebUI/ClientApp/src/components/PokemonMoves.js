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

export class PokemonMoves extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return this.props.pokemon.id === undefined ? <span>No Pokemon Selected</span> : (
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
                                        {this.props.slot.move1}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        {this.props.pokemon.moves.map(move => 
                                            <li><span className="dropdown-item" onClick={() => console.log('click')}>{move}</span></li>
                                        )}                                        
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
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {this.props.slot.move2}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        {this.props.pokemon.moves.map(move =>
                                            <li><span className="dropdown-item" onClick={() => console.log('click')}>{move}</span></li>
                                        )}
                                    </ul>
                                </div>
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
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {this.props.slot.move3}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        {this.props.pokemon.moves.map(move =>
                                            <li><span className="dropdown-item" onClick={() => console.log('click')}>{move}</span></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-2 col-4">
                        <div className="card bg-light">
                            <div className="card-header">
                                Move 4
                            </div>
                            <div className="card-body">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {this.props.slot.move4}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        {this.props.pokemon.moves.map(move =>
                                            <li><span className="dropdown-item" onClick={() => console.log('click')}>{move}</span></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}