import React, { Component } from 'react'
import ContextC from './ContextC'
import { UserProvider } from './userContext'

//Steps to use Context:
// 1. Create a context object.
// 2. Provide a Context Value.
// 3. Consume the Context Value.

export class ContextBasics extends Component {
    render() {
        return (
            <div>
                <h1>ContextBasics</h1>
                <UserProvider value="Arnab">
                    <ContextC />
                </UserProvider>
            </div>
        )
    }
}

export default ContextBasics