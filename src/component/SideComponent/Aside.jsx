import React from 'react'
import Body from './Body'
import Navbar from './Navbar'

const Aside = () => {
  return (
    <div className='grid grid-cols-1 gap-2'>
        <Navbar/>
        <Body/>


    </div>
  )
}

export default Aside