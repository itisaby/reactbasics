import React from 'react'

function ButtonCallBack({handleClick, children}) {
  console.log("ButtonCallBack is rendered", children)
  return (
    <button onClick={handleClick}>
        {children}
    </button>
  )
}

export default React.memo(ButtonCallBack)