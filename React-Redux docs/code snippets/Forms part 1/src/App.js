import React, { Component } from 'react'

class App extends Component{
    constructor(){
        super()
        this.state={
            fname:"",
            lname:""
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                <input type="text" value={this.state.fname} name="fname" placeholder="first name" onChange={this.handleChange} />
                <br />
                <input type="text" value={this.state.lname} name="lname" placeholder="last name" onChange={this.handleChange} />
                <h1>{this.state.fname} {this.state.lname} </h1>
            </form>
        )
    }
}

export default App