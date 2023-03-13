import React from "react";
import DayOverview from "./days";
import Vector from "../assets/Vector.svg";

const DaysCard = () => {
  return (
    <div className="grid grid-cols-7 pr-[200px] text-center items-center">
      <DayOverview img={Vector} day="Sun" Temp={23} />
      <DayOverview img={Vector} day="Mon" Temp={23} />
      <DayOverview img={Vector} day="Tue" Temp={23} />
      <DayOverview img={Vector} day="Wed" Temp={23} />
      <DayOverview img={Vector} day="Thur" Temp={23} />
      <DayOverview img={Vector} day="Fri" Temp={23} />
      <DayOverview img={Vector} day="Sat" Temp={23} />
    </div>
  );
};

export default DaysCard;
