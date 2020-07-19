import React, { Component } from 'react'
import FormComponent from './FormComponent'
class Form extends Component{

    constructor(){
        super()
        this.state={
            fname:"",
            lname:"",
            age:"",
            gender:"",
            destination:"",
            isvegi:false,
            iskosher:false,
            islocto:false
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked}= event.target
        type==="checkbox" ? this.setState({[name]: checked}) : this.setState({[name]:value})
    }

    render(){
        return(
            <FormComponent 
            handleChange={this.handleChange}
            data={this.state}
            />
        )
    }
}

export default Form