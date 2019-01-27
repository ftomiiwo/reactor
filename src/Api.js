import React, {Component} from 'react';

class App extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Elon+Musk&format=json&origin=*";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const {data} = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>;
        });
        
        // const lists = result => {
        //     return <ul>{result}</ul>;
        // }
        return <ul>{result}</ul>;
        // return (
        //     <div>{lists}</div>
        // );
    }
}

export default App