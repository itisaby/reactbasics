import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchingDatauseReducer() {
    //here we are doing with using useState and useEffect
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false)
            setPost(response.data)
            setError("")
        })
        .catch(error=>{
            setLoading(false)
            setPost({})
            setError("Something's wrong")
        })
    },[])
  return (
    <div>
        {
            loading? 'Loading': post.title
        }
        {error? error: null}
    </div>
  )
}

export default FetchingDatauseReducer