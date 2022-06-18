import React, { Component } from 'react'

 class UpdatingLifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
      }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycleB componentDidUpdate')
    }
  render() {
    console.log("render")
    return (
      <div>UpdatingLifeCycleB</div>
    )
  }
}

export default UpdatingLifeCycleB