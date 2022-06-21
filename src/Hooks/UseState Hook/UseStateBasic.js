import React, { useState } from 'react'

function UseStateBasic() {
    const [count, setCount] = useState(0);
    const handleSubmit = () => {
        console.log('clicked');
        setCount(count + 1);
    }
  return (
    <React.Fragment>
        UseStateBasic
        <br/>
        <button onClick={handleSubmit}>Count {count}</button>
        <button onClick={() => setCount(0)}>Clear</button>
    </React.Fragment>
  )
}


export default UseStateBasic