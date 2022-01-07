import React, {Component} from 'react';

class Name extends Component{
    constructor(){
        super()
        this.state = {
            name:"Brett"
        }
    }

    clickedMe() {
        this.setState({
            //name:'Changed Text'
            name:this.state.name === "Brett" ? "admin" : "Brett"
        })
    }
    alertMe(){
        alert('Hi');
    }

    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button className = "btn btn-primary" onClick = {this.alertMe} >Change Text</button>
                <button className = "btn btn-primary" onClick = {() => this.clickedMe()}>Change Text</button>
                
            </div>
        )
    }
}

export default Name;