import React from 'react'
import {BiLogoTailwindCss} from 'react-icons/bi'
import { useEffect, useState } from 'react';

function Hero() {
    const [angle, setAngle] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setAngle(angle + 0.1)
        }, 1);
        return () => clearInterval(interval);
    }, [angle]);

  return (
    <div className='flex p-3 flex-col text-center w-full max-w-[800px] mx-auto h-screen'>
        <p className='text-primary-200 text-2xl mt-20'>Welocome to</p>
        <h1 className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-primary-700 md:text-5xl'>my first tailwind site</h1>
        <p className='text-primary-200 text-xl mt-1'>I hope you like it!</p>
        <div className='flex justify-center mt-20'>
            <BiLogoTailwindCss size="200px" className='text-accent-400 drop-shadow-[0_0px_10px_rgba(74,107,161,1)]' style = {{transform: `rotate(${angle}deg)`}}/>
        </div>
    </div>
  )
}

export default Hero