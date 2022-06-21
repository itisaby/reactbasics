import React, { useState } from 'react'

const UseState2 = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const increament5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>

            {/* Right way to update state based on previous state method */}
            <button onClick={() => setCount(prevState => prevState + 1)}>Increament</button>
            <button onClick={() => {
                if (count > 0) {
                    setCount(prevState => prevState - 1)
                }
            }}
            >Decreament</button>
            <button onClick={increament5}>Increament 5</button>
        </div>
    )
}

export default UseState2;