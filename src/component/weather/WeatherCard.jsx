import React from 'react'
import { weatherdata } from '../../assets/weatherdata'
import ExtraCityView from './ExtraCityView'
import SunriseAndSunset from './SunriseAndSunset'

const WeatherCard = () => {
  return (
      <div className='bg-white text-center lg:h-[465px] lg:w-full'>
    <h1>Sunrise & Sunset</h1>

     <div className="p-[40px] ">
       {weatherdata.map((weatherdata) => (
        <SunriseAndSunset key={weatherdata.id} weatherdata={weatherdata}
         />
       ))}
     </div>
     <ExtraCityView/>

      </div>
  )
}

export default WeatherCard