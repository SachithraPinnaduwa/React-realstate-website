import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { PiHouseBold } from "react-icons/pi";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const homeRef = useRef(null);
  const searchRef = useRef(null);
  const favouritesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const refs = {
      '/': homeRef,
      '/search': searchRef,
      '/favourites': favouritesRef,
    };
    Object.keys(refs).forEach((path) => {
      if (currentPath === path) {
        refs[path].current.classList.add('bg-slate-500', 'underline');
      } else {
        refs[path].current.classList.remove('bg-slate-500', 'underline');
      }
    });
  }, [location]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='text-black font-bold justify-between flex items-center h-15 max-w-[1240px] px-4 mx-auto'>
      <h1 className='w-full text-3xl font-bold text-green-400 m-4'><PiHouseBold /></h1>
      <ul className='hidden md:flex'>
        <li ref={homeRef} className='p-4 m-2 py-2 hover:bg-slate-500 hover:underline'><Link to="/">Home</Link></li>
        <li ref={searchRef} className='p-4 m-2 py-2 hover:bg-slate-500  hover:underline'><Link to="/search">Search</Link></li>
        <li ref={favouritesRef} className='p-4 m-2 py-2 hover:bg-slate-500  hover:underline'><Link to="/favourites">Favourites</Link></li>
      </ul>
      <div onClick={handleNav} className={!nav ? 'block right-3 md:hidden' : 'block right-3 fixed md:hidden'}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-gray-600 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] h-full md:hidden'}>
        <h1 className='w-full text-3xl font-bold text-green-400 m-5 pt-4'>RightMove</h1>
        <ul className='pt-2'>
          <li className='p-4'><Link to="/">Home</Link></li>
          <li className='p-4'><Link to="/search">Search</Link></li>
          <li className='p-4'><Link to="/favourites">Favourites</Link></li>
        </ul>
      </div>
    </div>
  );
}
