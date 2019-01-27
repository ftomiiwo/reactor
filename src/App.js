import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends React.Component {
   
    state = {
        characters: []
    };

    removeCharacter = index => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        })
    }

    editCharacter = index => {
        const {characters} = this.state; 
        this.initialState = {
            name: characters[0].name,
            job: characters[0].job
        }; 

        this.state = this.initialState;
    }

    handleSubmit = character => { 
        this.setState({characters: [...this.state.characters, character]})
    }
    render() {
        
        return (
            <div  className="container"> 
                <Table 
                    characterData={this.state.characters} 
                    editCharacter={this.editCharacter}
                    removeCharacter = {this.removeCharacter}
                    />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
 
export default App;
