import React from 'react'
import {TbHexagonLetterA} from 'react-icons/tb'
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
    <div className='flex p-2 flex-col text-center w-full h-screen pattern-cross pattern-background-940 pattern-bg-background-950 
    pattern-size-24 pattern-opacity-100'>
        <p className='text-primary-200 text-xl mt-20'>Welocome to</p>
        <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-primary-800 md:text-5xl'>my projects</h1>
        <p className='text-primary-200 text-xl mt-5'>I hope you like them!</p>
        <div className='flex justify-center mt-20 blur-md opacity-25'>
            <TbHexagonLetterA size="300px" className='text-primary-300' style = {{transform: `rotate(${angle}deg)`}}/>
        </div>
        <button type='button' className='transition-all ease-in-out duration-200 uppercase bg-primary-300 px-6 py-3 rounded-md mx-auto font-extrabold mt-14 hover:rounded-3xl hover:bg-primary-200 hover:shadow-md hover:shadow-primary-300 hover:-translate-y-2'>view projects</button>
    </div>
    
  )
}

export default Hero