import React, {Component} from "react";
import {PokemonList} from "./PokemonList";

export class TeamBuilder extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="row">
                <div className="offset-1 col-3">
                    <PokemonList/>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-light mt-5">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}