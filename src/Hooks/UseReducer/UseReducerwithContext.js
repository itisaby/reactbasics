// useReducer - Local state management
// share state between components - Global state management
// useReducer + useContext
import React, { createContext, useReducer } from 'react'
import ReducerComA from './ReducerComA'
import ReducerComB from './ReducerComB'
import ReducerComC from './ReducerComC'

export const CountCOntext = createContext()

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

function UseReducerwithContext() {
    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountCOntext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div>
        Count - {count}
        <ReducerComA/>
        <ReducerComB/>
        <ReducerComC/>
    </div>
    </CountCOntext.Provider>
  )
}

export default UseReducerwithContext