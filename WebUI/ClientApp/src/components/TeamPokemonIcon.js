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

export class TeamPokemonIcon extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return this.props.pokemon === undefined ? <span>No Pokemon</span> : (
            <div className="row">                
                <div className="col-7">
                    <button onClick={() => this.props.delete(this.props.pokemon.id)}
                                               className="float-start btn btn-sm btn-danger img-circle"
                                               style={{
                                                   fontSize: 8
                                               }}>
                        &#xff38;
                    </button>
                    <img src={this.props.pokemon.image} width="96" height="96"/>
                </div>
                <div className="col-4">
                    <span className="badge badge-pill mr-1"
                          style={{
                              backgroundColor: `#${TYPE_COLORS[this.props.pokemon.type1]}`,
                              color: 'white'
                          }}>
                        {this.props.pokemon.type1}                        
                    </span>
                    {this.props.pokemon.type2 !== undefined ?
                        <span className="badge badge-pill mr-1"
                              style={{
                                  backgroundColor: `#${TYPE_COLORS[this.props.pokemon.type2]}`,
                                  color: 'white'
                              }}>
                        {this.props.pokemon.type2}                        
                        </span> : <div></div>}
                </div>
            </div>
        )
    }
}
