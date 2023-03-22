import React from 'react'
import Body from './Body'
import FooterCard from './FooterCard'
import Navbar from './Navbar'

const Aside = () => {
  return (
    <div className='grid grid-cols-1 gap-2'>
        <Navbar/>
        <Body/>
        <FooterCard/>


    </div>
  )
}

export default Aside