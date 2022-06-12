import React, { Component } from 'react'

export class BasicBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello world"
      }
      //part of 3rd approach of binding an event handler not of 4th approach as in 4th approach it doesn't need this included in the constructor
        this.clickHandler = this.clickHandler.bind(this) //bind click handler to the class instance itself so that it can be used in the event handler 
    }
    clickHandler(){
        this.setState(
            {
                message: "Welcome to React"
            }
        )
        console.log(this)  //it's undefined as this is a method and not a function

    }
    //part of 4th way of binding an event handler
    //
    clickHandler1 = () => {
        this.setState(
            {
                message: "Welcome to React"
            }
        )
        console.log(this)  //it's undefined as this is a method and not a function
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={
            // this.clickHandler //this is'undefined' as this is a method and not a function
            //1st way around
            this.clickHandler.bind(this) //with event handlers, we need to bind the this keyword to the function
        }> THis button</button>
        <button onClick={
            ()=>{
                //2nd way to bind event handlers
                this.clickHandler();   //this has some performance issues
            }
        }>This</button>
        <button onClick={
            //3rd way to bind event handlers and events are handled in the constructor of the class and not in the render method    
            //better way to bind event handlers
            this.clickHandler
        }>CLick 3 </button>
        <button
            onClick={
                //4th way
                this.clickHandler1
            }
        >CLick 4 </button>
      </div>
    )
  }
}

export default BasicBinding