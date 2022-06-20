import React, { Component } from 'react'

export class HoverCounter2 extends Component {
  render() {
    const {count, increamentCount} = this.props;
    return (
      <div>
        <h1 onMouseOver={increamentCount}>Hover {count} times</h1>
      </div>
    )
  }
}

export default HoverCounter2