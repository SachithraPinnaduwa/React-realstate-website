import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { PiHouseBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [nav,setNav] = useState(false);
  const handleNav = () =>{
    setNav(!nav);
  }
  return (
    <div className='text-white justify-between flex items-center h-24 max-w-[1240px] px-4 mx-auto'>
        <h1 className='w-full text-3xl font-bold text-green-400 m-4' ><PiHouseBold/></h1>
        <ul className=' hidden md:flex'>
        <li className='p-4'><Link to="/">Home</Link></li>
          <li className='p-4'><Link to="/search">Search</Link></li>
          <li className='p-4'><Link to="/favourites">Favourites</Link></li>
          <li className='p-4'>ABOUT</li>
          <li className='p-4'>CONTACT</li>
        </ul>
        <div onClick={handleNav} className={!nav ?' block right-3  md:hidden':' block right-3 fixed md:hidden'}>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-gray-600 ease-in-out duration-500 md:hidden' : "fixed left-[-100%] h-full md:hidden"}>
        <h1 className='w-full text-3xl font-bold text-green-400 m-5 pt-4' >REACT.</h1>
          <ul className='pt-2  '>
          <li className='p-4 border-b'>HOME</li>
          <li className='p-4 border-b'>COMPANY</li>
          <li className='p-4 border-b'>RESOURCES</li>
          <li className='p-4 border-b'>ABOUT</li>
          <li className='p-4'>CONTACT</li>
        </ul>
        </div>
    </div>
  )
}
