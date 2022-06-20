import React, { Component } from 'react'
//Adding Higher Order Component to this component
import UpdatedComponent from './withCounter';
class ClickCounter extends Component {
    
  render() {
    const { count, increamentCount } = this.props
    return (
      <div>
        <button onClick={increamentCount}>{this.props.name} CLicked {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)