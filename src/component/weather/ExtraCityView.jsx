import React from 'react'
import { weatherdata } from '../../assets/weatherdata'

const ExtraCityView = () => {
  return (
    <div>
        <div className=" rounded-[10px] p-2   ">
          {weatherdata.map((x, index) => (
            <div
              key={index}
              className="lg:grid lg:grid-cols-3 gap-[10px]  "
            >
              <div className="whitespace-nowrap ">{x.city}</div>
              <div className="whitespace-nowrap">{x.sunrise}</div>
              <div className="whitespace-nowrap">{x.sunset}</div>
              
            </div>
          ))}
        </div>
    </div>
  )
}

export default ExtraCityView