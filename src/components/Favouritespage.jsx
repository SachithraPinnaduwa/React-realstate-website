import React from 'react'
import Favourites from './Favourites'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Card from './Card'
import Footer from './Footer'
export default function Favouritespage() {
  return (
    <div className="text-white bg-[url('./assets/apartmentb.jpg')]  bg-cover ">
        
        <div className="  w-full  mx-auto text-center " >
          
    
           <div className='w-full  px-4  '>
           <Favourites/>
           </div>
              
          
          
        </div>
    </div>
  )
}
