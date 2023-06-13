import React from 'react'
import AboutUs from './AboutUs'
import Services from './Services'

const MiddlePart = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-fit mb-4 px-2'>
        <div className='w-full md:w-1/3'><AboutUs/></div>
        <div className='w-full md:w-2/3'><Services/></div>
    </div>
  )
}

export default MiddlePart