import React, { useEffect, useRef } from 'react'

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
    </div>
  )
}

export default UseRefBasics