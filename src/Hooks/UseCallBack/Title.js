import React from 'react'

function Title() {
  console.log("Title is rendered")
  return (
    <div>
        <h2>
            UseCallBack Hook
        </h2>
    </div>
  )
}

export default React.memo(Title)