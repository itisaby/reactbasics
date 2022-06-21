import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [Count, setCount] = useState(0)
    const tick = () =>{
        setCount(Count+1);
    }
    useEffect(
        ()=>{
            const interval = setInterval(tick, 1000)
            return () =>{
                clearInterval(interval)
            }
        }, [Count]
    )
  return (
    <div>IntervalHookCounter {Count}</div>
  )
}

export default IntervalHookCounter