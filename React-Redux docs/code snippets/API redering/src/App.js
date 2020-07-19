import React, { Component } from 'react'

class App extends Component{
    constructor(){
        super()
        this.state={
            loading: false,
            character:{}
        }
    }
    componentDidMount(){
        fetch("http://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data =>{
            this.setState({
                loading: true,
                character:data
            })
        })
        
    }

    render(){
        console.log(this.state.character)
        return(
            <div>
            {this.state.loading ? <h1>{this.state.character.name}</h1> : <h1>loading...</h1>}
                
            </div>
        )
    }
}

export default App