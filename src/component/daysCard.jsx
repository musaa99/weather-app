import React from "react";
import DayOverview from "./days";

const DaysCard = () => {
  return (
    <div className="lg:grid lg:grid-cols-7 lg:mr-[20px] text-center items-center">
      <DayOverview  day="Sun" Temp={23} />
      <DayOverview  day="Mon" Temp={23} />
      <DayOverview  day="Tue" Temp={23} />
      <DayOverview  day="Wed" Temp={23} />
      <DayOverview  day="Thur" Temp={23} />
      <DayOverview  day="Fri" Temp={23} />
      <DayOverview  day="Sat" Temp={23} />
    </div>
  );
};

export default DaysCard;
