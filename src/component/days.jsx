import React from "react";
// import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';
import {Rain} from 'weather-styled-icon';
const DayOverview = (props) => {
  const { day, Temp } = props;

  return (
     
      <div className="  bg-white shadow rounded-[20px] p-[6px] text-center m-[2px] items-center text-black font-semibold">
        <h1 className="w-[full] m-auto">
        <Rain  />
        </h1>
        <h6 className="text-2xl"> {day}</h6>
        <h4>{Temp}</h4>
        
      </div>
  );
};

export default DayOverview;
