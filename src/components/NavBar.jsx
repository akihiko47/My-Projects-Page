import {React, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

function NavBar() {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-text-100 bg-background-900 flex justify-between items-center h-20 px-6'>
        <h1 className='uppercase font-bold text-xl md:text-2xl text-primary-300'>akihiko</h1>
        <ul className='hidden md:flex'>
            <li className='px-4 py-2 font-bold bg-primary-500 text-background-800 rounded-md'>GitHub</li>
            <li className='px-4 py-2 font-bold'>Projects</li>
            <li className='px-4 py-2 font-bold'>About</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineMenu size="24px" className='text-primary-300' /> : <AiOutlineClose size="24px" className='text-primary-300'/>}
        </div>
        <div className={
            !nav ? "fixed left-0 top-0 bg-background-900 h-[100%] w-[60%] p-8 ease-in-out duration-500 shadow-xl md:hidden z-10" : 
            "fixed left-[-100%] top-0 bg-background-900 h-[100%] w-[60%] p-8 ease-in-out duration-500 z-10"
            }>
            <h1 className='uppercase font-bold text-xl text-primary-300'>akihiko</h1>
            <ul className='py-4'>
                <li className='pt-4 pb-2 border-b-2 border-background-600 font-bold'>GitHub</li>
                <li className='pt-4 pb-2 border-b-2 border-background-600 font-bold'>Projects</li>
                <li className='pt-4 pb-2 border-b-2 border-background-600 font-bold'>About</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar