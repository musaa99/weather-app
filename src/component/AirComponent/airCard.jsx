import React from 'react'
import Air from './air'

const AirCard = () => {
  return (
    <div className="grid grid-cols-6 mx-[20px]">
   <Air Temp={9.3} wind='pMZ' />
   <Air Temp={9.3} wind='pMZ' />
   <Air Temp={9.3} wind='pMZ' />
   <Air Temp={9.3} wind='pMZ' />
   <Air Temp={9.3} wind='pMZ' />
   <Air Temp={9.3} wind='pMZ' />
  
  </div>
  )
}

export default AirCard