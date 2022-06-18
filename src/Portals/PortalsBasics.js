import React from 'react'
import ReactDOM  from 'react-dom'
function PortalsBasics() {
  return ReactDOM.createPortal(
    <h1>PortalsBasics</h1>,
    document.getElementById('portal-root')
  )
}
 
export default PortalsBasics