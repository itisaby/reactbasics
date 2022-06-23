import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
} 

const reducer = (state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return{
                loading: false,
                post: {},
                error: "SOmething's wrong"
            }
        default:
            return state
    }
}

function DataFetchingReducer() {
    const [currentState, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(response=>{
            dispatch({
                type: 'FETCH_SUCCESS', 
                payload: response.data
            })
        })
        .catch(error=>{
            dispatch({
                type: 'FETCH_ERROR'
            })
        })
    }, [])
    
  return (
    <div>
         {
            currentState.loading? 'Loading': currentState.post.title
        }
        {currentState.error? currentState.error: null}
    </div>
  )
}

export default DataFetchingReducer