import React from 'react'
import { weatherdata } from '../../assets/weatherdata'
import SunriseAndSunset from './SunriseAndSunset'

const WeatherCard = () => {
  return (
      <div className='bg-white h-[465px] w-full'>
     <div className="p-[40px] ">
       {weatherdata.map((weatherdata) => (
        <SunriseAndSunset key={weatherdata.id} weatherdata={weatherdata}
         />
       ))}
     </div>

      </div>
  )
}

export default WeatherCard