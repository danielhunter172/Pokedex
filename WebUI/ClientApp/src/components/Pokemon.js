import React, { Component } from "react";

export class Pokemon extends Component {
    constructor(props) {
        super(props);
        
        this.state = { pokemon: [] }
    }
    
    async componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            let response = await fetch('https://localhost:7062/api/Pokedex/' + this.props.id);
            let json = await response.json();
            this.setState({ pokemon: json });
            console.log(this.state.pokemon);
        }
    }

    render() {
        return(
            <div>
                <img src={this.state.pokemon["sprite"]}/>
            </div>
        )
    }
}