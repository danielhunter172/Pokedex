import React, {Component} from "react";
import {PokemonList} from "./PokemonList";
import {Team} from "./Team";

export class TeamBuilder extends Component {
    constructor(props) {
        super(props);

        this.addToTeam = this.addToTeam.bind(this);
        this.removeFromTeam = this.removeFromTeam.bind(this);
        
        this.state = { team: [] };
    }
     
    async getTeam(){
        let response = await fetch('https://localhost:7062/api/TeamBuilder');
        let json = await response.json();
        
        this.setState({ team: json });
    }
    
    componentWillMount() {
        let a = this.getTeam();
    }   
    

    async addToTeam(selectedId) {
        console.log(this.state.team.length)
        if (this.state.team.length < 6){
            console.log("aaaa")
            let response = await fetch('https://localhost:7062/api/Pokedex/' + selectedId);
            let json = await response.json();
            
            const pokemon = {
                pokemonID: selectedId,
                name: json.name,
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + selectedId + ".png",
                type1: json.types[0],
                type2: json.types[1],
                move1: 'Select Move',
                move2: 'Select Move',
                move3: 'Select Move',
                move4: 'Select Move',
            }
            console.log(pokemon)
            let post = await fetch('https://localhost:7062/api/TeamBuilder', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(pokemon)
            });

            let a = this.getTeam();
        }
    }
    
    async removeFromTeam(slotId) {
        let response = await fetch('https://localhost:7062/api/TeamBuilder/' + slotId, {
            method: 'DELETE',
        });
        let a = this.getTeam();
    }

    render () {
        return (
            <div className="row">
                <div className="offset-1 col-3">
                    <PokemonList handleClick={this.addToTeam}/>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-light mt-5">
                                <Team team={this.state.team} delete={this.removeFromTeam}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}