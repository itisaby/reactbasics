import React from 'react'

function CallBackCount({text, count}) {
  console.log(`${text} is rendered`)
  return (
    <div>
        {text} - {count}
    </div>
  )
}

export default React.memo(CallBackCount)