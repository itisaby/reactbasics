import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button 

            onClick={
                //We are calling the parent function here because we want the child to call the parent function here and not the other way around
                props.greetHandler
            }
        >
            Greet parent
        </button>
        {/* we want to pass the paramaeter to the parent function */}
        <button onClick={() => props.greetHandler('child')}>Greet parent using parameter</button>
    </div>
  )
}

export default ChildComponent