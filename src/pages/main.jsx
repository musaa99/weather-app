import React from "react";
import Index from "../component";
import AirMainComponent from "../component/AirComponent/airMainComponent";
import Aside from "../component/SideComponent/Aside";

const Main = () => {
  return (
    <div className=" flex gap-4 m-4">
      <div className="w-[70%]  mx-2">
        <Index />
        <div>
          <AirMainComponent />
          <AirMainComponent />
        </div>
      </div>
      <div className="bg-white p-4">
          <Aside/>
      </div>
    </div>
  );
};

export default Main;
