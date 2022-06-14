import React, { Component } from 'react'

export class ControlledComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         Comment: "",
         Topics: "react",
      }
    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleChangeComment = (event) => {
        this.setState({
            Comment: event.target.value
        })
    }
    handleChangeTopics = (event) => {
        this.setState({
            Topics: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert("Your name is " + this.state.name + " and your comment is " + this.state.Comment + " and your topic is " + this.state.Topics)
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <h2>Controlled Components</h2>
        <br/>
        Form Handling
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea type="text" value={this.state.Comment} onChange={this.handleChangeComment}></textarea>
            </div>
            <div>
                <label>Topics</label>
                <select value = {this.state.Topics} onChange={this.handleChangeTopics}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button type="submit" >Submit</button>
        </form>
    </div>
    )
  }
}

export default ControlledComponents