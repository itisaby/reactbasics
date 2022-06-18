import React, { Component } from 'react'

//LifeCycle Methods
// Mounting - When an instance of a component is created and inserted into the Dom
// Updating - When an instance of a component is being re-rendered as a result of changes to either its props or state
// Unmounting - When an instance of a component is removed from the Dom
// Error Handling - When an error occurs during rendering , in a lifecycle method, or in the constructor of any child component


//Mounting Lifecycle Methods - Constructor, static getDerivedStateFromProps, render, componentDidMount()
class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: "Arnab",
      }
      console.log("LifeCycleB - Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB - getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycleB - componentDidMount")
    }
  render() {
    console.log("LifeCycleB - render")
    return (
      <div>LifeCycleB </div>
    )
  }
}

export default LifeCycleB