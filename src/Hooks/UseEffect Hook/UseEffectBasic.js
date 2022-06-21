import React, { useEffect, useState } from 'react'

function UseEffectBasic() {
    const [count, setCount] = useState(0)
    //useEffect is placed inside the component 
    useEffect(
        //when we specify useEffect we are basically requesting react to execute the function that is passed as an argument
        //useEffect runs after every render of the component
        ()=>{
            document.title = `You clicked ${count} times`
        }
    )
  return (
    <div>
        <button
            onClick={
                ()=>{
                    setCount(count+1)
                }
            }
        >
            Click {count} times
        </button>
    </div>
  )
}

export default UseEffectBasic