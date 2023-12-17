import React from 'react'
import Searchbar from './Searchbar'
import Apartment from '../assets/apartment.jpg'

export default function Maincontent() {
  return (
    <div className='text-white'>
        {/* <img src={Apartment} alt="" className='w-full h-screen object-cover'/> */}
        {/* <h1 className='text-5xl font-bold text-center pt-10'>Welcome to Website</h1> */}
        <div className=' mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center bg-[url("../assets/apartment.jpg")]'>
            
           <Searchbar/>
          
        </div>
    </div>
  )
}
