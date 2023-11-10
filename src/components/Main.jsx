import React from 'react'
import TiltElement from './TiltElement'

function Main() {
  return (
    <div className='w-full h-[1200px] bg-gradient-to-b from-background-950 to-background-900 from-0% to-50%'>
        <h1 className='text-3xl text-primary-200 font-extrabold text-center pt-16'>Projects</h1>
        <div className='p-3 grid grid-cols-2 gap-3 md:grid-cols-3 max-w-[1240px] mx-auto md:gap-6 md:p-6'>
          <TiltElement />
          <TiltElement />
          <TiltElement />
        </div>
    </div>
  )
}

export default Main