import React from "react";
import DaysCard from "./daysCard";
import GreetUser from "./GreetUser";
// import MonthlyPieChart from "../../../charts/MonthlyPieChart";

const Index = () => {
    const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

    const currentDate = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayOfWeek = days[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  return (
    <div className=" lg:flex-1 w-full m-8 py-2 pl-6 pr-4">
      <div className="">
        <p className="font-normal text-2xl text-bold text-blue-600">
         {formattedTime} 
        </p>
        <p>{formattedDate}</p>
        <h1 className="lg:font-normal lg:text-2xl lg:text-bold text-blue-600">

        <GreetUser/>
        </h1>
      </div>
      <DaysCard/>
     
    </div>
  );
};

export default Index;
