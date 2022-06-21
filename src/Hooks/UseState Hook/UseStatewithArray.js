import React, { useState } from 'react'

function UseStatewithArray() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([
            ...items, 
        {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }
    ])

    }
  return (
    <div>
        <button onCLick={
            () => {
                setItems([
                    ...items, 
                {
                    id: items.length,
                    value: Math.floor(Math.random() * 10) + 1
                }
            ])
            console.log(items);
        }}
        >Add a Number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseStatewithArray