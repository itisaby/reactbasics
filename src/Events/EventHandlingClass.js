import React, { Component } from 'react'

class EventHandlingClass extends Component {
    clickHandler() {
        alert('You clicked me , its a great day');
    }
  render() {
    return (
      <>
        <button onClick = {
            this.clickHandler
        }>Click the button</button>
      </>
    )
  }
}

export default EventHandlingClass