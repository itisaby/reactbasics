import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

//LifeCycle Methods
// Mounting - When an instance of a component is created and inserted into the Dom
// Updating - When an instance of a component is being re-rendered as a result of changes to either its props or state
// Unmounting - When an instance of a component is removed from the Dom
// Error Handling - When an error occurs during rendering , in a lifecycle method, or in the constructor of any child component


//Mounting Lifecycle Methods - Constructor, static getDerivedStateFromProps, render, componentDidMount()
class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "Arnab",
        }
        console.log("LifeCycleA - Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA - getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycleA - componentDidMount")
    }
    render() {
        console.log("LifeCycleA - render")
        return (
            <>
                <div>lifecycleA </div>
                <LifeCycleB />
            </>

        )
    }
}

export default LifeCycle