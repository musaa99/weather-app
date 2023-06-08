import React from "react";
import Index from "../component";
import AirMainComponent from "../component/AirComponent/airMainComponent";
import Aside from "../component/SideComponent/Aside";
import WeatherCard from "../component/weather/WeatherCard";
// import SunriseAndSunset from "../component/weather/SunriseAndSunset";

const Main = () => {
  return (
    <div className=" flex gap-[30px] m-[20px]">
      <div className="w-[70%]  mx-2">
        <Index />
        <div className="flex items-center ">
          <div>
          <AirMainComponent />
          <AirMainComponent />

          </div>
          <div>

          <WeatherCard/>
          </div>
        </div>
      </div>
      <div className="bg-white p-[20px]">
          <Aside/>
      </div>
    </div>
  );
};

export default Main;
