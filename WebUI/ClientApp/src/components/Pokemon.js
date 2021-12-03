import React, { Component } from "react";

export class Pokemon extends Component {
    constructor(props) {
        super(props);
        
        this.state = { pokemon: [] }
    }
    
    async componentDidMount() {
        let response = await fetch('https://localhost:7062/api/Pokedex/1');
        let json = await response.json();
        this.setState({ pokemon: json });
        console.log(this.state.pokemon);
    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}