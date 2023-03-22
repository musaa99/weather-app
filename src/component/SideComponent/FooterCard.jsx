import React from 'react'
import SideFooter from './SideFooter';



const FooterCard= () => {
  
  
   return (
    <>
    <div className=  ' block ' >
      <SideFooter   
          header="wind"
          num='13km/h'
          hum='humidity'
          text="27km/h"
          customClassName="bg-[#FFE24D33] p-[20px] "
          
      />
      <SideFooter   
          header="wind"
          num='33km/h'
          hum='humidity'
          text="17km/h"
          customClassName="bg-[red] border-[20px]   p-[20px] "
          
      />
      
            
    </div>
    </>
    
  )
}

export default FooterCard