import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    increament(){
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
        this.setState({
            count: this.state.count + 1 //  this.state.count = this.state.count + 1
        }, ()=>{
            console.log("callback value ", this.state.count);
        });
        console.log(this.state.count);
    }
    increament1(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }), ()=>{});
    }
    decreament(){
        if(this.state.count < 0){
            this.setState({
                count: 0
            });
        }
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            });
        }
    }
    reset() {
        this.setState({
            count: 0
        });
    }
    increament4() {
        this.increament1()
        this.increament1()
        this.increament1()
        this.increament1()
    }
  render() {
    return (
      <div>
          Count: {this.state.count}
          <br/>
          <button onClick={()=> this.increament()}> + </button>
          <br/>
          <button onClick={()=> this.decreament()}> - </button>
          <br/>
          <button onClick={()=> this.reset()}>Reset</button>
          <br/>
          <button onClick={()=> this.increament4()}> +4 </button>

      </div>
    )
  }
}

export default Counter