import React from 'react';
import Tilt from 'react-parallax-tilt';

function TiltElement( { glareEnable } ) {
  return (
    <Tilt
    className="h-full rounded-lg w-full aspect-square overflow-hidden group"
    perspective={900}
    glareEnable={true}
    glareMaxOpacity={0.1}
    scale={1.02}
  >
    <img src='./assets/banger.jpg' className='group-hover:scale-125 transition ease-in-out duration-1000'></img>
    <div className='absolute left-0 top-0 h-full w-full bg-background-950 bg-opacity-70 group-hover:bg-opacity-60 transition-all ease-in-out duration-500'>
      <div className='flex h-full items-center justify-center inner-element'>
        <div className='font-bold text-xl text-center text-primary-300 md:text-2xl transition-all ease-in-out duration-300 group-hover:text-2xl uppercase'>Banger</div>
      </div>
    </div>

  </Tilt>
  )
}

export default TiltElement