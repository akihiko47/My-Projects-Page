import React from 'react'
import {GiAbstract050} from 'react-icons/gi'
import { useEffect, useState } from 'react';

function Hero() {
  const [angle, setAngle] = useState(0)

  useEffect(() => {
      const interval = setInterval(() => {
        setAngle(angle + 0.04)
      }, 1);
      return () => clearInterval(interval);
  }, [angle]);

  const scrollToProjects = () => {
    window.scrollTo({
      top: 670,
      behavior: "smooth",
    });
  };


  return (
    <div className='flex p-2 flex-col text-center w-full h-[80vh] min-h-[700px] max-h-[1000px] max-w-[400px] mx-auto justify-center md:max-w-[1200px] md:p-10'>
        <h1 className='text-3xl text-transparent bg-clip-text bg-gradient-to-br from-text-50 to-primary-200 md:text-4xl md:text-left mt-28 leading-none md:w-[55%] uppercase font-bold'>this is a page with my projects</h1>
        <p className='text-text-50 text-md mt-5 md:text-lg md:w-[55%] md:text-left'>This is my first tailwind page. This page contains my projects with links to github. Hope you like it!</p>
        <div className='flex justify-center mt-20 md:absolute md:left-[65%] md:top-[25%]'>
            <GiAbstract050 size="200px" className='text-background-900' style = {{transform: `rotate(${angle}deg)`}}/>
        </div>
        <button type='button' onClick={scrollToProjects} className='transition-all ease-in-out duration-200 uppercase bg-primary-300 px-6 py-3 rounded-md mx-auto font-bold mt-14 hover:rounded-3xl hover:bg-primary-200 hover:shadow-md hover:shadow-primary-300 hover:-translate-y-2 md:ml-0'>view projects</button>
    </div>
    
  )
}

export default Hero