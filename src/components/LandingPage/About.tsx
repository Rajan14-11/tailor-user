import Image from 'next/image'
import React from 'react'
import Images from '@/assets/Images'

function About() {
  return (
    <div className='h-screen bg-secondary flex-col flex md:flex-row relative md:py-4 items-end md:items-start'>
        <div className='bg-slate-100 w-[60%] h-[70vh] absolute right-0 flex justify-end p-[2vmax] shadow-xl hidden md:flex '>
            <h1 className='text-right text-black w-[30%] tracking-widest text-xl leading-loose '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
        <div className='h-36 text-center w-full text-3xl my-4 font-bold md:hidden'>
            <h1 className='text-white text-center'>About Us</h1>
        </div>
        <div className='w-full md:w-[60%] min-h-[85vh] bg-slate-100 relative md:absolute bottom-0 p-[2vmax] shadow-2xl flex flex-col md:flex-row translate-x-[-100vw] translate-y-[-10%] -rotate-z-[360deg] md:animate-aboutAnimation animate-aboutAnimationPhone pb-4'>
            <div className='w-full flex flex-col items-center text-black md:mr-4'>
                <Image className=' flex justify-center items-center md:w-[300px] w-[10rem] md:h-[300px] h-[10rem] rounded-[100%] hover:scale-110 md:mb-4 translate-y-[-30%] md:translate-y-0' src={Images.service2} alt="profile pic"/>
                <h1 className='text-xl md:text-2xl my-1 md:my-2 tracking-wider font-bold'>Tailor App</h1>
                <h2 className='text-xl md:text-2xl my-1 md:my-2 tracking-wider'>title</h2>
                <h3 className='text-xl md:text-2xl my-1 md:my-2 tracking-wider'>suntitle</h3>
            </div>
            <div className='w-full md:ml-4 my-4 md:my-12 text-lg md:text-xl mb-4'><p className='leading-10 tracking-widest text-center md:text-right mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium culpa nostrum architecto unde ipsum a.</p></div>
        </div>
    </div>
  )
}

export default About