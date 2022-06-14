import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>I am {person.name}, I am {person.cid} years old and I know {person.skill}</h2>
    </div>
  )
}

export default Person