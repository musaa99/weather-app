import React from "react";

const DayOverview = (props) => {
  const { day, img, Temp } = props;

  return (
     
      <div className="  bg-white shadow rounded-[20px] p-[6px] m-[2px] items-center text-black font-semibold">
        <img  src={img} alt='icon' className='m-auto'/>
        <h6 className=""> {day}</h6>
        <h4>{Temp}</h4>
        
      </div>
  );
};

export default DayOverview;
