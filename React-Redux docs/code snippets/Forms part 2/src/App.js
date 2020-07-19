import React, { Component } from 'react'

class App extends Component{
    constructor(){
        super()
        this.state={
            fname:"",
            lname:"",
            gender:"",
            favcolor:"blue",
            isFriendly: true
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]:checked }) : this.setState({ [name]: value })
    } 

    render(){
        return(
            <form>
                <input type="text" value={this.state.fname} name="fname" placeholder="first name" onChange={this.handleChange} />
                <br />

                <input type="text" value={this.state.lname} name="lname" placeholder="last name" onChange={this.handleChange} />
                <br />
                
                <textarea value={"hello"}/>
                <br />
                
                <label>
                <input type="checkbox" 
                name="isFriendly"
                checked={this.state.isFriendly}
                onChange={this.handleChange} />Is Friendly
                </label>
                <br />
                
                <label>
                <input type="radio" 
                name="gender"
                value="male"
                checked={this.state.gender==="male"}
                onChange={this.handleChange} />Male
                </label>
                <br />
                
                <label>
                <input type="radio" 
                name="gender"
                value="female"
                checked={this.state.gender==="female"}
                onChange={this.handleChange} />Female
                </label>
                <br />

                <label>Favorite color: </label>
                <select value={this.state.favColor}
                onChange={this.handleChange}
                name="favColor">
                
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="black">black</option>
                </select>


                <h1>{this.state.fname} {this.state.lname} </h1>
                <h2> You are {this.state.gender}</h2>
                <h3>Your Fav color is {this.state.favColor}</h3>
            </form>
        )
    }
}

export default App