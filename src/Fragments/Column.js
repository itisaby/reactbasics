import React from 'react'

{/* <React.Fragment> can be represented by an empty tag, <></>, which is called a Fragment. */}

function Column() {
    const items = [];
  return (
    <React.Fragment>
        {
            items.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        <h1>TItle</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                )
            })
        }
        <td>Name</td>
        <td>Age</td>
    </React.Fragment>
  )
}

export default Column