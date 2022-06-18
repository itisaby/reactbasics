import React, { Component } from 'react'

//Regular Component - IT does not implement shouldComponentUpdate. It always returns true by default

 class RegularComp extends Component {
  render() {
    console.log("RegularComp Rendered")
    return (
      <div>RegularComp {this.props.name}
      </div>
    )
  }
}

export default RegularComp