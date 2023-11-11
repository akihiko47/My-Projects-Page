import React from 'react'
import TiltElement from './TiltElement'

function Main() {
  
  return (
    <div className='w-full bg-gradient-to-b from-background-950 to-background-940 from-0% to-20%'>
        <h1 className='text-3xl lg:text-4xl text-text-50 font-extrabold text-center pt-16'>Projects</h1>
        <div className='p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1240px] mx-auto lg:gap-10 lg:p-10'>
          <TiltElement />
          <TiltElement />
          <TiltElement />
        </div>
    </div>
  )
}

export default Main