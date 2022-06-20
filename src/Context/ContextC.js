import React, { Component } from 'react'
import ContextB from './ContextB'

class ContextC extends Component {
  render() {
    return (
      <div>ContextC
        <ContextB/>
      </div>
    )
  }
}

export default ContextC