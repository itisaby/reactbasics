
import React from 'react'

export const Employee = (props) => {
    return (
      <div className="employee">
        <h2>Your Name: {props.name}</h2>
        <h3>Your CID: {props.cid}</h3>
      </div>
    );
  }
  