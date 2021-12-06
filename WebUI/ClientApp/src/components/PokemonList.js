import React, {Component} from "react";

export class PokemonList extends Component {
    constructor(props) {
        super(props);
        
        this.state = { pokedex: [] }
    }

    async getPokedex () {
        let response = await fetch('https://localhost:7062/api/Pokedex');
        let json = await response.json();
        this.setState({ pokedex: json });
    }

    componentWillMount() {
        this.pokedex = this.getPokedex();
    }
    
    render() {
        return(
            <div className="scroll card card-body bg-light mt-5">
                <ul className="list-group">
                    {this.state.pokedex.map(pokemon =>
                        <li className="list-group-item">
                            <button onClick={() => this.props.handleClick(pokemon.id)} style={{width: '100%'}}>
                                <img src={pokemon.imageLink}/>
                                {pokemon.id}. {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}