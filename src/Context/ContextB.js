import React, { Component } from 'react'
import ContextA from './ContextA'
import UserContext from './userContext'

class ContextB extends Component {
    static contextType = UserContext;
    render() {
    return (
      <div>
        ContextB
        {this.context}
        <ContextA/>
      </div>
    )
  }
}

export default ContextB