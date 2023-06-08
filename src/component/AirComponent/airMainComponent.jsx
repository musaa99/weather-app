import React from "react";
import AirCard from "./airCard";
import AirQuality from "./airQuality";

const AirMainComponent = () => {
  return (
    <div className="">
      <div className="bg-white rounded-[10px] w-[530px] m-[30px] ">
        <AirQuality />
        <AirCard />
      </div>
    </div>
  );
};

export default AirMainComponent;
