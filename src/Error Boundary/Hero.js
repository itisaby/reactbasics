import React from 'react'

function Hero({heroName}) {
    if(heroName==='Joker'){
        throw new Error('Joker is not a hero')
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero