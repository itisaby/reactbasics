import React, { useEffect, useRef } from 'react'
import HookTimer from './HookTimer'

function UseRefBasics() {
    
    const inputRef = useRef(null)

    useEffect(
        () => {
            //focus on input element
            console.log('UseRefBasics')
            inputRef.current.focus()
        },[]
    )
  return (
    <div>
        <input ref={inputRef} type="text"/>
        <br/>
        <HookTimer/>
    </div>
  )
}

export default UseRefBasics