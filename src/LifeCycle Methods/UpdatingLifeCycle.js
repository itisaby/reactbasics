//Updating LifeCycle Methods
// static getDerivedStateFromProps(props, state)  - Called when the props of a component change or return null, 
//                                                  THis method is called when component is re rendered and when the state depends on the props of the component
// shouldComponentUpdate(nextProps, nextState) - Dictates whether the component should be updated or not. Used For performance optimization.
//Render() - Only require Method
// getSnapshotBeforeUpdate(prevProps, prevState) - Called before the changes from the virtual DOM are to be reflected in the DOM. Capture Some Information from the DOM 
//                                                  
// componentDidUpdate(prevProps, prevState, snapshot) - Called after the component has been updated.
import React, { Component } from 'react'
import UpdatingLifeCycleB from './UpdatingLifeCycleB'

export class UpdatingLifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: 'Abhyuday',
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycleA componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            firstName: 'John'
        })
    }
    render() {
        console.log("render")
        return (
            <>
                <div>UpdatingLifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <UpdatingLifeCycleB/>
            </>
        )
    }
}

export default UpdatingLifeCycle