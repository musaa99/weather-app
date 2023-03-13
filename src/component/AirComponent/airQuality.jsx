import React from 'react'

const AirQuality = () => {
  return (
    <div className=" m-8 py-2 pl-6">
        <div className='flex justify-between'>
          <h1>Air Quatlty Index</h1>
          <p>utarra Dakar</p>
        </div>
        <div className='flex items-center justify-between'>
          <h1>Good <br/>A perfect day</h1>
          <button className='p-2 bg-[aliceblue]'>Refresh</button>
        </div>
    </div>
  )
}

export default AirQuality