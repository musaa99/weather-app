import React from "react";

const SideFooter = (props) => {
  const { header,hum, text,num,  customClassName } = props
  return (
    // < className={`w-[] xxxm:w-[] xm:w-[] mx-[auto] xxm:mx-[] lg:w-[]  lg:mx-[20px] lg: ${margin}`}>
    <div className={`${customClassName} grid grid-cols-2 text-center my-[4px] justify-between px-[20px]  divide-x `}>
            <h1>{header} <br/>{hum}</h1>
            <h1>{num} <br/>{text}</h1>
           
          </div>
             
  )
};

export default SideFooter;
