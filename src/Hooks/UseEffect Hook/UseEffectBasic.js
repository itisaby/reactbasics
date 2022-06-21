import React, { useEffect, useState } from 'react'

function UseEffectBasic() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    //useEffect is placed inside the component 
    useEffect(
        //when we specify useEffect we are basically requesting react to execute the function that is passed as an argument
        //useEffect runs after every render of the component
        ()=>{
            console.log("Updating document title")
            document.title = `You clicked ${count} times`
        },
        //conditionally executing an effect we pass a second parameter
        //array of values the effect is depend upon 
        [count]
    )
  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
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