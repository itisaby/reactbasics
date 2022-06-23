import React, { useContext } from 'react'
import { CountCOntext } from './UseReducerwithContext'

function ReducerComF() {
    const CountContext = useContext(CountCOntext)
    return (
      <div>
            <h3>CompF - {CountContext.countState}</h3>
          <button onClick={()=>CountContext.countDispatch('increament')}>Increament</button>
          <button onClick={()=>CountContext.countDispatch('decreament')}>Decreament</button>
          <button onClick={()=>CountContext.countDispatch('reset')}>Reset</button>
      </div>
    )  
}


export default ReducerComF