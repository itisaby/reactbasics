import React, { Component } from 'react'

export class ElementVariables extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true,
      }
    }
  render() {
    let message;
    if(this.state.isLoggedIn){
        message = <div>Welcome User</div>
    }else{
        message = <div>Login Guest</div>
    }
    return (
      <div>{message}</div>
    )
  }
}

export default ElementVariables