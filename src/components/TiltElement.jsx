import React from 'react';
import Tilt from 'react-parallax-tilt';

function TiltElement( { glareEnable } ) {
  return (
    <Tilt
    className="h-full rounded-sm w-full aspect-square overflow-hidden group border-2 border-background-800"
    perspective={900}
    glareEnable={true}
    glareMaxOpacity={0.1} 
    scale={1.02}
  >
    <img src='./assets/banger.jpg' className='group-hover:scale-125 transition ease-in-out duration-1000'></img>
    <div className='absolute left-0 top-0 h-full w-full bg-background-950 bg-opacity-70 group-hover:bg-opacity-60 transition-all ease-in-out duration-500 overflow-hidden'>
      <div className='bg-black bg-opacity-50 backdrop-blur-md w-full h-[50%] absolute top-[50%] md:top-[81%] drop-shadow-md group-hover:top-[50%] transition-all ease-in-out duration-300 border-t-2 border-background-800'>
        <div className='flex justify-between w-full h-full p-2 flex-col items-center'>
          <h1 className='text-xl uppercase text-text-50 md:text-2xl text-center'>banger</h1>
          <a href="https://github.com/akihiko47/Banger" target='_blank'>
            <button type='button' className='transition-all ease-in-out duration-200 uppercase bg-primary-300 m-3 px-6 py-2 rounded-md font-bold hover:rounded-3xl hover:bg-primary-200 hover:shadow-md hover:shadow-primary-300 hover:-translate-y-2 md:text-lg'>GitHub</button>
          </a>
        </div>
      </div>
    </div>

  </Tilt>
  )
}

export default TiltElement