import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { ChannelContext, UserContext } from './UseContextBasics'

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>ComponentE
        <ComponentF/>
        <br/>
        Using UseContext Hook
        <br/>
         {user} with {channel}
    </div>
  )
}

export default ComponentE