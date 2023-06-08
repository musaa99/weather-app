import React from 'react'

const Air = (props) => {
    const { wind, Temp } = props;
  return (
    <div className=" block bg-[green/0.5]  shadow rounded-[20px] p-[20px] m-[10px] text-center text-[green] font-semibold">
    <h4>{Temp}</h4>
    <h6 className=""> {wind}</h6>
    
  </div>
  )
}

export default Air