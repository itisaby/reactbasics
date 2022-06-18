import React, { PureComponent } from 'react'

//Pure Component - it implements shouldComponentUpdate with a shallow comparison of the current props and state.
//Shallow Comparison -> Primitive Types - a (SC) b returns true if a and b have same value and are of the same type
//                  -> Complex Types - a (SC) b returns true if a and b have the same reference , reference the same object 
//                                     ex - var a = [1, 2, 3]; var b = [1, 2, 3]; var c = a ;  a (SC) b returns false, a (SC) c returns true
//                                     ex - var a = {name: 'Arnab'}; var b = {name: 'Arnab'}; var c = a ;  a (SC) b returns false, a (SC) c returns true


class PureComp extends PureComponent {
  render() {
    console.log('PureComp Rendered')
    return (
      <div>PureComponent {this.props.name}
      </div>
    )
  }
}

export default PureComp