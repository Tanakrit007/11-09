import React, { Component } from 'react'
export default class StateInClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'1',
            name: props.name
        }
    }
    render(){
        return(
            <div>
                <h1>State In Class</h1>
                {this.state.name}

                <button onClick></button>
            </div>
        )
    }
}