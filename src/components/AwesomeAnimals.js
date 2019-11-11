import React from "react";

export default class AwesomeAnimals extends React.Component {
    state = {
        animalsByAwesomeness: [
            "Chicken",
            "Sloth",   
            "Porcupine",
            "Killer Whale",
            "Velociraptor"
        ]
    }

    render () {
        return (
            <ul>
                {
                   //<li> {this.state[0]}</li>
                  //<li>{this.state.animalsByAwesomeness[0]}</li>
                  this.state.animalsByAwesomeness.map((animal, index) => <li>Level {index + 1} : { animal }</li>)

                }
                {
                  [<li>Level 1 : Chicken</li>, <li>Level 2 : Sloth</li>]
                }
            </ul>
        );
    }
}