import React,{useState, useEffect} from 'react'

function HookMouse() {

    const[x, setX] = useState(0);
    const[y, setY] = useState(0);
    
    const logMousePosition = e =>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(() => {
        console.log("useEffect Called")
        window.addEventListener('mousemove', logMousePosition)
        //For unmounting an event\
        //CLean Up Code 
        return ()=>{
            console.log("Component Unmounted")
            window.removeEventListener('mousemove', logMousePosition)
        }
    },
    //For running only once
    [])
    
  return (
    <div>
        HookMouse
        Hooks X - {x}
        Hooks Y - {y}
    </div>
  )
}

export default HookMouse