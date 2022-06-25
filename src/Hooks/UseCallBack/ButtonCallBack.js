import React from 'react'

function ButtonCallBack({handleClick, children}) {
  return (
    <button onCLick={handleClick}>
        {children}
    </button>
  )
}

export default ButtonCallBack