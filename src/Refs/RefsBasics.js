import React, { Component } from 'react'

export class RefsBasics extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef();
        //another way
        this.cbref = null;
        this.setCbRef= (element) => {
            this.cbref = element;
        }
    }
    componentDidMount() {
        //first way

        // this.inputRef.current.focus();
        // console.log(this.inputRef)

        //other way
        if(this.cbref){
            this.cbref.focus();
        }
    }
    clickhandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onCLick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default RefsBasics