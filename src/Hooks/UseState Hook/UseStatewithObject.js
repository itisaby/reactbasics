import React, { useState } from 'react'

function UseStatewithObject() {
    const [name, setName] = useState({
        FirstName: '',
        LastName: ''
    });
  return (
    <div>
        <form>
            <input type="text"
            value={name.FirstName}
            onChange={
                (e) => {
                    setName({
                        ...name,
                        FirstName: e.target.value,
                    });}
            }/>
            <input type="text" 
            value={name.LastName}
            onChange={
                (e) => {
                    setName({
                        ...name,
                        LastName: e.target.value,
                    });}

            }/>
            <h2>Your first name is {name.FirstName}</h2>
            <h2>Your Last name is {name.LastName}</h2>
            {JSON.stringify(name)}
        </form>
    </div>
  )
}

export default UseStatewithObject