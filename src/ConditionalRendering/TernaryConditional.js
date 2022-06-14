import React, { Component } from 'react'

export class TernaryConditional extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,
        }
    }
    render() {
        return (
            this.state.isLoggedIn ? (<div>Welcome User</div>) : (<div>Login Guest</div>)
        )
    }
}

export default TernaryConditional