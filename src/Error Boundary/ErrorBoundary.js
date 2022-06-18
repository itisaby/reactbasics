import React, { Component } from 'react'

//Error Boundary are React Components that catch errors in their children and display a fallback UI instead of the children.

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        hasError: false
      }
    }
    static getDerivedStateFromError(error) {
        return { 
            hasError: true
         }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary