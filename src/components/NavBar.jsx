import {React, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

function NavBar() {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-text-100 bg-background-900 flex justify-between items-center h-20 px-6'>
        <h1 className='uppercase font-bold text-xl'>akihiko</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>GitHub</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>About</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineMenu size="24px" /> : <AiOutlineClose size="24px" />}
        </div>
        <div className={
            !nav ? "fixed left-0 top-0 bg-background-900 h-[100%] w-[60%] p-8 ease-in-out duration-500 shadow-xl md:hidden" : 
            "fixed left-[-100%] top-0 bg-background-900 h-[100%] w-[60%] p-8 ease-in-out duration-500"
            }>
            <h1 className='uppercase font-bold text-xl'>akihiko</h1>
            <ul className='py-4'>
                <li className='p-4 border-b-2 border-primary-800'>GitHub</li>
                <li className='p-4 border-b-2 border-primary-800'>Projects</li>
                <li className='p-4 border-b-2 border-primary-800'>About</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar