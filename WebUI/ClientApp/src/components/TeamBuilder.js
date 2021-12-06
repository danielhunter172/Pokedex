import React, {Component} from "react";
import {PokemonList} from "./PokemonList";
import {Team} from "./Team";

export class TeamBuilder extends Component {
    constructor(props) {
        super(props);
        
        this.addToTeam = this.addToTeam.bind(this);
    }
    
    addToTeam(id) {
        
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
                                <Team/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}