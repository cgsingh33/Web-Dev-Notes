import React, { Component } from 'react'

class App extends Component{
    constructor(){
        super()
        this.state={
            isLogin:false
        }
        this.changeState=this.changeState.bind(this)
    }
    changeState(){
        this.setState((prevState) =>{
            return(
                {isLogin: !prevState.isLogin}
            )
        })
    }
    render() {
        let btntext= this.state.isLogin ? "logedIN" : "logedOUT"
        let text= this.state.isLogin ? "LogedOUT":"LogedIN"
        console.log("user has "+this.state.isLogin+" login")
        return (
            <div>
                <button onClick={this.changeState}>{btntext}</button>
                <h1>You are currently {text}</h1>
            </div>
        )
    }
}

export default App