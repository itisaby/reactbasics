import React from 'react'
import { useReducer } from 'react'

//UseReducer using Objects and Actions

const initialState = {
    //handling multiple states
    firstCounter: 0,
    secondCOunter: 10,
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'increament':
            return {...state, firstCounter: state.firstCounter+action.value}
        case 'increament2':
            return {...state, secondCOunter: state.secondCOunter+action.value}
        case 'decreament':
            if(state.firstCounter>0){
                return {...state, firstCounter: state.firstCounter-action.value}
            }
        case 'decreament2':
            if(state.secondCOunter>0){
                return {...state, secondCOunter: state.secondCOunter-action.value}
            }
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ReducerCounter() {
    const[count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Counter 1 - {count.firstCounter}</div>
        <div>Counter 2 - {count.secondCOunter}</div>
        <button onClick={()=>dispatch({type: 'increament', value:1})}>Increament</button>
        <button onClick={()=>dispatch({type: 'increament2', value:1})}>Increament ct2</button>
        <button onClick={()=>dispatch({type: 'increament', value:5})}>Increament 5</button>
        <button onClick={()=>dispatch({type: 'decreament', value:1})}>Decreament</button>
        <button onClick={()=>dispatch({type: 'decreament2', value:1})}>Decreament ct2</button>
        <button onClick={()=>dispatch({type: 'decreament', value:5})}>Decreament 5</button>
        <button onClick={()=>dispatch({type: 'reset', value:1})}>Reset</button>
    </div>
  )
}

export default ReducerCounter