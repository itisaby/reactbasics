import React, { Component } from 'react'
//Adding Higher Order Component to this component
import UpdatedComponent from './withCounter';

class HoverCounter extends Component {
  render() {
    const {count, increamentCount} = this.props
    return (
      <div>
        <h2 onMouseOver={increamentCount}> Hovered {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter);