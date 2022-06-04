import React, { Component } from 'react'

export class StateBasic extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor'
        }
    }
    handleSubmit() {
        this.setState({
            message: 'Welcome to React'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={()=>
                    this.handleSubmit()
                }>
                    Click Me
                </button>
            </div>
        )
    }
}
