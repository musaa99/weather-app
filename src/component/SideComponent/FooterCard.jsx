import React from 'react'
import SideFooter from './SideFooter';



const FooterCard = () => {
  const basicContents = ['one branch',
   ' access to Luchismart mobile app',
   ' video intercom system',
    'access control',
    'workflow management',
    'compliance',
    'maximum of 5 staffs'];
  const standardContents = ['multi-branch',
    'video intercom',
   ' access control',
    'workflow management',
   ' compliance',
  '  luchismart mobile App',
   ' maximum of 100 staff'];
 
  return (
    <div className='m-4'>
    <div className=  ' block gap-2  w-[auto] m-auto' >
      <SideFooter    
          header="Basic"
          contents={basicContents}
          num={5}
          btnText='Purchase'
          btnColor='text-[#FFE24D]'
          customClassName="bg-[#FFE24D33]  rounded-t-[40px] w-auto m-auto "
      />
      <SideFooter 
          header="Standard"
          contents={standardContents}
          num={10}
          btnText='Upgrade'
          btnColor='text-[#FF7777]'
          customClassName="bg-[#FF777733] rounded-t-[40px] w-auto m-auto  "
      />
      
    
            
    </div>

    </div>
    
  )
}

export default FooterCard