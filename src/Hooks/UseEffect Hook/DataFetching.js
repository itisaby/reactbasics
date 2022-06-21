import React from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts, setPosts] = React.useState([])
    const [id, setId] = React.useState(1)
    React.useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res =>{ 
                console.log(res)
                setPosts(res.data)
            }).catch(err =>{
                console.log(err)
            }
            )
    }, [])

  return (
    <div>
        <ul>
            {
                posts.map(post => 
                    <li key={post.id}>{post.title}</li>
                )
            }
        </ul>
    </div>
  )
}

export default DataFetching