import React, { useState } from 'react'
import {FaArrowDown, FaArrowUp} from 'react-icons/fa'


const Navbar = () => {

const [toggle, settoggle] = useState(false)

  return (
    <div id='navbar' className=' fixed z-50 w-screen sm:w-full h-[55px]'>
        <div className=' w-full h-full bg-[#1b1b1b] text-center shadow-lg  '>
            <div className=' px-5 max-w-[1500px] w-full h-full mx-auto sm:flex items-center justify-between '>
                <h1 className='sm:inline-block hidden font-bold  text-2xl text-red-500 '><span className='text-red-400'>Bio</span>Anime</h1>
                <ul className='flex items-center  justify-center '>
                    <li className='font-semibold  text-gray-300  px-4 mt-2 pb-4 hover:border-b-4 border-red-400 hover:text-white hover:scale-105 transition ease-in-out duration-150'><a href="/">Anime</a></li>
                    <li className='font-semibold text-gray-300  px-4 mt-2 pb-4 hover:border-b-4 border-red-400 hover:text-white hover:scale-105 transition ease-in-out duration-150'><a href="/Schedule">Schedule</a></li>
                    <li className='font-semibold text-gray-300  px-4 mt-2 pb-4 hover:border-b-4 border-red-400 hover:text-white hover:scale-105 transition ease-in-out duration-150 ' ><a  onClick={ () => { settoggle(!toggle) } } href={toggle? "#contact" : "#"}>  <FaArrowDown className={!toggle? 'text-lg transition-all duration-100 ease-in  hover:text-red-400' : 'hidden transition-all duration-100 ease-in'}/> <FaArrowUp className={toggle? 'text-lg hover:text-red-400 transition-all duration-100 ease-in' : ' transition-all duration-100 ease-in hidden'} /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
