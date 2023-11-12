import React from 'react';
import Tilt from 'react-parallax-tilt';

function TiltElement( { name, icon, link } ) {
  return (
    <Tilt
    className="h-full rounded-sm w-full aspect-square overflow-hidden group border-2 border-background-800 hover:z-10"
    perspective={900}
    glareEnable={true}
    glareMaxOpacity={0.1}
    transitionSpeed={1000}
    scale={1.2}
  >
    <img src={icon} className='group-hover:scale-125 transition ease-in-out duration-1000 w-full'></img>
    <div className='absolute left-0 top-0 h-full w-full bg-background-950 bg-opacity-60 group-hover:bg-opacity-30 transition-all ease-in-out duration-500 overflow-hidden'>
      <div className='bg-black bg-opacity-50 backdrop-blur-md w-full h-[20%] absolute top-[80%] drop-shadow-md transition-all ease-in-out duration-300 border-t-2 border-background-800'>
        <div className='flex justify-between w-full h-full px-5 items-center'>
          <h1 className='text-lg uppercase text-text-50 font-bold mr-4 leading-5'>{name}</h1>
          <a href={link} target='_blank'>
            <button type='button' className='transition-all ease-in-out duration-200 uppercase border-2 text-text-100 border-text-100 px-4 py-2 rounded-md font-bold hover:shadow-[0_5px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-text-100 hover:-translate-y-2 md:text-lg'>GitHub</button>
          </a>
        </div>
      </div>
    </div>

  </Tilt>
  )
}

export default TiltElement