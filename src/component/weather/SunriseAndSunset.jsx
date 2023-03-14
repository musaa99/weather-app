import React from "react";
//    import { weatherdata } from "../../assets/weatherdata";

const SunriseAndSunset = ({weatherdata}) => {
  return (

<div className="flex bg-[antiquewhite] m-2">
    <h1>{weatherdata.city}</h1>
    <h1>{weatherdata.condition}</h1>
</div>
  );
};

export default SunriseAndSunset;
