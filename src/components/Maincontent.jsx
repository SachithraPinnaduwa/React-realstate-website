import React from 'react'
import Searchbar from './Searchbar'
import Apartment from '../assets/apartment.jpg'

export default function Maincontent() {
  return (
    <div className="text-white bg-[url('./assets/apartmentb.jpg')]  bg-cover ">
        
        <div className="  w-full h-screen mx-auto text-center flex flex-col justify-center " >
            
           <Searchbar/>
          
        </div>
    </div>
  )
}
