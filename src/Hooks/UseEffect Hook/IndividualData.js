import React, { useEffect, useState } from 'react'
import axios from 'axios'
function IndividualData() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [buttonClick, setButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>{
                console.log(res)
                setPosts(res.data)
            }).catch(err=>{
                console.log(err)
            })  
    }, [buttonClick])

    const handleClick = () => {
        setButtonClick(id)
    }


  return (
    <div>
        <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} /> 
        <button onClick={handleClick}>Fetch Post</button>
        <ul>
            <li>{posts.title}</li>
            <li>{posts.body}</li>
        </ul>
    </div>
  )
}

export default IndividualData