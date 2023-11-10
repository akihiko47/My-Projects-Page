import {React, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {TbHexagonLetterA} from 'react-icons/tb'

function NavBar() {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed w-full z-30'>
        <div className='text-text-100 bg-background-940 flex justify-between items-center h-20 px-6 border-b-2 border-background-900 bg-opacity-70 backdrop-blur-md'>
            <div className='flex items-center'>
                <TbHexagonLetterA size="48px" className='text-primary-300'/>
                <h1 className='uppercase font-bold text-xl md:text-2xl text-primary-300 ml-0'>kihiko</h1>
            </div>
            <ul className='hidden md:flex'>
                <li className='px-4 py-2 font-bold bg-primary-300 text-background-800 rounded-md'>GitHub</li>
                <li className='px-4 py-2 font-bold'>Projects</li>
                <li className='px-4 py-2 font-bold'>About</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineMenu size="24px" className='text-primary-300' /> : <AiOutlineClose size="24px" className='text-primary-300'/>}
            </div>
            <div className={
                !nav ? "fixed left-0 top-0 bg-background-940 h-screen w-[70%] p-8 ease-in-out duration-500 shadow-xl md:hidden z-40 bg-opacity-90 backdrop-blur-lg border-r-2 border-background-900" : 
                "fixed left-[-100%] top-0 bg-background-940 h-screen w-[70%] p-8 ease-in-out duration-500 shadow-xl z-40 bg-opacity-90 backdrop-blur-lg border-r-2 border-background-900"
                }>
                <ul className='py-4 mt-10'>
                    <li className='pt-4 pb-2 border-b-2 border-background-600 font-bold'>GitHub</li>
                    <li className='pt-4 pb-2 border-b-2 border-background-600 font-bold'>Projects</li>
                    <li className='pt-4 pb-2 border-b-2 border-background-600 font-bold'>About</li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default NavBar