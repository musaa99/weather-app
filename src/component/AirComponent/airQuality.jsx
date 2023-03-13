import React from 'react'
import AirCard from './airCard'

const AirQuality = () => {
  return (
    <div className=" m-8 py-2 pl-6 pr-4">
        <div className='flex justify-between'>
          <h1>Air Quatlty Index</h1>
          <p>utarra Dakar</p>
        </div>
        <div className='flex items-center justify-between'>
          <h1>Good <br/>a pefgect day</h1>
          <button className='p-2 bg-[red]'>Refresh</button>
        </div>
    </div>
  )
}

export default AirQuality