import React, { useState, useMemo } from 'react'

function UseMemoCounter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const increamentOne = () =>{
        setCounterOne(counterOne + 1)
    }

    const increamentTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(
      () =>{
        let i=0;
        while(i<2000000000){
            i++;
        }
        return counterOne % 2 === 0
    }, [counterOne])
    
    
  return (
    <div>
        <button onClick={increamentOne}>Count One - {counterOne}</button>
        <span>{isEven? 'Even':'odd'}</span>
        <button onClick={increamentTwo}>Count Two - {counterTwo}</button>
    </div>
  )
}

export default UseMemoCounter