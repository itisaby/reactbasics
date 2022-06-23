// useReducer is a hook that is used for state management, alternative to useState 
// useState is built using useReducer
// useReducer - reducers 
// reduce method takes two parameters -> 1. Reducer Function, 2. Initial Value  -> useReducer(reducer, initialState), reducer(currentState, action)
// reducer takes two values and return one value 
// reduce in JS                                    vs                  UseReducer in React
// array.reduce(reducer, initialValue)                      useReducer(reducer, initialState)
// singleValue = reducer(accumulator, itemValue)            newState = reducer(currentState, action)
// reduce method returns a single value                     useReducer returns a pair of values. [newState, dispatch]
import React from 'react'
import { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increament':
            return state+1
        case 'decreament':
            if(state>0){
                return state-1
            }
        case 'reset':
            return initialState
        default:
            return state
    }
}
function UseReducerBasics() {

    const[count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={()=>dispatch('increament')}>Increament</button>
        <button onClick={()=>dispatch('decreament')}>Decreament</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerBasics