import React from "react";
//    import { weatherdata } from "../../assets/weatherdata";

const SunriseAndSunset = ({weatherdata}) => {
  return (

<div className=" bg-[antiquewhite] rounded my-[10px] p-[30px]">
    <h1>{weatherdata.city} </h1>

    <div className="grid grid-cols-2 gap-[80px]">
    <h1> sunrise <br/> {weatherdata.sunrise}</h1>
    <h1> sunset  <br/>  {weatherdata.sunset}</h1>

    </div>
</div>
  );
};

export default SunriseAndSunset;
