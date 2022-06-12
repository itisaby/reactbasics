import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent',
      }
      this.greetParent = this.greetParent.bind(this)
    }
    //passing functions as a props to the child component
    // greetParent(){
    //     // alert('Hello' + this.state.parentName)
    //     alert(`Hello ${this.state.parentName}`)  // ES6 template literals
    // }
    // passing function as a prop and then in the child component we pass the parameter to the parent component
    greetParent(childName){
        alert('Hello ' + this.state.parentName + ' from ' + childName)
    }
  render() {
    return (
      <div>
        {/* We Want the child component to call the parent component's function */}
        So we pass the method as props to the child component
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent