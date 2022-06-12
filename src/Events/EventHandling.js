import React from 'react'

function EventHandling() {
    function clickHandler(){
        alert('You clicked me');
    }
  return (
    <>
        <button
            onClick={clickHandler}
            //onClick={clickHandler()} THis is wrong as it's a function call and not a function declaration
        >
            Click me
        </button>
    </>
  )
}

export default EventHandling