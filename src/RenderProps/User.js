import React, { Component } from 'react'
//Render Props - > It refers to the term "render props" refers to a technique for sharing code between react 
//                  components using a prop whose value is a function.
class User extends Component {
  render() {
    return (
      <div>
        {this.props.render(true)}
      </div>
    )
  }
}

export default User