import React from 'react';

function Hello(props){

function ClickMe(){
    alert("Button was clicked");
}

    return(
        <div className = "container">
            <h1>{props.name}, we are inside a Function component</h1>
            <button className = "btn btn-primary" onClick={ClickMe}>Click Me</button>
        </div>
    )
}

export default Hello