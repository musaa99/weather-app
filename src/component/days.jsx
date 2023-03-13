import React from "react";

const DayOverview = (props) => {
  const { day, img, Temp } = props;

  return (
     
      <div className=" block bg-white shadow rounded-[20px] p-6 m-2 items-center text-black font-semibold">
        <img src={img} alt='icon' className=''/>
        <h6 className=""> {day}</h6>
        <h4>{Temp}</h4>
        
      </div>
  );
};

export default DayOverview;
