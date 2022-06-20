import React, { Component } from 'react'
import { UserConsumer } from './userContext'

//Consumer Property of Context

class ContextA extends Component {
  render() {
    return (
      <div>
        ContextA
        <UserConsumer>
            {username=>{
                    return <h1>Hello {username}</h1>
            }}
        </UserConsumer>
    </div>
    )
  }
}

export default ContextA