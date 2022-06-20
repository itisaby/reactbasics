import React, { Component } from 'react'
import axios from 'axios'
// creating a get request to the url
class AxiosBasics extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: ""
      }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                posts: response.data
            })
        }).catch(error => {
            console.log(error);
            this.setState({
                error: error.message
            })
        }
        )
    }
  render() {
    const {posts, error} = this.state;
    return (
      <div>
        List of Posts
        {   posts.length?
            posts.map(post => {
                return <div key={post.id}>{post.title}</div>}
            ) : null
        }
        {error? <div>{error}</div> : null}
      </div>
    )
  }
}

export default AxiosBasics