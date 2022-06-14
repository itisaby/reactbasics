import React, { Component } from 'react'

export class ConditionBasic extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return (
            <div>
              HI THere 
              <div>
                Welcome User
              </div>
          </div>
        )
    }
    else{
        return (
            <div>
              HI There
              <div>
                Please Login Guest
                </div>
            </div>
        )

    }
  }
}

export default ConditionBasic