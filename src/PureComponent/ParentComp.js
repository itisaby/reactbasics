import React, { Component, PureComponent } from 'react'
import MemoComp from '../Memo/MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

// if it is made a pure component, it will not render again and again as it will check the previous and the current state and props and if they are same, it will not render again

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Arnab',
      }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Arnab' 
            })
        }, 2000)
    }
  render() {
    console.log('ParentComp Rendered')
    return (
      <div>ParentComp
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name}/>
        {/* using memo in functional component */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp