import React, { createContext } from 'react'
import ComponentC from './ComponentC'

export const UserContext = createContext()
export const ChannelContext = createContext()

function UseContextBasics() {
    const name = "Arnab";
    return (
        <div>
            UseContextBasics {name}
            <br />
            <UserContext.Provider value={name}>
                <ChannelContext.Provider value={"AbyHub"}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default UseContextBasics