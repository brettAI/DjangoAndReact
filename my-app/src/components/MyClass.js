import React, {Component} from 'react'

class MyClass extends Component{

    render(){
        return (
            <div>
                <h1>Within Class Component, email is {this.props.email}</h1>
                <button className = "btn btn-secondary" onClick={this.props.myclick}>Click Me</button>
            </div>
        )
    }
}

export default MyClass