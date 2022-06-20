import React, { Component } from 'react'

export class ClickCounter2 extends Component {
    render() {
        const {count, increamentCount} = this.props
    return (
      <div>
        <button onClick={increamentCount}>CLicked {count} times</button>
      </div>
    )
  }
}

export default ClickCounter2