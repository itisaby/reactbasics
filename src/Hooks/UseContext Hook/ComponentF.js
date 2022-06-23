import React from 'react'
import { UserContext, ChannelContext } from './UseContextBasics'

//consuming the context value using render props pattern(basically without using useContext)
function ComponentF() {
  return (
    <div>
        ComponentF
        <UserContext.Consumer>
            {
                user=>{
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel =>{
                                    return <div>User Context Value {user}, {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>
                    ) }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF