import React from "react";
import AirCard from "./airCard";
import AirQuality from "./airQuality";

const AirMainComponent = () => {
  return (
    <div className="bg-white m-8 py-2 pl-6 pr-4">
      <div>
        <AirQuality />
        <AirCard />
      </div>
    </div>
  );
};

export default AirMainComponent;
