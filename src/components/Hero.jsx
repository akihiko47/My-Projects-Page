import React from 'react'
import {BiLogoTailwindCss} from 'react-icons/bi'
import { useEffect, useState } from 'react';

function Hero() {
    const [angle, setAngle] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setAngle(angle + 0.02)
        }, 1);
        return () => clearInterval(interval);
    }, [angle]);

  return (
    <div className='flex p-3 flex-col text-center w-full max-w-[800px] mx-auto h-screen'>
        <p className='text-primary-200 text-xl mt-20'>Welocome to</p>
        <h1 className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-primary-700 md:text-5xl'>my first tailwind site</h1>
        <p className='text-primary-200 text-xl mt-1'>I hope you like it!</p>
        <div className='flex justify-center mt-20 blur-lg'>
            <BiLogoTailwindCss size="300px" className='text-accent-400 drop-shadow-[0_0px_10px_rgba(74,107,161,1)]' style = {{transform: `rotate(${angle}deg)`}}/>
        </div>
        <button type='button' className='transition-all ease-in-out duration-200 uppercase bg-accent-500 px-6 py-3 rounded-md mx-auto font-extrabold mt-14 hover:rounded-3xl hover:bg-primary-500 hover:shadow-md hover:shadow-primary-700 hover:-translate-y-2'>view projects</button>
    </div>
  )
}

export default Hero