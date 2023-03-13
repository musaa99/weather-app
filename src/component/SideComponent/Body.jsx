import React from "react";
import Vector from "../../assets/Vector.svg";
const Body = () => {
  return (
    <div className="bg-blue-400 rounded p-4 grid grid-cols-1 gap-8">
      <h1>Abuja</h1>
      <div className="text-center grid  gap-[inherit]">
        <img className="m-auto" src={Vector} alt="" />
        <p>Today, 14 April</p>
        <h2>29 ^</h2>
        <h3>Sunny</h3>
          <div className="  mb-2 grid grid-cols-2 px-8 divide-x">
            <h1>wind</h1>
            <h1>19km/hr</h1>
          </div>
          <div className="grid grid-cols-2 px-8  divide-x">
            <h1>wind</h1>
            <h1>19km/hr</h1>
          </div>
      </div>
    </div>
  );
};

export default Body;
